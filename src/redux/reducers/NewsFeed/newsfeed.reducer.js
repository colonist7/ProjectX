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
    default:
      return state;
  }
};

export const createPost = (post) => (dispatch) => {
  dispatch({ type: CREATE_POST });
  tweet(post).then(
    () => {
      dispatch({ type: CREATE_POST_SUCCESS });
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
      debugger;
      dispatch({ type: GET_POSTS_SUCCESS, payload: res });
    },
    () => {
      dispatch({ type: GET_POSTS_ERROR });
    }
  );
};
