import { Router } from "express";
import { create, deleteQuestion, getAll, patchQuestionTitle } from "../controllers/question";

const router = Router();

export const questionRouter = () => {
  router.post("", create);
  router.get("", getAll);
  router.patch("/:id", patchQuestionTitle)
  router.delete("/:id", deleteQuestion)
  return router;
};
