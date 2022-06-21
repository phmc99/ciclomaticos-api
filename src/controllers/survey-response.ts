import { NextFunction, Request, Response } from "express";
import AppError from "../errors/app-error";
import { createSurveyResponse } from "../services/survey-response/create";
import { listAll, listMetrics } from "../services/survey-response/list";

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { survey_id, question_responses } = req.body;
    const surveyResponse = await createSurveyResponse({
      survey_id,
      question_responses,
    });
    res.status(201).json(surveyResponse);
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
    const { page, surveyId } = req.query;

    if (!surveyId) {
      throw new AppError("Survey not found!", 404);
    }

    const surveyResponses = await listAll(surveyId.toString(), Number(page));
    res.json(surveyResponses);
  } catch (error) {
    next(error);
  }
};

export const getMetrics = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { surveyId } = req.params;

    if (!surveyId) {
      throw new AppError("Survey not found!", 404);
    }

    const surveyResponses = await listMetrics(surveyId);
    res.json(surveyResponses);
  } catch (error) {
    next(error);
  }
};
