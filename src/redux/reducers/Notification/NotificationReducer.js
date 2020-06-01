import { getNotifications as gnotifications } from '../../../api/notifications.api';

const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';

const initialState = {
	notifications: [],
};

export const notificationReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NOTIFICATIONS:
			return { ...state, notifications: [...action.payload] };
		default:
			return state;
	}
};

export const getNotifications = () => (dispatch) => {
	gnotifications().then((res) => {
		if (res.data.success) {
			console.log(res);
			dispatch({ type: GET_NOTIFICATIONS, payload: res.data.data.notifications });
		}
	});
};
