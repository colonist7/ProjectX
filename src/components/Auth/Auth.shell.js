import React, { Component } from 'react';
import { Form, Container, Row } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import { AuthBase } from './Auth.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AuthShell extends Component {
	state = { name: '', password: '' };

	changeInputValue = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		let { name, password } = this.state;
		let { authUser, isAuthenticated } = this.props;

		return (
			<AuthBase>
				<Container>
					<Row>
						<Form lg={8}>
							<h3>Log In</h3>
							<TextField
								label={'Username'}
								name='name'
								type='text'
								value={name}
								onChange={this.changeInputValue}
								style={{ marginTop: '20px' }}
							/>

							<TextField
								style={{ marginTop: '20px' }}
								label={'Password'}
								name='password'
								type='password'
								value={password}
								onChange={this.changeInputValue}
							/>
							<Button
								variant='contained'
								color='primary'
								className='mt-3'
								onClick={() => {
									authUser(name, password);
								}}>
								Submit
							</Button>
							<Row>
								<h6 className='register-link'>
									Don't have an account? <Link to='/register'>Register Now</Link>
								</h6>
							</Row>
						</Form>
					</Row>
					{isAuthenticated && <Redirect to={'/user'} />}
				</Container>
			</AuthBase>
		);
	}
}

export default AuthShell;
