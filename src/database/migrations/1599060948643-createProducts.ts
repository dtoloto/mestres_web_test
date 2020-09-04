import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProducts1599060948643 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'SKU',
            type: 'varchar',
          },
          {
            name: 'amount',
            type: 'integer',
          },
          {
            name: 'value',
            type: 'decimal',
          },
          {
            name: 'createdAT',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updatedAT',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
