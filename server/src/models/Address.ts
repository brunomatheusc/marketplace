import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('addresses')
export default class Address {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	cep: string;
	
	@Column()
	street: string;
	
	@Column()
	number: number;
	
	@Column()
	complement: string;
	
	@Column()
	neighbour: string;
	
	@Column()
	city: string;
	
	@Column()
	uf: string;

	@CreateDateColumn()
	created_at: Date;

	@UpdateDateColumn()
	updated_at: Date;
}
