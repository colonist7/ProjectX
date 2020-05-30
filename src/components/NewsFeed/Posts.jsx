import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { CommentBar } from './NewsFeed.style';
import { Spinner, Alert } from 'react-bootstrap';
import moment from 'moment';
import Post from './Post';

class Posts extends Component {
	state = {};

	render() {
		let { posts, postsLoading, postsError, getPostComments, createPostComment } = this.props;
		if (postsLoading)
			return (
				<Spinner animation='border' role='status'>
					<span className='sr-only'></span>
				</Spinner>
			);
		if (postsError) return <Alert variant='danger'>some error occured</Alert>;
		return (
			<Container>
				{posts.map((post, index) => (
					<Post
						key={post.id}
						userName={post.userName}
						date={post.postDate}
						text={post.tweetText}
						comments={post.comments}
						id={post.id}
						liked={post.liked}
						likes={post.likes}
						createPostComment={createPostComment}
						getPostComments={getPostComments}
					/>
				))}
			</Container>
		);
	}
}

export default Posts;
