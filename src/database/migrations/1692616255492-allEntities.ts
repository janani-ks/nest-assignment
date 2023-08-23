import { MigrationInterface, QueryRunner } from "typeorm";

export class AllEntities1692616255492 implements MigrationInterface {
    name = 'AllEntities1692616255492'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "user_name" text NOT NULL, "user_mobileno" integer NOT NULL, "user_email" text NOT NULL, "user_password" text NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
