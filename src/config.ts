import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 8000;
const APP_URL = process.env.APP_URL;
const DATABASE = process.env.DATABASE

export const config = {
	server: {
		port: PORT,
	},
    application:{
        uri:APP_URL
    },
    database:{
        uri:DATABASE
    }
};
