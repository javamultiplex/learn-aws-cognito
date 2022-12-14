import React, { useContext, useState, useEffect } from 'react';
import { AccountContext } from './Accounts';
import ChangeEmail from './ChangeEmail';
import ChangePassword from './ChangePassword';

export default () => {
	const [loggedIn, setLoggedIn] = useState(false);
	const { getSession } = useContext(AccountContext);

	useEffect(() => {
		getSession().then(() => setLoggedIn(true));
	}, []);

	return (
		<div>
			{loggedIn && (
				<>
					<h1>Settings</h1>
					<ChangePassword />
					<ChangeEmail />
				</>
			)}
		</div>
	);
};
