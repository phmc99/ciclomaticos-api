import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import Option from "./option";
import QuestionResponse from "./question-response";
import Survey from "./survey";

@Entity("question")
export default class Question {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: "180" })
  title!: string;

  @ManyToOne(() => Survey, (survey) => survey.questions)
  survey!: Survey;

  @OneToMany(() => Option, (option) => option.question, { eager: true })
  options!: Option[];

  @OneToMany(() => QuestionResponse, (response) => response.question)
  responses!: QuestionResponse[];
}
