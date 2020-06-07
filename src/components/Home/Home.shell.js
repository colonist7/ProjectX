import React from 'react';
import { Container } from 'react-bootstrap';
import { HomeBase } from './Home.style';
import logo from '../../assets/images/project1.jpg';
import { Image } from 'react-bootstrap';

export default function HomeShell() {
	return (
		<Container>
			<HomeBase>
				<h2>Web Technologies IV Final Project</h2>
				<Image src={logo} />

				<ul>
					<li>
						<b>Back-End:</b>
						<br /> Giorgi Manukian
					</li>
					<li>
						<b>Front-End:</b>
						<br /> Davit Sergeev, Temo Smoev
					</li>
					<li>
						<b>Mark-Up:</b>
						<br /> Davit Sergeev
					</li>
				</ul>
			</HomeBase>
		</Container>
	);
}
