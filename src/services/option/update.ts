import { AppDataSource } from "../../data-source";
import { Option } from "../../entities";

export const updateOptionTitle = async (id: string, title: string) => {
  const optionRepository = AppDataSource.getRepository(Option);

  const option = await optionRepository.findOneBy({ id });

  const updatedOption = await optionRepository.save({ ...option, title });
  
  return updatedOption;
};
