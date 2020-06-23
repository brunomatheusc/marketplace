import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
export default class Product {
	@PrimaryGeneratedColumn()
	id: string;
	
	@Column()
	name: string;
	
	@Column()
	description: string;
	
	@Column()
	price: number;
	
	@Column()
	weight?: number;
	
	@Column()
	installments: number;
	
	@Column()
	installmentsValue: number;
	
	@Column()
	interestFree: boolean;
	
	@Column()
	delivery: boolean;
	
	@Column()
	mainImage: string;
	
	@Column('varchar', { array: true })
	imageUrls: string[];

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}