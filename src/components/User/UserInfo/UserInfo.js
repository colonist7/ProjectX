import React from 'react';
import UserInfoShell from './UserInfo.shell';
import { connect } from 'react-redux';
import { saveImage as save } from '../../../redux/reducers/User/UserReducer';

const UserInfo = (props) => {
	const { userName, email, profileImage, savePicture } = props;

	return <UserInfoShell userName={userName} email={email} profileImage={profileImage} savePicture={savePicture} />;
};

const mapStateToProps = (state) => {
	let { userName, email, profileImage } = state.userReducer;

	return { userName, email, profileImage };
};

const mapDispatchToProps = (dispatch) => {
	return {
		savePicture: (file) => {
			console.log(file);
			dispatch(save(file));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
