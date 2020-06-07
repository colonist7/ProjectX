import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Spinner, Alert } from 'react-bootstrap';
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
				<Row>
					<Col sm={3} />
					<Col sm={6}>
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
					</Col>
					<Col sm={3} />
				</Row>
			</Container>
		);
	}
}

export default Posts;
