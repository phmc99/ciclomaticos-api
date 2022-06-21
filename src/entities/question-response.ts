import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import Option from "./option";
import Question from "./question";
import SurveyResponse from "./survey-response";

@Entity("question_response")
export default class QuestionResponse {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(() => Question, (question) => question.responses, {eager: true})
  question!: Question;

  @ManyToOne(() => SurveyResponse, (survey) => survey.questions_responses)
  survey_response!: SurveyResponse;

  @ManyToOne(() => Option, {eager: true})
  option!: Option;

  @CreateDateColumn()
  created_at!: Date;
}
