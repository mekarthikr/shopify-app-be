import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;
const APP_URL = process.env.APP_URL;
const DATABASE = process.env.DATABASE;
const API_TOKEN = process.env.API_TOKEN;

export const config = {
	server: {
		port: PORT,
	},
	application: {
		uri: APP_URL,
	},
	database: {
		uri: DATABASE,
	},
	okta: {
		apiToken: API_TOKEN,
	},
};
