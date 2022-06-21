import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1655436540246 implements MigrationInterface {
    name = 'createTable1655436540246'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "survey_response" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "surveyId" uuid, CONSTRAINT "PK_d9326eb52bf8b23d56a39ce419a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "survey" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(80) NOT NULL, "description" character varying(180) NOT NULL, "is_published" boolean NOT NULL DEFAULT false, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_f0da32b9181e9c02ecf0be11ed3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(180) NOT NULL, "surveyId" uuid, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question_option" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(120) NOT NULL, "questionId" uuid, CONSTRAINT "PK_64f8e42188891f2b0610017c8f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "question_response" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "questionId" uuid, "surveyResponseId" uuid, "optionId" uuid, CONSTRAINT "PK_b6c14a10d1d808f247ad89f4685" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "survey_response" ADD CONSTRAINT "FK_325dc8ed7bbdea328af1670dc0a" FOREIGN KEY ("surveyId") REFERENCES "survey"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question" ADD CONSTRAINT "FK_a1188e0f702ab268e0982049e5c" FOREIGN KEY ("surveyId") REFERENCES "survey"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_option" ADD CONSTRAINT "FK_ba19747af180520381a117f5986" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_response" ADD CONSTRAINT "FK_91f0c1f6c501e01525c9db6df29" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_response" ADD CONSTRAINT "FK_32ad4e58686e3be5a2eb0a69fce" FOREIGN KEY ("surveyResponseId") REFERENCES "survey_response"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "question_response" ADD CONSTRAINT "FK_206b5de5383ddee7e92b75b2a05" FOREIGN KEY ("optionId") REFERENCES "question_option"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "question_response" DROP CONSTRAINT "FK_206b5de5383ddee7e92b75b2a05"`);
        await queryRunner.query(`ALTER TABLE "question_response" DROP CONSTRAINT "FK_32ad4e58686e3be5a2eb0a69fce"`);
        await queryRunner.query(`ALTER TABLE "question_response" DROP CONSTRAINT "FK_91f0c1f6c501e01525c9db6df29"`);
        await queryRunner.query(`ALTER TABLE "question_option" DROP CONSTRAINT "FK_ba19747af180520381a117f5986"`);
        await queryRunner.query(`ALTER TABLE "question" DROP CONSTRAINT "FK_a1188e0f702ab268e0982049e5c"`);
        await queryRunner.query(`ALTER TABLE "survey_response" DROP CONSTRAINT "FK_325dc8ed7bbdea328af1670dc0a"`);
        await queryRunner.query(`DROP TABLE "question_response"`);
        await queryRunner.query(`DROP TABLE "question_option"`);
        await queryRunner.query(`DROP TABLE "question"`);
        await queryRunner.query(`DROP TABLE "survey"`);
        await queryRunner.query(`DROP TABLE "survey_response"`);
    }

}
