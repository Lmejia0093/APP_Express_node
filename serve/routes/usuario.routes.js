import { Router } from "express";
import {getUsuarios,getUsuario,SelectUsuarios,updateUsuarios,deleteUsuarios} from '../controllers/Usuarios.controllers.js'

const router = Router()

router.get('/Usuarios',getUsuarios);

router.get('/Usuarios/:id',getUsuario);

router.post('/Usuarios',SelectUsuarios);

router.put('/Usuarios/:id',updateUsuarios);

router.delete('/Usuarios/:id',deleteUsuarios);




export default router;