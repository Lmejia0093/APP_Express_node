import { Router } from "express";

import { getCategoria } from '../controllers/categoria.controller.js'

const router = Router();

router.get('/Categoria',getCategoria)

export default router;
