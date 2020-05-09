import instance from "./instance.api";

export const getUser = (userId) => {
  return instance.get(`/api/Users/Get?userId=${userId}`);
};
