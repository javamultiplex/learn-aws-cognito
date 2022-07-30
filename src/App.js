import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import { Account } from './components/Accounts';
import Status from './components/Status';
import Settings from './components/Settings';
import Attributes from './components/Attributes';
import RandomNumber from './components/RandomNumber';

export default () => {
	return (
		<Account>
			<Status />
			<Signup />
			<Login />
			<ForgetPassword />
			<Settings />
			<Attributes />
			<RandomNumber />
		</Account>
	);
};
