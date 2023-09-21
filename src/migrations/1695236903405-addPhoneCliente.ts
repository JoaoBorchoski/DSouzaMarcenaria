import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPhoneCliente1695236903405 implements MigrationInterface {
    name = 'AddPhoneCliente1695236903405'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" ADD "phone" character varying(127) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" DROP COLUMN "phone"`);
    }

}
