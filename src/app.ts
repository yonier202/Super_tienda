import express from 'express';
import cancionesRoutes from './routes/canciones';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
cancionesRoutes(app);
app.get('/prueba/:id', async (req, res, next) => {

    console.log("antes de la promesa");
    
    res.status(404).json({ message: "todo ok"});
});


app.listen(port, () => {
    return console.log(`servidor corriendo en el puerto ${port}`);
});
