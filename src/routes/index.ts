import { Express } from "express";
import { surveyRouter } from "./survey";

export const initializeRoutes = (app: Express) => {
  app.use("/survey", surveyRouter());
};
