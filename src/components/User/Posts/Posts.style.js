import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const fadeInAnimation = keyframes`${fadeIn}`;

export const CommentBar = styled.div`
	animation: 1s ${fadeInAnimation};
	border-bottom: 1px solid #efefef;
	width: 100%;
	padding: 20px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	border-radius: 30px;
	margin: 30px 0;

	.action {
		color: #afafaf;
		display: flex;
		align-items: center;

		&:hover {
			color: #4477ff;

			path {
				color: #4477ff;
			}
		}

		.like {
			margin: 10px;
		}
	}

	.action.active {
		color: #4477ff;
	}

	.title {
		color: #4477ff;
		display: flex;
		align-items: center;
		justify-content: space-between;

		span {
			font-size: 14px;
			color: #9a9a9a;
		}
	}

	.comment {
		padding: 40px 0;
		border-bottom: 1px solid #efefef;
		border-top: 2px solid #dedede;
		margin-bottom: 20px;
	}
`;
