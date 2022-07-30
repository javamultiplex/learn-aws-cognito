import React, { useState, useContext } from 'react';
import { AccountContext } from './Accounts';

export default () => {
	const [random, setRandom] = useState(0);
	const { getSession } = useContext(AccountContext);

	const randomNumberGenerator = () => {
		getSession().then(async ({ headers }) => {
			console.log(headers);
			const url =
				'https://covaw6sezk.execute-api.us-east-1.amazonaws.com/dev/random?min=1&max=100';
			const response = await fetch(url, {
				method: 'GET',
				headers,
			});

			response
				.json()
				.then(data => setRandom(data))
				.then(err => console.error(err));
		});
	};

	return (
		<div>
			<div>Random Number: {random}</div>
			<button onClick={randomNumberGenerator}>Generate Random Number</button>
		</div>
	);
};
