import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const AuthBase = styled.div`
	h3 {
		color: #4477ff;
	}

	form {
		animation: 1s ${fadeInAnimation};
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
		width: 320px;
		padding: 30px;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	}

	.register-link {
		margin-top: 20px;
	}
`;
