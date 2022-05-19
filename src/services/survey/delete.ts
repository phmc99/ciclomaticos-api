import { AppDataSource } from "../../data-source";
import { Survey } from "../../entities";
import AppError from "../../errors/app-error";

export const destroySurvey = async (id: string) => {
  const surveyRepository = AppDataSource.getRepository(Survey);

  const survey = await surveyRepository.findOneBy({ id });

  if (!survey) {
    throw new AppError("Survey not found!", 404);
  }

  await surveyRepository.remove([survey]);

  
  return;
};