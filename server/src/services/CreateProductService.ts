import Product from "../models/Product";
import ProductsRepository from './../repositories/ProductsRepository';
import { getCustomRepository } from 'typeorm';

interface ProductsDTO {
	name: string; 
	description: string; 
	price: number; 
	interestFree: boolean;
	delivery: boolean; 
	mainImage: string;
}

export default class CreateProductService {
	public async execute(newProduct: ProductsDTO): Promise<Product> {
		const productsRepository = getCustomRepository(ProductsRepository);

		const product = productsRepository.createProduct(newProduct);

		return product;
	}
}