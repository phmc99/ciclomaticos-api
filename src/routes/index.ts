import { Express } from "express";
import { optionRouter } from "./option";
import { questionRouter } from "./question";
import { surveyRouter } from "./survey";
import { surveyResponseRouter } from "./survey-response";

export const initializeRoutes = (app: Express) => {
  app.use("/survey", surveyRouter());
  app.use("/question", questionRouter());
  app.use("/option", optionRouter());
  app.use("/responses", surveyResponseRouter());
};
