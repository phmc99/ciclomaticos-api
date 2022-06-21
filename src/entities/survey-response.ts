import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from "typeorm";
import QuestionResponse from "./question-response";
import Survey from "./survey";

@Entity("survey_response")
export default class SurveyResponse {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Survey, (survey) => survey.responses)
  survey!: Survey;

  @OneToMany(() => QuestionResponse, (question) => question.survey_response, { eager: true })
  questions_responses!: QuestionResponse[];

  @CreateDateColumn()
  created_at!: Date;
}
