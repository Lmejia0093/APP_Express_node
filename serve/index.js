import  Express  from "express";
import {PORT} from './config.js';
import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/tasks.routes.js';
import CategoriaRoutes from './routes/categoria.routes.js'
import ProductosRoutes from './routes/producto.routes.js'
import UsuariosRoutes from './routes/usuario.routes.js'
import alumnosRoutes from './routes/alumnos.routes.js'
import cors from 'cors'
import morgan from 'morgan'
import bodyParser from "body-parser";
const app = Express();
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(Express.json());
app.use(indexRoutes);
app.use(taskRoutes);
app.use(CategoriaRoutes);
app.use(ProductosRoutes);
app.use(UsuariosRoutes)
app.use(alumnosRoutes);


app.listen(PORT);
console.log(`Server is running on port ${PORT}`);