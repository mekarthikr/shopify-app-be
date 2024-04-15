import { config } from '../config';
import type { Request, Response } from 'express';

class OktaController {
	public assignApplication = async (
		_req: Request,
		res: Response,
		data: any,
	) => {
		try {
			const option: RequestInit = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `SSWS ${config.okta.apiToken}`,
				},
				body: JSON.stringify({
					id: '0oagamzowxhFHGUWn5d7',
					scope: 'USER',
					credentials: {
						userName: data.email,
						password: {
							value: data.password,
						},
					},
				}),
			};
			const assignApplication = fetch(
				'https://dev-66628281.okta.com/api/v1/apps/0oagamzowxhFHGUWn5d7/users',
				option,
			);
			assignApplication
				.then((respon) => {
					console.log(respon);
					return res;
				})
				.catch((error) => {
					throw error;
				});
		} catch (error) {
			throw error;
		}
	};

	public registerUser = async (req: Request, res: Response) => {
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
						mobilePhone: '555-415-1337',
					},
					credentials: {
						password: { value: '$$Test1234' },
					},
					groupIds: ['00ggfu7tqdpg7q11l5d7'],
				}),
			};
			const registerUser = fetch(
				'https://dev-66628281.okta.com/api/v1/users?activate=true',
				option,
			);
			registerUser
				.then((respon) => {
					this.assignApplication(req, res, {
						...user,
						password: '$$Test1234',
					})
						.then((res) => {
							return res;
						})
						.catch((error) => {
							throw error;
						});
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
