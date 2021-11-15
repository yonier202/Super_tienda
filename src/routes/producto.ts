import { Router } from "express"
import { actualizarProducto, agregarProducto, eliminarProducto, obtenerProducto, obtenerProductos } from "../controllers/productoController";
import errorHandler from "../middlewares/erros";

const productoRoutes = (app) =>{
    const router = Router();
    app.use('/', router);
    router.get('/obtenerProductos', obtenerProductos, errorHandler);
    router.get('/obtenerProducto/:id', obtenerProducto);
    router.post('/agregarProducto', agregarProducto);
    router.put('/actualizarProducto/:id', actualizarProducto);
    router.delete('/eliminarProducto/:id', eliminarProducto);  
    
    router.use(errorHandler);
}
export default productoRoutes;