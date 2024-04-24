import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import { logger } from './middleware/logger';
import { config } from './config';
import mongoose from 'mongoose';
import userApi from './routes/userRoutes';

const app = express();
const server = http.createServer(app);
const corsOptions = {
	origin: config.application.uri,
	credentials: true,
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(json());

app.get('/', (req, res) => {
	res.send('Works Fine');
});
app.use('/user', userApi);

app.use(function (_req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', config.application.uri);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

mongoose.connect(config.database.uri).then(() => {
	console.log('Connected to DB');
	server.listen(config.server.port, () => {
		console.log(`Server Running at ${config.server.port}`);
	});
});

mongoose.connection.on('error', (error: Error) => {
	console.log('error', error);
});

export default app;
