import { AppDataSource } from "../../data-source";
import { Question } from "../../entities";

export const updateQuestionTitle = async (id: string, title: string) => {
  const questionRepository = AppDataSource.getRepository(Question);

  const question = await questionRepository.findOneBy({ id });

  const updatedQuestion = await questionRepository.save({ ...question, title });
  
  return updatedQuestion;
};
