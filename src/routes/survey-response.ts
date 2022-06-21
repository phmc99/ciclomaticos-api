import { Router } from "express";
import { create, getAll, getMetrics } from "../controllers/survey-response";

const router = Router();

export const surveyResponseRouter = () => {
  router.get("", getAll);
  router.post("", create);
  router.get("/metrics/:surveyId", getMetrics);

  return router;
};
