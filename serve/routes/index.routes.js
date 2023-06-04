import { Router } from "express";

import { getHome } from '../controllers/home.controller.js'

const router = Router();

router.get('/Home',getHome)

export default router;
