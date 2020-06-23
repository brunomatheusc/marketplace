import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from './../models/User';
import UsersRepository from './../repositories/UsersRepository';
import AppError from './../errors/AppError';

interface Request {
	name: string;
	email: string;
	password: string;
	confirmPassword: string;
	avatar: string;
	provider: boolean;
}

export default class CreateUserService {
	public async execute({ name, email, password, confirmPassword, avatar, provider }: Request): Promise<User> {
		const usersRepository = getCustomRepository(UsersRepository);

		if (password !== confirmPassword) {
			throw new AppError('Senhas não conferem');
		}

		const checkUserExists = await usersRepository.findOne({ where: { email }}) || null;

		if (checkUserExists){
			throw new AppError('Endereço de e-mail já está em uso');
		}

		const hashedPassword = await hash(password, 8);

		const user = await usersRepository.createUser({ name, email, password: hashedPassword, avatar, provider });

		return user;
	}
}