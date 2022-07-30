import React, { useState, useContext } from 'react';
import { AccountContext } from './Accounts';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool';
export default () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { authenticate } = useContext(AccountContext);

	const onSubmit = event => {
		event.preventDefault();
		authenticate(email, password)
			.then(data => console.log('Logged In!', data))
			.catch(err => console.log('Failed to logged in', err));
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input value={email} onChange={event => setEmail(event.target.value)} />
				<input
					value={password}
					onChange={event => setPassword(event.target.value)}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};
