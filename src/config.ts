import dotenv from 'dotenv';

dotenv.config();

export const config = {
	server: {
		port: process.env.PORT || 8000,
	},
	application: {
		uri: 'https://shopify-app-fe.vercel.app',
	},
	database: {
		uri: process.env.DATABASE,
	},
	okta: {
		apiToken: process.env.API_TOKEN,
		clientId: process.env.SHOPIFY_CLIENT_ID,
		userGroup: process.env.USER_GROUP,
		domain: process.env.OKTA_DOMAIN,
	},
};
