import React, { Component } from 'react';
import WritePost from './WritePost';
import Posts from './Posts';
import { Container, Col, Row } from 'react-bootstrap';

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
				<Container>
					<Row>
						<Col sm={3} />
						<Col sm={6}>
							<WritePost
								createPost={createPost}
								createPostLoading={createPostLoading}
								createPostError={createPostError}
							/>
						</Col>
						<Col sm={3} />
					</Row>
				</Container>
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
