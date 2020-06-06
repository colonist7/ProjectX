import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { NotificationBase } from './Notification.style';
import moment from 'moment';
import { notifications } from '../../redux/Socket';

class NotificationShell extends Component {
	state = { visible: false, stillVisible: false };

	componentDidMount() {
		this.props.getNotifications();
	}

	showNotification = () => {
		this.setState({ visible: true, stillVisible: true });

		notifications
			.invoke('ReadNotifications')
			.then((res) => {
				this.props.getNotifications();
			})
			.catch((e) => {
				console.log(e);
			});
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
		const { notifications } = this.props;
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
					<span className='counter'>{notifications.filter((x) => !x.isSeen).length}</span>
				</div>
				<div
					className='notifications'
					onMouseEnter={(e) => {
						this.showNotification();
					}}>
					{notifications &&
						notifications
							.sort((a, b) => (a.sendDate > b.sendDate ? -1 : 1))
							.map((x, i) => {
								return (
									x.fromUser.id !== sessionStorage.getItem('_id') &&
									x.notificationType !== 'Message' && (
										<div key={i}>
											<p>
												<b>{x.fromUser.userName}</b> has
												{
													{
														['like']: <span> liked your post </span>,
														['follower']: <span> followed you </span>,
														['comment']: <span> commented your post </span>,
													}[x.notificationType.toLowerCase()]
												}
												{moment.unix(x.sendDate).startOf().fromNow()}
											</p>
										</div>
									)
								);
							})}
				</div>
			</NotificationBase>
		);
	}
}

export default NotificationShell;
