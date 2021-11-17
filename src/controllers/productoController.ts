import executeQuery from "../services/mysql.service";

const obtenerProductos = async (req, res, next) => {
    await executeQuery('SELECT * FROM producto').then((response)=>{
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };  
        res.json(response);
    }).catch(error =>{
        next(error);
    })
    
}

const obtenerProducto = async(req, res, next) => {
    try{
        const response = await executeQuery(`SELECT * FROM producto WHERE idproducto = ${req.params.id} `);
        res.send(response);
    }catch(error){
        next(error);
    }
    
}

const agregarProducto = async(req, res, next) => {
    try{
        const response = await executeQuery (`INSERT INTO producto (nombre, Referencia, cantidad, valor, descripcion) VALUES ('${req.body.nombre}', '${req.body.Referencia}', '${req.body.cantidad}', '${req.body.valor}', '${req.body.descripcion}')`)
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
}

const actualizarProducto = (req, res, next) => {
    const {nombre, Referencia, cantidad, valor, descripcion} = req.body;
    const {id}=req.params;
    executeQuery(`UPDATE producto SET nombre = '${req.body.nombre}', Referencia = '${req.body.Referencia}', cantidad = '${req.body.cantidad}', valor = '${req.body.valor}', descripcion = '${req.body.descripcion}' WHERE idproducto = '${id}'`).then((response)=>{
    res.json({message: response.affectedRows > 0 ? 'Updated' : 'No hay registro con este Id'});
    }).catch((error)=>{
        next(error);
    })
    
}

const eliminarProducto = (req, res, next) => {
    executeQuery(`DELETE FROM producto WHERE idproducto = ${req.params.id}`).then((response) =>{
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'No hay registro con este Id'});
    }).catch((error)=>{
        next(error);
    })
    
}

export {obtenerProductos, obtenerProducto, agregarProducto, actualizarProducto, eliminarProducto }