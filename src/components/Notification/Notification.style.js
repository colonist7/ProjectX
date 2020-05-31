import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const NotificationBase = styled.div`
	padding: 10px;
	margin-top: 5px;
	margin-left: 10px;
	position: relative;
	margin-right: 60px;
	cursor: pointer;
	z-index: 10;

	svg {
		font-size: 25px;

		path {
			fill: #afafaf;
		}

		&:hover {
			path {
				fill: #4477ff;
			}
		}
	}

	.active {
		path {
			fill: #4477ff;
		}
	}

	.notifications {
		animation: 1s ${fadeInAnimation};
		display: ${(props) => (props.visible ? 'block' : 'none')};
		position: absolute;
		padding: 10px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
		left: 50%;
		transform: translateX(-50%);
		top: 120%;
		width: 200px;
		background: #fff;

		b {
			color: #007bff;
		}
	}

	.counter {
		background: red;
		color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 12px;
		height: 13px;
		top: 20px;
		pointer-events: none;
		right: 5px;
		font-size: 10px;
		border-radius: 50%;
	}
`;
