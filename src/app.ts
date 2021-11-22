import express from 'express';
import config from './config/config';
import producto from './routes/producto';
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use((_, res, next) =>{
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Headers', '*');
    res.header('Acess-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

producto(app);
app.get('/prueba/:id', async (req, res, next) => {
    
    res.status(404).json({ message: "todo ok"});
});


app.listen(config.PORT, () => {
    return console.log(`servidor corriendo en el puerto ${config.PORT}`);
});
