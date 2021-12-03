"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarProducto = exports.actualizarProducto = exports.agregarProducto = exports.obtenerProducto = exports.obtenerProductos = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const obtenerProductos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mysql_service_1.default)('SELECT * FROM producto').then((response) => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(response);
    }).catch(error => {
        next(error);
    });
});
exports.obtenerProductos = obtenerProductos;
const obtenerProducto = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`SELECT * FROM producto WHERE idproducto = ${req.params.id} `);
        res.send(response);
    }
    catch (error) {
        next(error);
    }
});
exports.obtenerProducto = obtenerProducto;
const agregarProducto = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO producto (nombre, Referencia, cantidad, valor, descripcion) VALUES ('${req.body.nombre}', '${req.body.Referencia}', '${req.body.cantidad}', '${req.body.valor}', '${req.body.descripcion}')`);
        res.status(201).json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        next(error);
    }
});
exports.agregarProducto = agregarProducto;
const actualizarProducto = (req, res, next) => {
    const { nombre, Referencia, cantidad, valor, descripcion } = req.body;
    const { id } = req.params;
    (0, mysql_service_1.default)(`UPDATE producto SET nombre = '${req.body.nombre}', Referencia = '${req.body.Referencia}', cantidad = '${req.body.cantidad}', valor = '${req.body.valor}', descripcion = '${req.body.descripcion}' WHERE idproducto = '${id}'`).then((response) => {
        res.json({ message: response.affectedRows > 0 ? 'Updated' : 'No hay registro con este Id' });
    }).catch((error) => {
        next(error);
    });
};
exports.actualizarProducto = actualizarProducto;
const eliminarProducto = (req, res, next) => {
    (0, mysql_service_1.default)(`DELETE FROM producto WHERE idproducto = ${req.params.id}`).then((response) => {
        res.json({ message: response.affectedRows > 0 ? 'deleted' : 'No hay registro con este Id' });
    }).catch((error) => {
        next(error);
    });
};
exports.eliminarProducto = eliminarProducto;
//# sourceMappingURL=productoController.js.map