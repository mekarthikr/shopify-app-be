import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import userApi from './routes/userRoutes';
import maintenanceApi from './routes/maintananceRoutes';
import bookOfBusinessApi from './routes/bookOfBusinessRoutes';
import { logger } from './middleware/logger';

const app = express();
const server = http.createServer(app);
const corsOptions = {
	origin: 'http://localhost:3000',
	credentials: true,
	optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(json());

app.get('/api/health',(req,res)=>{
	res.send('Works Fine')
})

app.use('/external-portal-bff/v1/user', userApi);
app.use('/external-portal-bff/v1/maintenance-message', maintenanceApi);
app.use('/external-portal-bff/v1/book-business', bookOfBusinessApi);

app.use(function (_req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use((req, _res, next) => {
	logger.info(`Received a ${req.method} request for ${req.url}`);
	next();
});

server.listen(8080, () => {
	console.log('Server Running at 8080');
});
