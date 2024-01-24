import axios from "axios";
import { endpoints } from "../config/endpoints";
import { getRememberMe, getRereshToken, getToken, getUserInfo, setToken } from "./Tokens";
export const BASE_URL = "https://gateway-dev.rndtaxclaims.uk";

export const apiGetRequest = (endpoint: string, token = null, props = {}) => ApiRequest("GET", endpoint, token, props);
// Post request Function
export const apiPostRequest = (endpoint: string, payload: any, token = null) => ApiRequest("POST", endpoint, token, { data: payload });
// Patch request Function
export const apiPatchRequest = (endpoint: string, payload: any, token = null) => ApiRequest("PATCH", endpoint, token, { data: payload });
// Put Request Function
export const apiPutRequest = (endpoint: string, payload: any, token = null) => ApiRequest("PUT", endpoint, token, { data: payload });
// Delete Request Function
export const apiDeleteRequest = (endpoint: string, token = null, props = {}) => ApiRequest("DELETE", endpoint, token, props);
// Api Request for all the api methods
//Get GET get
export const ApiRequest = (method: string, endpoint: string, token: any = null, props: any = {}) => {
  if (!token) {
    token = getToken();
  }
  const params: any = {
    method,
    baseURL: BASE_URL,
    url: endpoint,
    params: method.toLowerCase() === "get" || method.toLowerCase() === "delete" ? props : undefined,
    headers:
      method.toLowerCase() === "put"  
        ? {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          }
        : {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
  };
  Object.assign(params, props);
  if (token) {
    params.headers.Authorization = `Bearer ${token}`;
  }
  return axios(params);
};

// interceptors
axios.interceptors.request.use(
  (config) => {
    const refreshToken = getRereshToken();
    const userInfo = getUserInfo();
    const rememberMe = getRememberMe();

    console.log("hi from request interceptor", config);
    return config;
  },
  (error) => {
    const refreshToken = getRereshToken();
    const userInfo = getUserInfo();
    const rememberMe = getRememberMe();
    try {
      if (rememberMe === "true" && error.response.status === 401 && userInfo.cognitoId && refreshToken) {
        axios
          .post(`${BASE_URL}/${endpoints.rememberMe}`, {
            username: userInfo.cognitoId,
            refreshToken: refreshToken,
          })
          .then((response) => {
            setToken(response.data.accessToken);
          })
          .catch((error) => error);
      }
    } catch (error) {}
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("hello from interceptor");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const refreshToken = getRereshToken();
    const userInfo = getUserInfo();

    const rememberMe = getRememberMe();
    try {
      if (rememberMe === "true" && error.response.status === 401 && userInfo.cognitoId && refreshToken) {
        axios
          .post(`${BASE_URL}/${endpoints.rememberMe}`, {
            username: userInfo.cognitoId,
            refreshToken: refreshToken,
          })
          .then((response) => {
            setToken(response.data.accessToken);
          })
          .catch((error) => error);
      }
    } catch (error) {}
    return Promise.reject(error);
  }
);
