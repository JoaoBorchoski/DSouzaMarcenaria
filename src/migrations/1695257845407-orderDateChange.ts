import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderDateChange1695257845407 implements MigrationInterface {
    name = 'OrderDateChange1695257845407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "order_date" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ALTER COLUMN "order_date" DROP DEFAULT`);
    }

}
