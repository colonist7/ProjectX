import instance from "./instance.api";

export const follow = (userId, userName) => {
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
    "/api/Followers/Follow",
    {
      userId,
      userName,
    },
    options
  );
};

export const getFollowers = () => {
  const options = {
    headers: {
      Authorization:
        sessionStorage.getItem("_token") && sessionStorage.getItem("_token").length !== 0
          ? `Bearer ${sessionStorage.getItem("_token")}`
          : "",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return instance.get("/api/Followers/Followers", options);
};

export const getFollowing = () => {
  const options = {
    headers: {
      Authorization:
        sessionStorage.getItem("_token") && sessionStorage.getItem("_token").length !== 0
          ? `Bearer ${sessionStorage.getItem("_token")}`
          : "",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return instance.get("/api/Followers/Following", options);
};
