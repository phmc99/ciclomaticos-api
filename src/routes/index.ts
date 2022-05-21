import { Express } from "express";
import { optionRouter } from "./option";
import { questionRouter } from "./question";
import { surveyRouter } from "./survey";

export const initializeRoutes = (app: Express) => {
  app.use("/survey", surveyRouter());
  app.use("/question", questionRouter());
  app.use("/option", optionRouter());
};
