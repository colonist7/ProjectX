import { tweet, getTweets } from "../../../api/tweets.api";

const CREATE_POST = "CREATE_POST";
const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
const CREATE_POST_ERROR = "CREATE_POST_ERROR";
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";

let initialState = {
  createPostLoading: false,
  createPostError: false,
  posts: [],
  postsLoading: false,
  postsError: false,
};

export const newsfeedReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return { ...state, createPostLoading: true, createPostError: false };
    case CREATE_POST_SUCCESS:
      return { ...state, createPostError: false, createPostLoading: false };
    case CREATE_POST_ERROR:
      return { ...state, createPostError: true, createPostLoading: false };
    case GET_POSTS:
      return { ...state, postsLoading: true, postsError: false };
    case GET_POSTS_SUCCESS:
      let posts = action.payload;
      posts.sort((a, b) => b.postDate - a.postDate);
      return { ...state, postsLoading: false, createPostLoading: false, posts: posts };
    case GET_POSTS_ERROR:
      return { ...state, postsLoading: false, postsError: true };
    default:
      return state;
  }
};

export const createPost = (post) => (dispatch) => {
  dispatch({ type: CREATE_POST });
  tweet(post).then(
    () => {
      dispatch({ type: CREATE_POST_SUCCESS });
      dispatch(getPosts());
    },
    () => {
      dispatch({ type: CREATE_POST_ERROR });
    }
  );
};

export const getPosts = () => (dispatch) => {
  dispatch({ type: GET_POSTS });
  getTweets().then(
    (res) => {
      let myPosts = res.data.data.tweets;
      getTweets("", true).then(
        (res) => {
          let friendsPosts = res.data.data.tweets;
          let allPosts = [...myPosts, ...friendsPosts];
          dispatch({ type: GET_POSTS_SUCCESS, payload: allPosts });
        },
        () => {
          dispatch({ type: GET_POSTS_ERROR });
        }
      );
    },
    () => {
      dispatch({ type: GET_POSTS_ERROR });
    }
  );
};
