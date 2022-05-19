import { AppDataSource } from "../../data-source";
import { Survey } from "../../entities";
import { ISurvey } from "../../interfaces";

export const updateSurveyData = async (id: string, body: ISurvey) => {
  const surveyRepository = AppDataSource.getRepository(Survey);

  const survey = await surveyRepository.findOneBy({ id });

  const updatedSurvey = await surveyRepository.save({ ...survey, ...body});
  
  return updatedSurvey;
};

export const updateSurveyPublished = async (id: string) => {
  const surveyRepository = AppDataSource.getRepository(Survey);

  const survey = await surveyRepository.findOneBy({ id });

  const updatedSurvey = await surveyRepository.save({ ...survey, is_published: !survey?.is_published});
  
  return updatedSurvey;
};