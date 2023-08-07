import { Router } from "express";

import {
  getalumnos,
  updatealumnos,
  createalumnos,
  deletealumnos,
} from "../controllers/alumnos.controller.js";

const router = Router();

router.get("/alumnos", getalumnos);
router.put("/alumnos/:codigo", updatealumnos);
router.post("/alumnos", createalumnos);
router.delete("/alumnos/:codigo", deletealumnos);

export default router;
