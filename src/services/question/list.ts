import { AppDataSource } from "../../data-source";
import { Question, Survey } from "../../entities";
import AppError from "../../errors/app-error";

export const listBySurvey = async (surveyId: string) => {
  const questionRepository = AppDataSource.getRepository(Question);
  const surveyRepository = AppDataSource.getRepository(Survey);

  const survey = await surveyRepository.findOneBy({ id: surveyId });

  if (!survey) {
    throw new AppError("Survey not found", 404);
  }

  return survey.questions;
};
