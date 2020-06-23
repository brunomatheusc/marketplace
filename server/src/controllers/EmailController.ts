import { Request, Response } from 'express';
import FindEmailService from '../services/FindEmailService';

class EmailController {
	async verifyEmail(req: Request, res: Response): Promise<Boolean> {
		const { email } = req.body;

		const findEmailService = new FindEmailService();

		await findEmailService.execute(email);

		return true;
	}	
}

export default new EmailController;