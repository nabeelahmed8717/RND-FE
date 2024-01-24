export const setToken = (accessToken: any) =>
  localStorage.setItem("accessToken", accessToken);
export const setData = (data: any) =>
  localStorage.setItem("data", JSON.stringify(data));
