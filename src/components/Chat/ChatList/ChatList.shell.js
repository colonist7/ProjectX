import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { ChatListBase, ChatMember } from './ChatList.style';
class ChatListShell extends Component {
	componentDidMount = () => {
		this.props.getUsers();
		setTimeout(() => {
			this.props.setUserInfo(this.props.users[0]);
		}, 500);
	};

	componentDidUpdate = () => {};

	render() {
		const { users, setUserInfo } = this.props;

		return (
			<ChatListBase>
				{users &&
					users.map((item, index) => {
						return (
							item &&
							item.id !== sessionStorage.getItem('_id') && (
								<ChatMember
									key={index}
									onClick={(e) => {
										setUserInfo(item);
									}}>
									<div className='image-block'>
										<Image src={require('../../../assets/images/profile.png')} />
									</div>
									<div>
										<h6>{item.userName}</h6>
										<p>5 hours ago</p>
									</div>
								</ChatMember>
							)
						);
					})}
			</ChatListBase>
		);
	}
}

export default ChatListShell;
