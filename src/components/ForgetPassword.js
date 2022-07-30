import React, { useState } from 'react';
import Pool from '../UserPool';
import { CognitoUser } from 'amazon-cognito-identity-js';

export default () => {
	const [email, setEmail] = useState('');
	const [stage, setStage] = useState(1);
	const [code, setCode] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const getUser = () => {
		return new CognitoUser({
			Username: email.toLowerCase(),
			Pool,
		});
	};

	const sendVerificationCode = event => {
		event.preventDefault();
		getUser().forgotPassword({
			onSuccess: data => {
				console.log('Success : ', data);
			},

			onFailure: err => {
				console.log('Error: ', err);
			},

			inputVerificationCode: data => {
				console.log('Verification code : ', data);
				setStage(2);
			},
		});
	};

	const resetPassword = event => {
		event.preventDefault();
		if (password !== confirmPassword) {
			console.error('Passwords are not the same');
			return;
		}

		getUser().confirmPassword(code, password, {
			onSuccess: data => {
				console.log('OnSuccess: ', data);
			},
			onFailure: err => {
				console.error('onFailure: ', err);
			},
		});
	};

	return (
		<div>
			{stage === 1 && (
				<form onSubmit={sendVerificationCode}>
					<input
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<button type='submit'>Send Verification Code</button>
				</form>
			)}

			{stage === 2 && (
				<form onSubmit={resetPassword}>
					<input value={code} onChange={event => setCode(event.target.value)} />
					<input
						value={password}
						onChange={event => setPassword(event.target.value)}
					/>
					<input
						value={confirmPassword}
						onChange={event => setConfirmPassword(event.target.value)}
					/>
					<button type='submit'>Reset Password</button>
				</form>
			)}
		</div>
	);
};
