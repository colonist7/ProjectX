import instance from "./instance.api";

export const tweet = (tweetText) => {
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
    "/api/Tweets/Post",
    {
      tweetText,
    },
    options
  );
};
