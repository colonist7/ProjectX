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
class SideBar extends Component {
	state = {};

	logout = () => {
		store.dispatch(logout());
		store.dispatch(clearUser());
	};

	render() {
		let { isAuth } = this.props;
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
							<Link className='chat' to='/chat' title='Chat'>
								<FontAwesomeIcon icon={faComments} />
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
	return { isAuth: state.authReducer.isAuthenticated };
};

export default connect(mapStateToProps, null)(SideBar);
