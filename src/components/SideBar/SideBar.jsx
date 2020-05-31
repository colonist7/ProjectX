import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from './SideBar.style';
import { Container, Row } from 'react-bootstrap';
import Notification from '../Notification/Notification';

class SideBar extends Component {
	state = {};
	render() {
		let { isAuth } = this.props;
		let links = [
			{ label: 'Home', path: '/', isVisible: true },
			{ label: 'NewsFeed', path: '/newsfeed', isVisible: isAuth },
			{ label: 'User', path: '/user', isVisible: isAuth },
			{ label: 'Chat', path: '/chat', isVisible: isAuth },
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
						{isAuth && <Notification />}
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
