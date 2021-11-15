import express from 'express';
import cancionesRoutes from './routes/canciones';
import config from './config/config';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
cancionesRoutes(app)
app.get('/prueba/:id', async (req, res, next) => {
    
    res.status(404).json({ message: "todo ok"});
});


app.listen(config.PORT, () => {
    return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});
