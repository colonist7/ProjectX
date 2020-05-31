import { getNotifications as gnotifications } from '../../../api/notifications.api';

const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';

const initialState = {
	notifications: {},
};

export const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export const getNotifications = () => (dispatch) => {
	gnotifications().then((res) => {
		if (res.data.success) {
			dispatch({ type: GET_NOTIFICATIONS, payload: res.data.data });
		}
	});
};
