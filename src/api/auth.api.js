import instance from "./instance.api";

export const auth = (userName, password) => {
  instance.post("api/Auth/Login", {
    userName,
    password,
  });
};
