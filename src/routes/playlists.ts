import { Router } from "express"
import { actualizarCancion, agregarCancion, eliminarCancion, obtenerCancion, obtenerCanciones } from "../controllers/cancionesController";
import errorHandler from "../middlewares/erros";

const playlistRoutes = (app) =>{
    const router = Router();
    app.use('/', router);
    router.get('/obtenerCanciones', obtenerCanciones, errorHandler);
    router.get('/obtenerCancion/:id', obtenerCancion);
    router.post('/agregarCancion', agregarCancion);
    router.put('/actualizarCancion/:id', actualizarCancion);
    router.delete('/eliminarCancion/:id', eliminarCancion);  
    
    router.use(errorHandler);
}
export default playlistRoutes;