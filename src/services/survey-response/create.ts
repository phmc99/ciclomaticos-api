import { AppDataSource } from "../../data-source";
import { Option, Question, Survey, QuestionResponse, SurveyResponse } from "../../entities";
import { ISurveyResponse } from "../../interfaces";

export const createSurveyResponse = async ({ survey_id, question_responses }: ISurveyResponse) => {
  const surveyResponseRepository = AppDataSource.getRepository(SurveyResponse);
  const questionResponseRepository = AppDataSource.getRepository(QuestionResponse);
  const surveyRepository = AppDataSource.getRepository(Survey);
  const questionRepository = AppDataSource.getRepository(Question);
  const optionRepository = AppDataSource.getRepository(Option);

  const survey = await surveyRepository.findOneBy({ id: survey_id });

  if (!survey) {
    return;
  }

  const surveyResponseCreate = surveyResponseRepository.create({ survey });
  const newSurveyResponse = await surveyResponseRepository.save(surveyResponseCreate);

  if (!newSurveyResponse) {
    return
  }

  question_responses.forEach( async ({ question_id, option_id }) => {
    const question = await questionRepository.findOneBy({ id: question_id });
    const option = await optionRepository.findOneBy({ id: option_id });

    if (!question || !option) {
      return;
    }

    const newQuestionResponse = questionResponseRepository.create({
      question,
      survey_response: newSurveyResponse,
      option
    });
    await questionResponseRepository.save(newQuestionResponse);
  });

  const surveyResponse = await surveyResponseRepository.findOneBy({ id: newSurveyResponse.id });

  return surveyResponse;
};
