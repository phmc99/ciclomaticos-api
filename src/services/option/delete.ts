import { AppDataSource } from "../../data-source";
import { Option } from "../../entities";

export const destroyOption = async (id: string) => {
  const optionRepository = AppDataSource.getRepository(Option);
  await optionRepository.delete(id);
  return;
};