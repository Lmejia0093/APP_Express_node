import {pool} from '../db.js'

export const getHome = async(req,res) => {
    try {
        const [result] = await  pool.query('SELECT * FROM imagenes')
        res.json(result)
        
    } catch (error) {
        return res.status(404).json({message:error.message});
    }

}












