import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import Question from "./question";

@Entity("question_option")
export default class Option {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: "120" })
  title!: string;

  @ManyToOne(() => Question, (question) => question.options)
  question!: Question;
}
