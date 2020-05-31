import styled, { keyframes } from 'styled-components';
import { Button as Btn } from 'react-bootstrap';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const UserMainBase = styled.div`
	animation: 1s ${fadeInAnimation};
`;

export const Button = styled(Btn)`
	position: absolute;
	top: 25px;
	right: 25px;
`;
