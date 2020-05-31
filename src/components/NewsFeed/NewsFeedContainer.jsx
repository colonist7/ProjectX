import React from 'react';
import { connect } from 'react-redux';
import {
	createPost,
	getPosts,
	createPostComment,
	getPostComments,
} from '../../redux/reducers/NewsFeed/newsfeed.reducer';
import { NewsFeedShell } from './Newsfeed.shell';

const NewsFeedContainer = (props) => {
	return <NewsFeedShell props={props} />;
};

let mapStateToProps = (state) => {
	let { createPostLoading, createPostError, posts, postsLoading, postsError } = state.newsfeedReducer;
	return { createPostLoading, createPostError, posts, postsLoading, postsError };
};

let mapDispatchToProps = (dispatch) => {
	return {
		createPost: (post) => {
			dispatch(createPost(post));
		},
		getPosts: () => {
			dispatch(getPosts());
		},
		createPostComment: (postId, comment) => {
			dispatch(createPostComment(postId, comment));
		},
		getPostComments: (postId) => {
			dispatch(getPostComments(postId));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedContainer);
