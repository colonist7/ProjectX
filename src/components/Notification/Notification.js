import React from 'react';
import { connect } from 'react-redux';
import NotificationShell from './Notification.shell';
import { getNotifications as gnotifications } from '../../redux/reducers/Notification/NotificationReducer';

const Notification = (props) => {
	const { notifications, getNotifications } = props;
	return <NotificationShell notifications={notifications} getNotifications={getNotifications} />;
};

const mapStateToProps = (state) => {
	let { notifications } = state.notificationReducer;

	return { notifications };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getNotifications: () => {
			dispatch(gnotifications());
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
