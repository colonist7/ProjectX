import instance from "./instance.api";

export const auth = (userName, password) => {
  return instance.post("api/Auth/Login", {
    userName,
    password,
  });
};

export const register = (userMail, userName, password, confirmPassword) => {
  return instance.post("api/Auth/Login", {
    userMail,
    userName,
    password,
    confirmPassword,
  });
};
