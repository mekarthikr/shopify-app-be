import type { Request, Response } from 'express';
import { User } from '../model/user';
import { oktaController } from './oktaController';

class UserController {
	public addUsers = async (req: Request, res: Response) => {
		try {
			let user = req.body;
			let find = await User.findOne({ email: user.email });

			if (find) {
				return res.status(422).json({ message: 'user already exists' });
			} else {
				oktaController
					.registerUser(req, res)
					.then(async () => {
						user = new User({
							...user,
						});
						await user.save();
						return res
							.status(201)
							.json({ message: 'user created successfully' });
					})
					.catch((error: Error) => {
						throw error;
					});
			}
		} catch (error) {
			return res.status(500).json({ error: error });
		}
	};
}

export const userController = new UserController();
