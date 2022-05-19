import { Router } from "express";
import { create, deleteSurvey, getAll, getOne, getPublished, patchSurveyData, patchSurveyPublished } from "../controllers/survey";

const router = Router();

export const surveyRouter = () => {
  router.post("", create);
  router.get("", getAll);
  router.get("/published", getPublished);
  router.get("/:id", getOne);
  router.patch("/:id", patchSurveyData)
  router.patch("/:id/publish", patchSurveyPublished)
  router.delete("/:id", deleteSurvey)
  return router;
};
