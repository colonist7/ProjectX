import React, { Component, createRef } from 'react';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Image } from 'react-bootstrap';
import { MessagesTop, MessagesBody, MessagesBottom, MessagesBase, Message, ChatPreloader } from './Messages.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { chat } from '../../../redux/Socket';

const initialState = { message: '' };
class MessagesShell extends Component {
	state = {
		message: '',
		userInfoId: this.props.userInfo.id,
	};

	chat = createRef();
	input = createRef();

	componentDidMount = () => {
		setTimeout(() => {
			if (this.props.userInfo) {
				this.props.getMessages(this.props.currentUser, this.props.userInfo.id);
			}
		}, 1000);
	};

	componentDidUpdate = () => {
		this.chat.current.scrollTop = this.chat.current.scrollHeight;

		if (this.state.userInfoId !== this.props.userInfo.id) {
			this.props.getMessages(this.props.currentUser, this.props.userInfo.id);
			this.setState({ userInfoId: this.props.userInfo.id });
		}
	};

	sendMessage = (e, currentUser, userId) => {
		e.preventDefault();
		let { message } = this.state;
		if (message.length > 0) {
			chat.invoke('SendMessage', message, currentUser, userId)
				.then((res) => {
					this.props.getMessages(this.props.currentUser, this.props.userInfo.id);
					this.resetMessage();
				})
				.catch((err) => console.error(err));
		}
	};

	handleChange = (txt) => {
		this.setState({ message: txt });
	};

	resetMessage = () => {
		this.setState({ ...initialState });
	};

	keyPress = (e) => {
		if (e.key == 'Enter') {
			this.sendMessage(e, this.props.currentUser, this.props.userInfo.id);
		}
	};

	render() {
		const { userInfo, messages, currentUser, setChatLoading } = this.props;

		return (
			<MessagesBase>
				<MessagesTop>
					<div className='image-block'>
						<Image src={require('../../../assets/images/profile.png')} />
					</div>
					<div>
						<h6>{userInfo && userInfo.userName}</h6>
						<p>5 hours ago</p>
					</div>
				</MessagesTop>
				<MessagesBody ref={this.chat}>
					{setChatLoading ? (
						<ChatPreloader>
							<FontAwesomeIcon className='rotate' icon={faSpinner} />
						</ChatPreloader>
					) : messages && messages.length > 0 ? (
						messages.map((mes, index) => {
							return (
								mes.text && (
									<Message
										currentUser={mes.fromUser.id === currentUser}
										key={index}
										title={mes.sendDate}>
										{mes.text}
									</Message>
								)
							);
						})
					) : (
						<ChatPreloader>
							<h2>No messages found</h2>
						</ChatPreloader>
					)}
				</MessagesBody>
				<MessagesBottom>
					<div style={{ display: 'flex' }}>
						<TextField
							name='post'
							value={this.state.message}
							autoComplete={'off'}
							style={{ width: '100%' }}
							id='outlined-basic'
							label='Write your message here'
							variant='outlined'
							onChange={(e) => {
								this.handleChange(e.target.value);
							}}
							onKeyPress={(e) => {
								this.keyPress(e);
							}}
						/>
						<Button
							type='submit'
							onClick={(e) => {
								this.sendMessage(e, currentUser, userInfo.id);
							}}>
							Send
						</Button>
					</div>
				</MessagesBottom>
			</MessagesBase>
		);
	}
}

export default MessagesShell;
