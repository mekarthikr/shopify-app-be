import type { Request, Response } from 'express';
import Axios from '../services/http';

import type { User } from '../types/user';
import { config } from '../config';


class OktaController {
	private axios: Axios;

	constructor() {
		this.axios = new Axios(`https://${config.okta.domain}`, {
			headers: {
				'Content-Type': 'application/json',
				Authorization: `SSWS ${config.okta.apiToken}`,
			},
		});
	}

	public registerInOkta = async (
		req: Request<{}, {}, User>,
		res: Response,
	) => {
		const user = req.body;
		const requestData = {
			profile: {
				firstName: user.firstName,
				lastName: user.lastName,
				email: user.email,
				login: user.email,
			},
			credentials: {
				password: { value: user.password },
			},
			groupIds: [config.okta.userGroup],
		};
		const response = await this.axios.requestHandler({
			method: 'POST',
			body: requestData,
			endpoint: '/api/v1/users?activate=true',
		});
		return response.data;
	};
}

export const oktaController = new OktaController();
