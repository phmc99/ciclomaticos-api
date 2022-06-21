import { AppDataSource } from "../../data-source";
import { Survey } from "../../entities";
import { paginateData } from "../../utils";

export const listAll = async (surveyId: string, page = 1) => {
  const surveyRepository = AppDataSource.getRepository(Survey);

  const survey = await surveyRepository.findOneBy({ id: surveyId });

  if (!survey) {
    return;
  }

  return paginateData(survey.responses, page);
};

export const listMetrics = async (surveyId: string) => {
  const surveyRepository = AppDataSource.getRepository(Survey);
  const survey = await surveyRepository.findOneBy({ id: surveyId });

  if (!survey) {
    return;
  }
  const responsesLength = survey.responses.length;
  const questionResponses = survey.responses.map(
    (item) => item.questions_responses
  );

  const obj: any = {};

  questionResponses[0].forEach((elt) => {
    obj[elt.question.title] = elt.question.options.map((item) => {
      return { title: item.title, count: 0 };
    });
  });

  questionResponses.forEach((element) => {
    element.forEach((response) => {
      const questionTitle = response.question.title;
      const optionTitle = response.option.title;

      const index = obj[questionTitle].findIndex(
        (item: any) => item.title === optionTitle
      );
      if (index >= 0) {
        obj[questionTitle][index].count += 1;
      }
    });
  });

  return {
    total_responses: responsesLength,
    resume: obj
  };
};
