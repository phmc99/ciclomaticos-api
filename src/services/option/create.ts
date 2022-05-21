import { AppDataSource } from "../../data-source";
import { Option, Question } from "../../entities";
import AppError from "../../errors/app-error";
import { IOption } from "../../interfaces";

export const createOption = async (body: IOption) => {
  const questionRepository = AppDataSource.getRepository(Question);
  const optionRepository = AppDataSource.getRepository(Option);

  const question = await questionRepository.findOneBy({ id: body.question });

  if (!question) {
    throw new AppError("Question not found", 404)
  }

  const newOption = optionRepository.create({ title: body.title, question });

  await optionRepository.save(newOption);

  return newOption;
};