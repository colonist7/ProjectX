import instance from "./instance.api";

export const follow = (userId, userName) => {
  return instance.post("/api/Followers/Follow", {
    userId,
    userName,
  });
};

export const getFollowers = () => {
  return instance.get("/api/Followers/Followers");
};

export const getFollowing = () => {
  return instance.get("/api/Followers/Following");
};
