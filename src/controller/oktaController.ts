import type { Request, Response } from 'express';

class OktaController {
	public registerUser = async (req: Request, res: Response) => {
		try {
			let user = req.body;
			const option: RequestInit = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization:
						'SSWS 00jTFiSPIhn5GNu9RUxVc4ZfaotwouOf79l05J5HAK',
				},
				body:JSON.stringify( {
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
				}),
			};
			const registerUser = fetch(
				'https://dev-66628281.okta.com/api/v1/users?activate=true',
				option,
			);
			registerUser.then((respon) => {
				console.log(respon);
				return res;
			}).catch((error)=>{throw error});
		} catch (error) {
			return res.status(500).json({ error: error });
		}
	};
}

export const oktaController = new OktaController();
