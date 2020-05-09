import instance from "./instance.api";

export const auth = (userName, password) => {
  return instance.post("api/Auth/Login", {
    userName,
    password,
  });
};

export const register = (email, userName, password, repeatPassword) => {
  return instance.post("api/Auth/Register", {
    email,
    userName,
    password,
    repeatPassword,
  });
};
