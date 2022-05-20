import { Express } from "express";
import { questionRouter } from "./question";
import { surveyRouter } from "./survey";

export const initializeRoutes = (app: Express) => {
  app.use("/survey", surveyRouter());
  app.use("/question", questionRouter());
};
