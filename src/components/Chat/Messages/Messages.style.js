import styled from 'styled-components';

export const MessagesBase = styled.div`
	border-left: 2px solid #efefef;
	height: 100%;
`;

export const MessagesTop = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	padding: 30px;
	align-items: center;
	background: #fff;
	transition: all 0.2s ease-in-out;
	cursor: pointer;
	border-bottom: 2px solid #efefef;
	border-left: none;
	border-right: 2px solid #efefef;

	.image-block {
		width: 40px;
		overflow: hidden;
		border-radius: 50%;
		margin-right: 10px;
		position: relative;

		img {
			width: 100%;
			height: auto;
			display: block;
		}
	}

	h6,
	p {
		transition: all 0.2s ease-in-out;
		margin: 5px;
	}
`;
export const MessagesBody = styled.div`
	height: 450px;
	overflow: auto;
	display: flex;
	flex-direction: column;
	border-right: 2px solid #efefef;
`;
export const Message = styled.div`
	align-self: ${(props) => (props.currentUser ? 'flex-end' : 'flex-start')};
	max-width: 45%;
	background: ${(props) => (props.currentUser ? '#007bff' : '#efefef')};
	color: ${(props) => (props.currentUser ? '#fff' : '#000')};
	border-radius: ${(props) => (props.currentUser ? '30px  0 0 30px' : '0 30px 30px 0')};
	padding: 10px 20px;
	margin: 5px 0;
`;
export const MessagesBottom = styled.div`
	padding-top: 20px;
	border-right: 2px solid #efefef;
`;
export const ChatPreloader = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;

	.rotate {
		animation: rotate 3s infinite linear;
		font-size: 40px;
		color: #007bff;
	}

	h2 {
		color: #afafaf;
		user-select: none;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0turn);
		}

		100% {
			transform: rotate(1turn);
		}
	}
`;
