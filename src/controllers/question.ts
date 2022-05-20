import { NextFunction, Request, Response } from "express";
import { createQuestion } from "../services/question/create";
import { destroyQuestion } from "../services/question/delete";
import { listBySurvey } from "../services/question/list";
import { updateQuestionTitle } from "../services/question/update";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, survey } = req.body
    const question = await createQuestion({title, survey});
    res.status(201).json(question);
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
    const { survey } = req.query;
    const questions = await listBySurvey(survey as string);
    res.status(200).json(questions);
  } catch (error) {
    next(error);
  }
};

export const patchQuestionTitle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, survey } = req.body;
    const question = await updateQuestionTitle(survey, title);
    res.status(200).json(question);
  } catch (error) {
    next(error);
  }
};

export const deleteQuestion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await destroyQuestion(id);
    res.status(204).json({});
  } catch (error) {
    next(error);
  }
};

