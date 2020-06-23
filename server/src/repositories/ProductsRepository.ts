import { Repository, EntityRepository } from "typeorm";
import Product from './../models/Product';

interface ProductsDTO {
	name: string;
	description: string;
	price: number;
	weight?: number;
	installments?: number;
	installmentsValue?: number;
	interestFree: boolean;
	delivery: boolean;
	mainImage: string;
}

@EntityRepository(Product)
export default class ProductsRepository extends Repository<Product> {
	public async createProduct(newProduct: ProductsDTO): Promise<Product> {
		const product = this.create(newProduct);
	
		await this.save(product);

		return product;
	}

	public async all(): Promise<Product[]> {
		return this.find();
	}

	public async findById(productId: string): Promise<Product> {
		return this.findById(productId);
	}
}