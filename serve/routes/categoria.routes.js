import { Router } from "express";

import { getCategoria,updateCategoria,createCategoriacontroller, deleteCategoriaController } from '../controllers/categoria.controller.js'


const router = Router();

router.get('/Categoria',getCategoria)
router.put('/Categoria/:id',updateCategoria)
router.post('/Categoria',createCategoriacontroller)
router.delete('/categoria/:id',deleteCategoriaController)

export default router;
