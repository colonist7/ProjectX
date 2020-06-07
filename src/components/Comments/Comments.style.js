import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const slideDown = keyframes`${fadeIn}`;

export const Comm = styled.div`
	animation: 1s ${slideDown};
`;
