import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NotificationBase } from './Notification.style';

const testNotifications = {
	unread: 3,
	notifications: [
		{ type: 'message', name: 'manu', postDate: '19/07/03' },
		{ type: 'like', name: 'temo', postDate: '20/08/21' },
		{ type: 'follow', name: 'nino', postDate: '30/12/21' },
	],
};
class NotificationShell extends Component {
	state = { visible: false, stillVisible: false };

	componentDidMount() {
		this.props.getNotifications();
	}

	showNotification = () => {
		this.setState({ visible: true, stillVisible: true });
	};

	hideNotification = () => {
		this.setState({ stillVisible: false });
		setTimeout(() => {
			if (!this.state.stillVisible) {
				this.setState({ visible: false });
			}
		}, 3000);
	};

	render() {
		return (
			<NotificationBase
				visible={this.state.visible}
				onClick={(e) => {
					this.showNotification();
				}}
				onMouseLeave={(e) => {
					this.hideNotification();
				}}>
				<div title='Notifications'>
					<FontAwesomeIcon icon={faBell} className={this.state.visible ? 'active' : ' '} />
					<span className='counter'>{testNotifications.unread}</span>
				</div>
				<div
					className='notifications'
					onMouseEnter={(e) => {
						this.showNotification();
					}}>
					{testNotifications &&
						testNotifications.notifications.map((x, i) => {
							return (
								<div key={i}>
									<p>
										<b>{x.name}</b> has
										{
											{
												['like']: <span> liked your post</span>,
												['follow']: <span> followed you</span>,
												['message']: <span> texted you</span>,
											}[x.type]
										}
									</p>
								</div>
							);
						})}
				</div>
			</NotificationBase>
		);
	}
}

export default NotificationShell;
