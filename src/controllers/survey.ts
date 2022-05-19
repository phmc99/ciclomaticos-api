import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";
import { createSurvey } from "../services/survey/create";
import { destroySurvey } from "../services/survey/delete";
import { listAll, listOne, listPublished } from "../services/survey/list";
import { updateSurveyData, updateSurveyPublished } from "../services/survey/update";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, is_published } = req.body;
    const survey = await createSurvey({ title, description, is_published });
    res.status(201).json(survey);
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
    const { page } = req.query;
    const surveys = await listAll(Number(page));
    res.status(200).json(surveys);
  } catch (error) {
    next(error);
  }
};

export const getOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const survey = await listOne(id);

    if (!survey) {
      throw new AppError("Survey not found", 404);
    }

    res.status(200).json(survey);
  } catch (error) {
    next(error);
  }
};

export const getPublished = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { page } = req.query;
    const surveys = await listPublished(Number(page));
    res.status(200).json(surveys);
  } catch (error) {
    next(error);
  }
};

export const patchSurveyData = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, is_published } = req.body;
    const { id } = req.params;
    const survey = await updateSurveyData(id, { title, description, is_published });
    res.status(200).json(survey);
  } catch (error) {
    next(error);
  }
};

export const patchSurveyPublished = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const survey = await updateSurveyPublished(id);
    res.status(200).json(survey);
  } catch (error) {
    next(error);
  }
};

export const deleteSurvey = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await destroySurvey(id);
    res.status(204).json({});
  } catch (error) {
    next(error);
  }
};

