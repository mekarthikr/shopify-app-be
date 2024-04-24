import { Request, Response } from 'express';
import { User } from '../model/user';
import type { User as IUser } from '../types/user';
import { oktaController } from './oktaController';

class UserController {
	public addUser = async (request: Request, response: Response) => {
		try {
			const newUser = request.body;
			const existingUser = await User.findOne({ email: newUser.email });
			if (existingUser) {
				return response.status(422).json({ message: 'User already exists' });
			} else {
				await this.registerAndSaveUser(request, response);
			}
		} catch (error) {
			return response.status(500).json({ error: 'Internal Server Error' });
		}
	};

	private async registerAndSaveUser(request: Request, response: Response) {
		try {
			const oktaResponse = (await oktaController.registerInOkta(
				request,
				response,
			)) as any;
			const newUser = new User({
				...oktaResponse,
				oktaId: oktaResponse.id,
			});
			await newUser.save();

			return response
				.status(201)
				.json({ message: 'User created successfully' });
		} catch (error) {
			throw error;
		}
	}
}

export const userController = new UserController();
