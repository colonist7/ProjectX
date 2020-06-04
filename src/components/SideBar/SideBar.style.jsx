import styled from 'styled-components';

export const Navbar = styled.nav`
	box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	padding: 20px;
	margin-bottom: 30px;

	ul {
		display: flex;
		list-style: none;
		font-size: 19px;
		margin: 0;
		padding: 0;

		li {
			padding: 10px;

			a {
				text-decoration: none;
			}
		}
	}

	.amount {
		width: 10px;
		height: 10px;
		color: #fff;
		background: red;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 12px;
		height: 13px;
		top: 25.5px;
		pointer-events: none;
		right: 5px;
		font-size: 10px;
		border-radius: 50%;
	}

	.chat {
		padding: 7px;
		color: #afafaf;
		margin-left: auto;
		position: relative;
		font-size: 25px;

		&:hover {
			path {
				fill: #4477ff;
			}
		}
	}
`;
