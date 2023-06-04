import { response } from "express";
import { pool } from "../db.js";

export const getUsuarios = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM usuario");
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const getUsuario = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM usuario WHERE id=?", [
      req.params.id,
    ]);
    if (result.length === 0) {
      return res.status(404).json({ message: "Taks not found" });
    }
    {
      res.send(result[0]);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const SelectUsuarios = async (req, res) => {
 try {
  const { nombre, clave } = req.body;
  const values = [nombre, clave];
  
  const [result] = await pool.query('SELECT id,nombre from usuario WHERE nombre=? AND clave=?', values,);
  
 //console.log(result[0])
   
 
      if (result.length > 0) {
        res.status(200).send({
          'id' : result[0].id,
          'nombre': result[0].nombre,
         
        });
      }
  
 } catch (error) {
  return res.status(404).json({ message: error.message });
 }
 
        
      
      
    };
 

export const updateUsuarios = async (req, res) => {
  try {
    const result = await pool.query("UPDATE usuario SET ?  WHERE id=? ", [
      req.body,
      req.params.id,
    ]);

    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deleteUsuarios = async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM usuario WHERE id = ?", [
      req.params.id,
    ]);
    console.log(result);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Taks not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
