import { CognitoUserPool } from 'amazon-cognito-identity-js';
const poolData = {
	UserPoolId: 'us-east-1_YZQsGwxT3',
	ClientId: '7dttm00ad95di9k0stjp97kql6',
};

export default new CognitoUserPool(poolData);
