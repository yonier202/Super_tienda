import executeQuery from "../services/mysql.service";

const obtenerCanciones = async (req, res, next) => {
    await executeQuery('SELECT * FROM canciones').then((response)=>{
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };  
        res.json(response);
    }).catch(error =>{
        next(error);
    })
    
}

const obtenerCancion = async(req, res, next) => {
    try{
        const response = await executeQuery(`SELECT * FROM canciones WHERE idcancion = ${req.params.id} `);
        res.send(response);
    }catch(error){
        next(error);
    }
    
}

const agregarCancion = async(req, res, next) => {
    try{
        const response = await executeQuery (`INSERT INTO canciones (nombre, genero, artista) VALUES ('${req.body.nombre}', '${req.body.genero}', '${req.body.artista}')`)
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
}

const actualizarCancion = (req, res, next) => {
    const {nombre, genero, artista} = req.body;
    const {id}=req.params;
    executeQuery(`UPDATE canciones SET nombre = '${nombre}', genero = '${genero}', artista = '${artista}' WHERE idcancion = '${id}'`).then((response)=>{
    response.json({message: response.affectedRows > 0 ? 'Updated' : 'No hay registro con este Id'});
    }).catch((error)=>{
        next(error);
    })
    
}

const eliminarCancion = (req, res, next) => {
    executeQuery(`DELETE * FROM canciones WHERE idcancion = ${req.params.id} `).then((response) =>{
        console.log(response);
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'No hay registro con este Id'});
    }).catch((error)=>{
        next(error);
    })
    
}

export {obtenerCanciones, obtenerCancion, agregarCancion, actualizarCancion, eliminarCancion }