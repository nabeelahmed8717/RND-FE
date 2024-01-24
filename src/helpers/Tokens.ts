//access token
export const setToken = (accessToken: string) =>
  localStorage.setItem("accessToken", accessToken);
export const getToken = () => localStorage.getItem("accessToken");

// refresh token
export const setRefreshToken = (refreshToken: string) =>
  localStorage.setItem("refreshToken", refreshToken);
export const getRereshToken = () => localStorage.getItem("refreshToken");

// roles
export const setDummyRoles = (Role: string) =>
  localStorage.setItem("ROLE", Role);
export const getDummyRoles = () => localStorage.getItem("ROLE") as string;

// user info
export const setUserInfo = (userInfo: any) =>
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
export const getUserInfo = () => {
  const data = localStorage.getItem("userInfo");
  return data ? JSON.parse(data) : "";
};

// remember me
export const setRememberMe = (RememberMe: boolean) =>
  localStorage.setItem("RememberMe", JSON.stringify(RememberMe));
export const getRememberMe = () => {
  const remeberMe = localStorage.getItem("RememberMe") ?? "false";
  console.log(remeberMe, "remeberMeremeberMe");

  return remeberMe;
};

// roles info
export const setRolesInfo = (rolesInfo: any) =>
  localStorage.setItem("rolesInfo", JSON.stringify(rolesInfo));
export const getRolesInfo = () => {
  const data = localStorage.getItem("rolesInfo") ?? "";
  return JSON.parse(data);
};
