import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Messages from '../Messages/Messages';
import ChatList from '../ChatList/ChatList';

class ChatShell extends Component {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<Row style={{ margin: '-25px 0 0' }}>
				<Col md={4}>
					<ChatList />
				</Col>
				<Col md={8} style={{ padding: 0 }}>
					<Messages />
				</Col>
			</Row>
		);
	}
}

export default ChatShell;
