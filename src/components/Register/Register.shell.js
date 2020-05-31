import React, { Component } from 'react';
import { Form, Container, Row } from 'react-bootstrap';
import { RegisterBase } from './Register.style';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const InitialState = { userName: '', userPassword: '', confirmPassword: '', userMail: '', arePasswordsEqual: false };
class RegisterShell extends Component {
	state = { userName: '', userPassword: '', confirmPassword: '', userMail: '', arePasswordsEqual: false };

	checkPassword = (a, b) => {
		this.setState({ arePasswordsEqual: a === b });
	};

	reset = () => {
		this.props.setResetFalse();
		this.setState(InitialState);
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
		if (e.target.name === 'userPassword') {
			this.checkPassword(e.target.value, this.state.confirmPassword);
		} else if (e.target.name === 'confirmPassword') {
			this.checkPassword(this.state.userPassword, e.target.value);
		}
	};

	render() {
		const { userName, userMail, userPassword, confirmPassword, arePasswordsEqual } = this.state;
		const { register, resetForm } = this.props;

		if (resetForm === true) {
			this.reset();
		}

		return (
			<RegisterBase>
				<Container>
					<Row>
						<Form lg={8}>
							<h3>Registration</h3>
							<TextField
								style={{ marginTop: '20px' }}
								label='E-Mail'
								name='userMail'
								type='email'
								value={userMail}
								onChange={(e) => {
									this.handleChange(e);
								}}
							/>

							<TextField
								style={{ marginTop: '20px' }}
								label='Username'
								name='userName'
								type='text'
								value={userName}
								onChange={(e) => {
									this.handleChange(e);
								}}
							/>

							<TextField
								style={{ marginTop: '20px' }}
								label='Password'
								name='userPassword'
								type='password'
								value={userPassword}
								onChange={(e) => {
									this.handleChange(e);
								}}
							/>

							<TextField
								style={{ marginTop: '20px' }}
								label='Confirm Password'
								name='confirmPassword'
								type='password'
								value={confirmPassword}
								onChange={(e) => {
									this.handleChange(e);
								}}
							/>
							{confirmPassword.length > 0 && <p>{arePasswordsEqual ? '' : "Passwords don't match"}</p>}

							<Button
								variant='contained'
								color='primary'
								className='mt-3'
								onClick={(e) => {
									register(userName, userMail, userPassword, confirmPassword);
								}}>
								Submit
							</Button>
						</Form>
					</Row>
				</Container>
			</RegisterBase>
		);
	}
}

export default RegisterShell;
