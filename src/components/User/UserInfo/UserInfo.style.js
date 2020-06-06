import styled from 'styled-components';

export const UserInfoBlock = styled.div`
	width: 100%;
	height: auto;
	position: relative;

	.image-block {
		width: 100%;
		margin: 0 0 10px 0;
		height: 300px;
		border: 2px solid #3355ff;
		border-radius: 30px;
		overflow: hidden;
		position: relative;

		&:before {
			content: '+ \n Upload Photo';
			position: absolute;
			width: 100%;
			height: 100%;
			left: 0;
			top: 0;
			background: rgba(0, 0, 0, 0.6);
			color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-size: 40px;
			opacity: 0;
			transition: all 0.2s ease-in-out;
			font-weight: bold;
		}

		&:hover::before {
			opacity: 1;
		}

		.button-group {
			position: absolute;
			bottom: 0;
			width: 100%;
			display: flex;
			justify-content: center;
			padding: 20px;
			background: rgba(255, 255, 255, 0.8);
			z-index: 10;
			transform: translateY(100%);
			opacity: 0;
			transition: all 0.5s ease-in-out;

			button {
				margin: 5px;
			}
		}

		.button-group.visible {
			transform: translateY(0);
			opacity: 1;
		}

		input[type='file'] {
			position: absolute;
			z-index: -1;
			opacity: 0;
		}

		img {
			width: 100%;
			display: block;
			height: auto;
		}
	}

	.title {
		margin: auto;
		text-align: center;
	}

	.email {
		display: block;
		text-align: center;
	}
`;
