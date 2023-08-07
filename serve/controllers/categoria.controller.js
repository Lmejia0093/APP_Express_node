import {pool} from '../db.js'

export const getCategoria = async(req,res) => {
    try {
        const [result] = await  pool.query('SELECT * FROM Categoria')
        res.json(result)
        
    } catch (error) {
        return res.status(404).json({message:error.message});
    }

}
export const updateCategoria = async(req,res) => {
  // console.log(`este dato quiero ver ${req.params.id}`)
   // console.log(req.body.nombre)
    try {
      
        const result = await  pool.query('UPDATE Categoria SET nombre = ?  WHERE id=? ',[
   
            req.body.nombre,
            req.params.id,
          ]);
          
            res.json(result)
    } catch (error) {
        return res.status(404).json({message:error.message});
    }



}

export const createCategoriacontroller = async(req,res) => {
    try {
        const {nombre} = req.body
        const [result] = await  pool.query('INSERT INTO Categoria (nombre) VALUES (?) ',[nombre]);
      
          res.json({
              id:result.insertId,
              nombre,
              
      
          })
    } catch (error) {
        return res.status(404).json({message:error.message});
    }
 
   
}

export const deleteCategoriaController = async(req,res) => {
    try {
        const result =   await pool.query('DELETE FROM Categoria WHERE id = ?',[req.params.id]);
       // console.log(result)
        
         if(result.affectedRows === 0)
            return res.status(404).json({message:'Taks not found'});
         
            return res.sendStatus(204);
        
    } catch (error) {
        return res.status(404).json({message:error.message});
    }

 
  
}








