import styled, { keyframes } from 'styled-components';
import { flipInX } from 'react-animations';

const slideDown = keyframes`${flipInX}`;

export const CommentBar = styled.div`
	.comm {
		animation: 1s ${slideDown};

		.flex {
			margin-bottom: 20px;
			display: flex;
			align-items: stretch;
			position: relative;

			button {
				height: 100%;
				margin-top: 6px;
			}
		}

		h6 {
			color: #4477ff;
		}
	}

	border-bottom: 1px solid #efefef;
	width: 100%;
	padding: 20px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	margin: 10px 0 20px;
	border-radius: 30px;

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
		border-top: 1px solid #efefef;
		margin-bottom: 20px;
	}

	.comm {
		padding: 15px;
	}

	.flex {
		display: flex;
		justify-content: space-between;
		align-items: center;

		p {
			margin: 0;
			color: #afafaf;
			font-size: 12px;
		}
	}

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
`;
