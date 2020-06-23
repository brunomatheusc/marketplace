import { getCustomRepository } from 'typeorm';
import User from './../models/User';
import UsersRepository from './../repositories/UsersRepository';
import AppError from './../errors/AppError';

export default class FindEmailService {
	public async execute(email: string): Promise<User> {
		const usersRepository = getCustomRepository(UsersRepository);

		const user = usersRepository.getByEmail(email);

		if (user) {
			throw new AppError('E-mail já existente na base de dados');
		}

		return user;
	}
}