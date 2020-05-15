import instance from "./instance.api";

export const auth = (userName, password) => {
  const options = {
    headers: {
      Authorization:
        sessionStorage.getItem("_token") && sessionStorage.getItem("_token").length !== 0
          ? `Bearer ${sessionStorage.getItem("_token")}`
          : "",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return instance.post(
    "api/Auth/Login",
    {
      userName,
      password,
    },
    options
  );
};

export const register = (email, userName, password, repeatPassword) => {
  return instance.post("api/Auth/Register", {
    email,
    userName,
    password,
    repeatPassword,
  });
};
