import React, { Component } from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Image } from 'react-bootstrap';
import { UsersBlock } from './Following.style';

class FollowingShell extends Component {
	// componentDidMount = () => {
	//   this.props.getFollowing();
	// };

	componentDidUpdate = () => {
		// debugger;
		// this.props.getFollowing();
	};

	render() {
		const { userFollowing, follow } = this.props;

		return (
			userFollowing &&
			userFollowing.length > 0 && (
				<UsersBlock>
					<h5 className='title' style={{ display: 'flex' }}>
						People you follow{' '}
						<b style={{ marginLeft: 'auto', display: 'inline-block' }}>{userFollowing.length}</b>
					</h5>
					<CarouselProvider
						className='users-slider'
						visibleSlides={3}
						naturalSlideWidth={60}
						naturalSlideHeight={60}
						totalSlides={userFollowing.length}
						dragEnabled={false}
						infinite={false}
						step={1}>
						<ButtonBack className='carousel__back-button'>
							<FontAwesomeIcon icon={faChevronLeft} />
						</ButtonBack>
						<Slider className='slider'>
							{userFollowing.map((item, index) => {
								return (
									<Slide index={index} key={'slide' + index} className='slider-item'>
										<Image
											onClick={(e) => {
												follow(item.userId ? item.userId : '', item.userName);
											}}
											src={require('../../../assets/images/profile.png')}
											alt={item.userName}
											title={item.userName}></Image>
									</Slide>
								);
							})}
						</Slider>
						<ButtonNext className='carousel__next-button'>
							<FontAwesomeIcon icon={faChevronRight} />
						</ButtonNext>
					</CarouselProvider>
				</UsersBlock>
			)
		);
	}
}

export default FollowingShell;
