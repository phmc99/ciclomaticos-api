import { Router } from "express";
import { create, deleteOption, getAll, patchOptionTitle } from "../controllers/option";

const router = Router();

export const optionRouter = () => {
  router.post("", create);
  router.get("", getAll);
  router.patch("/:id", patchOptionTitle)
  router.delete("/:id", deleteOption)
  return router;
};
