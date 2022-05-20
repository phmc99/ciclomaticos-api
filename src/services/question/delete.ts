import { AppDataSource } from "../../data-source";
import { Question } from "../../entities";

export const destroyQuestion = async (id: string) => {
  const questionRepository = AppDataSource.getRepository(Question);
  await questionRepository.delete(id);
  return;
};