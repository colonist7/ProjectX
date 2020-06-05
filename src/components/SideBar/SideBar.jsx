import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from './SideBar.style';
import { Container, Row } from 'react-bootstrap';
import Notification from '../Notification/Notification';
import { clearUser } from '../../redux/reducers/User/UserReducer';
import { logout } from '../../redux/reducers/Auth/AuthReducer';
import store from '../../redux/store';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { unseens } from '../../redux/reducers/Chat/chat.reducer';
import { socketStart, chatStart, notify, notifications, chat, connection } from '../../redux/Socket';
class SideBar extends Component {
	state = {};
	componentDidMount() {
		if (this.props.isAuth) {
			//SOCKETS
			socketStart();
			chatStart().then(() => {
				store.dispatch(unseens());
			});
			notify();

			//BROWSER NOTIFICATIONS
			if (!window.Notification) {
				console.log('change browser');
			} else {
				if (Notification.permission === 'granted') {
					console.log('granted');
				} else {
					window.Notification.requestPermission();
				}
			}
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.isAuth && this.props.isAuth != prevProps.isAuth) {
			//SOCKETS
			socketStart();
			chatStart().then(() => {
				store.dispatch(unseens());
			});
			notify();

			//BROWSER NOTIFICATIONS
			if (!window.notifications) {
				console.log('change browser');
			} else {
				console.log('hou');
			}
		} else if (!this.props.isAuth && this.props.isAuth != prevProps.isAuth) {
			notifications.stop();
			chat.stop();
			connection.stop();
		}
	}

	sendUnseens = () => {
		chat.invoke('ReadMessages').then(() => {
			store.dispatch(unseens());
		});
	};

	logout = () => {
		store.dispatch(logout());
		store.dispatch(clearUser());
	};

	render() {
		let { isAuth, unseen } = this.props;
		let links = [
			{ label: 'Home', path: '/', isVisible: true },
			{ label: 'News', path: '/newsfeed', isVisible: isAuth },
			{ label: 'Profile', path: '/user', isVisible: isAuth },
			{ label: 'Login', path: '/login', isVisible: !isAuth },
		];
		return (
			<Navbar>
				<Container>
					<Row>
						<ul>
							{links.map(
								(link, index) =>
									link.isVisible && (
										<li key={'l' + index}>
											<Link to={link.path}>{link.label}</Link>
										</li>
									)
							)}
						</ul>
						{isAuth && (
							<Link
								className='chat'
								to='/chat'
								title='Chat'
								onClick={(e) => {
									this.sendUnseens();
								}}>
								<FontAwesomeIcon icon={faComments} />
								<span className='amount'>{unseen}</span>
							</Link>
						)}
						{isAuth && <Notification />}
						{isAuth && (
							<Button
								color='primary'
								className='logout'
								onClick={(e) => {
									this.logout();
								}}>
								LOG OUT
							</Button>
						)}
					</Row>
				</Container>
			</Navbar>
		);
	}
}

let mapStateToProps = (state) => {
	return { isAuth: state.authReducer.isAuthenticated, unseen: state.chatReducer.unseen };
};

export default connect(mapStateToProps, null)(SideBar);
