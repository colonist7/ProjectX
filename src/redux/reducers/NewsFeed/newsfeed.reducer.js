import { tweet, getTweets } from "../../../api/tweets.api";
import { sendComment, getComments } from "../../../api/comments.api";

const CREATE_POST = "CREATE_POST";
const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS";
const CREATE_POST_ERROR = "CREATE_POST_ERROR";
const GET_POSTS = "GET_POSTS";
const GET_POSTS_SUCCESS = "GET_POSTS_SUCCESS";
const GET_POSTS_ERROR = "GET_POSTS_ERROR";
const CREATE_POST_COMMENT = "CREATE_POST_COMMENT";
const CREATE_POST_COMMENT_SUCCESS = "CREATE_POST_COMMENT_SUCCESS";
const CREATE_POST_COMMENT_ERROR = "CREATE_POST_COMMENT_ERROR";
const GET_POST_COMMENTS = "GET_POST_COMMENTS";
const GET_POST_COMMENTS_SUCCESS = "GET_POST_COMMENTS_SUCCESS";
const GET_POST_COMMENTS_ERROR = "GET_POST_COMMENTS_ERROR";

let initialState = {
  createPostLoading: false,
  createPostError: false,
  posts: [],
  postsLoading: false,
  postsError: false,
  createCommentLoading: false,
  createCommentError: false,
  getPostCommentsLoading: false,
  getPostCommentsError: false,
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
    case GET_POSTS_SUCCESS: {
      let posts = action.payload;
      posts.sort((a, b) => b.postDate - a.postDate);
      return { ...state, postsLoading: false, createPostLoading: false, posts: posts };
    }
    case GET_POSTS_ERROR:
      return { ...state, postsLoading: false, postsError: true };
    case CREATE_POST_COMMENT:
      return { ...state, createCommentLoading: true, createCommentError: false };
    case CREATE_POST_COMMENT_SUCCESS:
      return { ...state, createCommentLoading: false, createCommentError: false };
    case CREATE_POST_COMMENT_ERROR:
      return { ...state, createCommentLoading: false, createCommentError: true };
    case GET_POST_COMMENTS:
      return { ...state, getPostCommentsLoading: true, getPostCommentsError: false };
    case GET_POST_COMMENTS_SUCCESS: {
      let posts = [...state.posts];
      let post = posts.find((post) => post.id === action.payload.postId);
      if (post) {
        let postIndex = posts.indexOf(post);
        post.comments = action.payload.comments;
        posts[postIndex] = post;
      }
      return { ...state, posts, getPostCommentsLoading: false, getPostCommentsError: false };
    }
    case GET_POST_COMMENTS_ERROR:
      return { ...state, getPostCommentsLoading: false, getPostCommentsError: true };
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
export const createPostComment = (postId, comment) => (dispatch) => {
  dispatch({ type: CREATE_POST_COMMENT });
  sendComment(postId, comment).then(
    () => {
      dispatch({ type: CREATE_POST_COMMENT_SUCCESS });
      dispatch(getPostComments(postId));
    },
    () => {
      dispatch({ type: CREATE_POST_COMMENT_ERROR });
    }
  );
};
export const getPostComments = (postId) => (dispatch) => {
  dispatch({ type: GET_POST_COMMENTS });
  getComments(postId).then(
    (res) => {
      dispatch({ type: GET_POST_COMMENTS_SUCCESS, payload: { comments: res.data.data.comments, postId } });
    },
    () => {
      dispatch({ type: GET_POST_COMMENTS_ERROR });
    }
  );
};
