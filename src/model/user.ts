import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	oktaId: { type: String, required: false },
	status: { type: String, required: false },
	created: { type: Date, required: false },
	activated: { type: Date, required: false },
	statusChanged: { type: Date, required: false },
	lastLogin: { type: Date, required: false },
	lastUpdated: { type: Date, required: false },
	passwordChanged: { type: Date, required: false },
	profile: {
		firstName: { type: String, required: false },
		lastName: { type: String, required: false },
		email: { type: String, required: false },
		login: { type: String, required: false },
		mobilePhone: { type: String, required: false },
	},
});

export const User = model('User', UserSchema);
