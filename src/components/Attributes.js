import React, { useEffect, useState, useContext } from 'react';
import { AccountContext } from './Accounts';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';

export default () => {
	const [plan, setPlan] = useState('');
	const { getSession } = useContext(AccountContext);

	useEffect(() => {
		getSession().then(data => setPlan(data['custom:plan']));
	}, []);

	const onSubmit = event => {
		event.preventDefault();
		getSession().then(({ user }) => {
			const userAttributes = [
				new CognitoUserAttribute({
					Name: 'custom:plan',
					Value: plan,
				}),
			];
			user.updateAttributes(userAttributes, (err, result) => {
				if (err) {
					console.error(err);
				}
				console.log(result);
			});
		});
	};

	return (
		<div>
			<h1>Update your Plan</h1>
			<form onSubmit={onSubmit}>
				<input value={plan} onChange={event => setPlan(event.target.value)} />
				<button type='submit'>Change Plan</button>
			</form>
		</div>
	);
};
