import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const HomeBase = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 120px);
	justify-content: center;
	text-align: center;

	ul {
		animation: 3s ${fadeInAnimation};
		padding: 0;
		margin-top: 50px;
		list-style: none;
		li {
			margin-bottom: 10px;
		}
	}

	h2 {
		animation: 1s ${fadeInAnimation};
		color: #4477ff;
		margin-bottom: 60px;
	}

	b {
		text-transform: uppercase;
		color: #4477ff;
	}

	img {
		animation: 2s ${fadeInAnimation};
	}
`;
