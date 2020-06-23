import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProducts1592879817573 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(new Table({
			name: 'products',
			columns: [
				{ name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
				{ name: 'name', type: 'varchar', isNullable: false },
				{ name: 'description', type: 'varchar', isNullable: false },
				{ name: 'price', type: 'numeric', isNullable: false },
				{ name: 'weight', type: 'numeric', isNullable: true },
				{ name: 'installments', type: 'integer', isNullable: true },
				{ name: 'installmentsValue', type: 'integer', isNullable: true },
				{ name: 'interestFree', type: 'boolean', isNullable: true },
				{ name: 'delivery', type: 'boolean', isNullable: false },
				{ name: 'mainImage', type: 'varchar', isNullable: false },
				{ name: 'imageUrls', type: 'varchar array', isNullable: true },
				{ name: 'created_at', type: 'timestamp', default: 'now()' },
				{ name: 'updated_at', type: 'timestamp', default: 'now()' }			
			]
		}))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('products');
    }
}
