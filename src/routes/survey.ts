import { Router } from "express";
import { create, getAll, getOne, getPublished } from "../controllers/survey";

const router = Router();

export const surveyRouter = () => {
  router.post("", create);
  router.get("", getAll);
  router.get("/published", getPublished);
  router.get("/:id", getOne);

  return router;
};
