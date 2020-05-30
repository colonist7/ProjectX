import React, { Component } from 'react';
import { CommentBar } from './NewsFeed.style';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import moment from 'moment';
import Button from '@material-ui/core/Button';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import store from '../../redux/store';
import { like } from '../../redux/reducers/Comments/CommentsReducer';
class Post extends Component {
	state = {
		showCommentInput: false,
		comment: '',
	};
	componentDidMount = () => {
		this.props.getPostComments(this.props.id);
	};
	toggleShowCommentInput = () => {
		this.setState({ showCommentInput: !this.state.showCommentInput });
	};
	onCommentChange = (e) => {
		this.setState({ comment: e.target.value });
	};
	render() {
		let { id, userName, date, text, createPostComment, comments, likes, liked } = this.props;
		return (
			<CommentBar>
				<h6 className='title'>
					{userName} <span>{moment.unix(date).startOf().fromNow()}</span>
				</h6>
				<div className='comment'>
					<h3>{text}</h3>
				</div>
				<ButtonGroup
					className='mb-3 mt-3'
					variant='text'
					color='primary'
					aria-label='text primary button group'>
					<Button
						className={liked ? 'action active' : 'action'}
						onClick={(e) => {
							console.log(id);
							store.dispatch(like(id));
						}}>
						<p style={{ margin: 0 }}>{likes} liked</p>
						<FontAwesomeIcon className='like' icon={faThumbsUp} />
						Like
					</Button>
					<Button className='action' onClick={this.toggleShowCommentInput}>
						Comment
					</Button>
				</ButtonGroup>
				{this.state.showCommentInput && (
					<Row>
						<Col>
							<input
								value={this.state.comment}
								onChange={this.onCommentChange}
								type='text'
								className='form-control'
								placeholder='Comment'
							/>
						</Col>
						<Col>
							<Button
								disabled={!this.state.comment.length}
								onClick={() => createPostComment(id, this.state.comment)}
								variant='success'>
								Post
							</Button>
						</Col>
						<Col xs={12}>
							{comments &&
								comments.map((comment) => (
									<div key={comment.id} className='comm'>
										<div className='flex'>
											<h6>{comment.userName}</h6>
											<p>{moment.unix(comment.postDate).startOf().fromNow()}</p>
										</div>
										<div className='row'>
											<div className='col'>{comment.text}</div>
										</div>
									</div>
								))}
						</Col>
					</Row>
				)}
			</CommentBar>
		);
	}
}

export default Post;
