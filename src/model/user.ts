import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: {
		type: String,
	},
});

export const User = model('User', UserSchema);
