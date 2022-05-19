import { AppDataSource } from "../../data-source";
import { Survey } from "../../entities";
import { ISurvey } from "../../interfaces";

export const createSurvey = async (body: ISurvey) => {
  const surveyRepository = AppDataSource.getRepository(Survey);

  const newSurvey = surveyRepository.create({ ...body });

  await surveyRepository.save(newSurvey);

  return newSurvey;
};