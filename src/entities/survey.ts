import { Entity, Column, PrimaryGeneratedColumn, OneToMany, UpdateDateColumn, CreateDateColumn } from "typeorm";
import Question from "./question";

@Entity("survey")
export default class Survey {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ length: "80" })
  title!: string;

  @Column({ length: "180" })
  description!: string;

  @Column({ default: false })
  is_published!: boolean;

  @OneToMany(() => Question, (question) => question.survey, { eager: true })
  questions!: Question[];

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}
