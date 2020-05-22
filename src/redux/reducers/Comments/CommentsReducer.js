import { sendComment } from "../../../api/comments.api";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const postComment = (id, text) => (dispatch) => {
  sendComment(id, text);
};
