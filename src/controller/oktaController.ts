import type { User } from '../types/user';
import { config } from '../config';
import type { Request, Response } from 'express';

class OktaController {
	public registerUser = async (req: Request<{}, {}, User>, res: Response) => {
		try {
			let user = req.body;
			const option: RequestInit = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `SSWS ${config.okta.apiToken}`,
				},
				body: JSON.stringify({
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
				}),
			};
			const registerUser = fetch(
				`https://${config.okta.domain}/api/v1/users?activate=true`,
				option,
			);
			registerUser
				.then(() => {
					return res;
				})
				.catch((error) => {
					throw error;
				});
		} catch (error) {
			return res.status(500).json({ error: error });
		}
	};
}

export const oktaController = new OktaController();
