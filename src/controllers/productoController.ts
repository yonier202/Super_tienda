import executeQuery from "../services/mysql.service";

const obtenerProductos = async (req, res, next) => {
    await executeQuery('SELECT * FROM super_tienda').then((response)=>{
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
        const response = await executeQuery(`SELECT * FROM super_tienda WHERE idproducto = ${req.params.id} `);
        res.send(response);
    }catch(error){
        next(error);
    }
    
}

const agregarProducto = async(req, res, next) => {
    try{
        const response = await executeQuery (`INSERT INTO super_tienda (nombre, Referencia, cantidad, valor, descripcion) VALUES ('${req.body.nombre}', '${req.body.Referencia}', '${req.body.cantidad}', '${req.body.valor}', '${req.body.descripcion}',)`)
        res.status(201).json({ message: 'created', id: response.insertId});
    }catch(error){
        next(error);
    }
}

const actualizarProducto = (req, res, next) => {
    const {nombre, Referencia, cantidad, valor, descripcion} = req.body;
    const {id}=req.params;
    executeQuery(`UPDATE super_tienda SET nombre = '${nombre}', Referencia = '${Referencia}', cantidad = '${cantidad}', valor = '${valor}', descripcion = '${descripcion}' WHERE idproducto = '${id}'`).then((response)=>{
    response.json({message: response.affectedRows > 0 ? 'Updated' : 'No hay registro con este Id'});
    }).catch((error)=>{
        next(error);
    })
    
}

const eliminarProducto = (req, res, next) => {
    executeQuery(`DELETE * FROM super_tienda WHERE idproducto = ${req.params.id} `).then((response) =>{
        console.log(response);
        res.json({message: response.affectedRows > 0 ? 'deleted' : 'No hay registro con este Id'});
    }).catch((error)=>{
        next(error);
    })
    
}

export {obtenerProductos, obtenerProducto, agregarProducto, actualizarProducto, eliminarProducto }