import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { CommentBar } from './Posts.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Comments from '../../Comments/Comments';
import moment from 'moment';

class PostsShell extends Component {
	state = {
		formData: {
			post: '',
			commentVisible: false,
		},
	};

	componentDidMount = () => {
		this.props.getTweets();
	};

	componentWillUnmount = () => {};

	componentDidUpdate = () => {
		// debugger;
		// this.props.getPosts();
	};

	onHandleChange = (e) => {
		let { formData } = { ...this.state };
		formData.post = e.target.value;
		this.setState({ formData: formData });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.formData.post.length === 0) {
			return;
		} else {
			this.props.tweet(this.state.formData.post);
			this.setState({ formData: { post: '' } });
		}
	};

	formatData = (date) => {
		let formated = new Date(date);
		let str = formated.getDate() + '/' + (formated.getMonth() + 1) + '/' + formated.getFullYear();
		return str;
	};

	render() {
		const { tweets, userName, like } = this.props;

		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<div style={{ display: 'flex' }}>
						<TextField
							value={this.state.formData.post}
							onChange={this.onHandleChange}
							name='post'
							style={{ width: '100%' }}
							id='outlined-basic'
							label='Write your post here'
							variant='outlined'
						/>
						<Button type='submit'>Send</Button>
					</div>
				</form>
				<div>
					<div className=''>
						{tweets &&
							tweets.map((x, index) => {
								return <Post x={x} index={index} userName={userName} key={index} like={like} />;
							})}
					</div>
				</div>
			</>
		);
	}
}

export default PostsShell;

class Post extends Component {
	state = { commentVisible: false };

	toggleComment = () => {
		this.setState({ commentVisible: !this.state.commentVisible });
	};

	render() {
		const { x, index, userName, like } = this.props;
		return (
			<CommentBar key={index}>
				<h6 className='title'>
					{userName} <span>{moment.unix(x.postDate).startOf().fromNow()}</span>
				</h6>
				<div className='comment'>
					<h3>{x.tweetText}</h3>
				</div>
				<ButtonGroup variant='text' color='primary' aria-label='text primary button group'>
					<Button
						className={x.liked ? 'action active' : 'action'}
						onClick={(e) => {
							like(x.id);
						}}>
						<p style={{ margin: 0 }}>{x.likes} liked</p>
						<FontAwesomeIcon className='like' icon={faThumbsUp} />
						Like
					</Button>
					<Button
						className='action'
						onClick={(e) => {
							this.toggleComment();
						}}>
						Comment
					</Button>
				</ButtonGroup>
				<div>
					<Comments commentVisible={this.state.commentVisible} tweetId={x.id} />
				</div>
			</CommentBar>
		);
	}
}
