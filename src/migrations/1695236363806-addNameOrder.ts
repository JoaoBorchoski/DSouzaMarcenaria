import { MigrationInterface, QueryRunner } from "typeorm";

export class AddNameOrder1695236363806 implements MigrationInterface {
    name = 'AddNameOrder1695236363806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "name" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "name"`);
    }

}
