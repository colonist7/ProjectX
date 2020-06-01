import React, { Component } from 'react';
import WritePost from './WritePost';
import Posts from './Posts';

export class NewsFeedShell extends Component {
	componentDidMount = () => {
		this.props.props.getPosts();
		this.props.props.getPostComments();
	};

	render() {
		let {
			createPost,
			createPostLoading,
			createPostError,
			posts,
			postsLoading,
			postsError,
			createPostComment,
			getPostComments,
		} = this.props.props;

		return (
			<>
				<WritePost
					createPost={createPost}
					createPostLoading={createPostLoading}
					createPostError={createPostError}
				/>
				<Posts
					posts={posts}
					postsLoading={postsLoading}
					postsError={postsError}
					createPostComment={createPostComment}
					getPostComments={getPostComments}
				/>
			</>
		);
	}
}
