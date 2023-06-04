import { Router } from "express";

import { getProductos } from '../controllers/producto.controller.js'

const router = Router();

router.get('/Productos',getProductos)

export default router;