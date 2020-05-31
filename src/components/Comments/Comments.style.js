import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';

const slideDown = keyframes`${flipInX}`;

export const Comm = styled.div`
	animation: 1s ${slideDown};
`;
