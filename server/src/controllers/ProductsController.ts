import { Request, Response } from 'express';
import Product from '../models/Product';
import CreateProductService from '../services/CreateProductService';
import { getCustomRepository } from 'typeorm';
import ProductsRepository from './../repositories/ProductsRepository';

interface ProductRequest {
	name: string; 
	description: string; 
	price: number; 
	interestFree: boolean;
	delivery: boolean; 
	mainImage: string;
}

class ProductsController {
	async create(req: Request, res: Response) {
		const newProduct: ProductRequest = req.body;

		const productService = new CreateProductService();

		const product = await productService.execute(newProduct);

		return res.json({ product });
	}

	async getAll(req: Request, res: Response) {
		const products = await getCustomRepository(ProductsRepository).all(); 

		return res.json({ products });
	}
}

export default new ProductsController;