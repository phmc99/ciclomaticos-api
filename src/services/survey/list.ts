import { AppDataSource } from "../../data-source";
import { Survey } from "../../entities";
import { paginateData } from "../../utils";

export const listAll = async (page = 1) => {
  const surveyRepository = AppDataSource.getRepository(Survey);

  const surveys = await surveyRepository.find();

  return paginateData(surveys, page);
};

export const listOne = async (id: string) => {
  const surveyRepository = AppDataSource.getRepository(Survey);

  const survey = await surveyRepository.findOneBy({ id });

  if (!survey) {
    return
  }
  return survey
};

export const  listPublished = async (page = 1) => {
  const surveyRepository = AppDataSource.getRepository(Survey);

  const surveys = await surveyRepository.find({
    where: { is_published: true }
  });

  return paginateData(surveys, page);
};