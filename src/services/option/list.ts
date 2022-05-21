import { AppDataSource } from "../../data-source";
import { Question } from "../../entities";
import AppError from "../../errors/app-error";

export const listByQuestion = async (questionId: string) => {
  const questionRepository = AppDataSource.getRepository(Question);

  const question = await questionRepository.findOneBy({ id: questionId });

  if (!question) {
    throw new AppError("Question not found", 404);
  }

  return question.options;
};
