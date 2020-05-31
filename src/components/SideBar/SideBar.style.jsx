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

	.chat {
		padding: 7px;
		color: #afafaf;
		margin-left: auto;
		font-size: 25px;

		&:hover {
			path {
				fill: #4477ff;
			}
		}
	}
`;
