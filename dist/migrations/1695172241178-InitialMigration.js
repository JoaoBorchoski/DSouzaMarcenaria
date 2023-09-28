"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitialMigration1695172241178 = void 0;
class InitialMigration1695172241178 {
    constructor() {
        this.name = 'InitialMigration1695172241178';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "password" character varying(255) NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "clients" ("id" SERIAL NOT NULL, "name" character varying(127) NOT NULL, "email" character varying(127) NOT NULL, "address" character varying(127) NOT NULL, CONSTRAINT "UQ_b48860677afe62cd96e12659482" UNIQUE ("email"), CONSTRAINT "UQ_663ef24cff96c52e43d3148f29f" UNIQUE ("address"), CONSTRAINT "PK_f1ab7cf3a5714dbc6bb4e1c28a4" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`CREATE TABLE "orders" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "price" character varying(127) NOT NULL, "order_date" date NOT NULL, "delivery_date" date NOT NULL, "payment_deadline" date NOT NULL, "is_finished" boolean NOT NULL DEFAULT false, "clientId" integer, CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY ("id"))`);
            yield queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_1457f286d91f271313fded23e53" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_1457f286d91f271313fded23e53"`);
            yield queryRunner.query(`DROP TABLE "orders"`);
            yield queryRunner.query(`DROP TABLE "clients"`);
            yield queryRunner.query(`DROP TABLE "users"`);
        });
    }
}
exports.InitialMigration1695172241178 = InitialMigration1695172241178;
