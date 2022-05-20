import { AppDataSource } from "../../data-source";
import { Question, Survey } from "../../entities";
import AppError from "../../errors/app-error";
import { IQuestion } from "../../interfaces";

export const createQuestion = async (body: IQuestion) => {
  const surveyRepository = AppDataSource.getRepository(Survey);
  const questionRepository = AppDataSource.getRepository(Question);

  const survey = await surveyRepository.findOneBy({ id: body.survey });

  if (!survey) {
    throw new AppError("Survey not found", 404)
  }

  const newQuestion = questionRepository.create({ title: body.title, survey });

  await questionRepository.save(newQuestion);

  return newQuestion;
};