import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { UserInfoBlock } from './UserInfo.style';
import Button from '@material-ui/core/Button';

const initialState = {
	imgUrl: '',
	imageConfirmShow: false,
	img: {},
};
class UserInfoShell extends Component {
	constructor(props) {
		super(props);
		this.file = React.createRef();
	}

	state = {
		imgUrl: '',
		imageConfirmShow: false,
		img: {},
	};

	componentDidMount() {
		if (this.props.profileImage.length > 0) {
			this.setState({ imgUrl: this.props.profileImage });
		}
	}

	previewImage(url) {
		if (
			url &&
			(url.type.toLowerCase().includes('jpg') ||
				url.type.toLowerCase().includes('jpeg') ||
				url.type.toLowerCase().includes('png'))
		) {
			this.setState({ imgUrl: URL.createObjectURL(url), imageConfirmShow: true, img: url });
		} else {
			alert('incorrect format');
		}
	}

	saveImage() {
		console.log(this.state);
		this.props.savePicture(this.state.img);
		this.setState({ ...initialState });
		this.file.current.value = null;
	}

	cancelImage() {
		this.setState({ ...initialState });
		this.file.current.value = null;
	}

	render() {
		const { userName, email } = this.props;

		return (
			<UserInfoBlock>
				<label className='image-block'>
					<input
						type='file'
						ref={this.file}
						onChange={(e) => {
							this.previewImage(e.target.files[0]);
						}}
					/>
					<Image
						src={
							this.state.imgUrl.length > 0
								? this.state.imgUrl
								: require('../../../assets/images/placeholder.png')
						}
						alt='user profile'
					/>
					<div className={this.state.imageConfirmShow ? 'button-group visible' : 'button-group'}>
						<Button
							variant='contained'
							color='primary'
							onClick={(e) => {
								this.saveImage();
							}}>
							Save
						</Button>
						<Button
							variant='contained'
							color='secondary'
							onClick={(e) => {
								this.cancelImage();
							}}>
							Cancel
						</Button>
					</div>
				</label>
				<h3 className='title'>{userName ? userName : 'John Doe'}</h3>
				<a className='email' href={'mailto:' + (email ? email : 'johnDoe@gmail.com')}>
					{email ? email : 'johnDoe@gmail.com'}
				</a>
			</UserInfoBlock>
		);
	}
}

export default UserInfoShell;
