import { pool } from "../db.js";

export const getalumnos = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM test");
    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
export const updatealumnos = async (req, res) => {
  // console.log(`este dato quiero ver ${req.params.id}`)
  // console.log(req.body.nombre)
 
  try {
    const result = await pool.query(

//prueba
      "UPDATE test SET codigo = ? ,nombre = ? , fecha =?,anio=?  WHERE codigo=? ",
      [
        req.body.codigo,
        req.body.nombre,
        req.body.fecha,
        req.body.anio,
        req.params.codigo,
      ]
    );

    res.json(result);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const createalumnos = async (req, res) => {
  console.log(req.body)
  try {
    const { codigo, nombre, fecha, anio } = req.body;
    const [result] = await pool.query(
      "INSERT INTO test (codigo,nombre,fecha,anio) VALUES (?,?,?,?) ",
      [codigo, nombre, fecha, anio]
    );

    res.json({
      codigo: result.insertId,
      nombre,
      fecha,
      anio,
    });
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

export const deletealumnos = async (req, res) => {
  try {
    const result = await pool.query("DELETE FROM test WHERE codigo = ?", [
      req.params.codigo,
    ]);
    // console.log(result)

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Taks not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
