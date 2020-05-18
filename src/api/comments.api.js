import instance from "./instance.api";

export const sendComment = (id, text) => {
  const options = {
    headers: {
      Authorization:
        sessionStorage.getItem("_token") && sessionStorage.getItem("_token").length !== 0
          ? `Bearer ${sessionStorage.getItem("_token")}`
          : "",
      "Access-Control-Allow-Origin": "*",
    },
  };

  return instance.post("/api/Comments/Post", { tweetID: id + "", text: text }, options);
};
