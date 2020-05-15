import instance from "./instance.api";

export const getUser = (userId) => {
  const options = {
    headers: {
      Authorization:
        sessionStorage.getItem("_token") && sessionStorage.getItem("_token").length !== 0
          ? `Bearer ${sessionStorage.getItem("_token")}`
          : "",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return instance.get(`/api/Users/Get?userId=${userId}`, options);
};

export const getAllUsers = () => {
  const options = {
    headers: {
      Authorization:
        sessionStorage.getItem("_token") && sessionStorage.getItem("_token").length !== 0
          ? `Bearer ${sessionStorage.getItem("_token")}`
          : "",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return instance.get("/api/Users/GetAll", options);
};
