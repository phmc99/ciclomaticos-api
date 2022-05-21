import { NextFunction, Request, Response } from "express";
import { createOption } from "../services/option/create";
import { destroyOption } from "../services/option/delete";
import { listByQuestion } from "../services/option/list";
import { updateOptionTitle } from "../services/option/update";


export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, question } = req.body
    const option = await createOption({title, question});
    res.status(201).json(option);
  } catch (error) {
    next(error);
  }
};

export const getAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { question } = req.query;
    const options = await listByQuestion(question as string);
    res.status(200).json(options);
  } catch (error) {
    next(error);
  }
};

export const patchOptionTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, question } = req.body;
    const option = await updateOptionTitle(question, title);
    res.status(200).json(option);
  } catch (error) {
    next(error);
  }
};

export const deleteOption = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await destroyOption(id);
    res.status(204).json({});
  } catch (error) {
    next(error);
  }
};

