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
exports.eliminarCancion = exports.actualizarCancion = exports.agregarCancion = exports.obtenerCancion = exports.obtenerCanciones = void 0;
const mysql_service_1 = __importDefault(require("../services/mysql.service"));
const obtenerCanciones = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mysql_service_1.default)('SELECT * FROM canciones').then((response) => {
        const data = {
            message: `${response.length} datos encontrados`,
            data: response.length > 0 ? response : null
        };
        res.json(response);
    }).catch(error => {
        next(error);
    });
});
exports.obtenerCanciones = obtenerCanciones;
const obtenerCancion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`SELECT * FROM canciones WHERE idcancion = ${req.params.id} `);
        res.send(response);
    }
    catch (error) {
        next(error);
    }
});
exports.obtenerCancion = obtenerCancion;
const agregarCancion = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, mysql_service_1.default)(`INSERT INTO canciones (nombre, genero, artista) VALUES ('${req.body.nombre}', '${req.body.genero}', '${req.body.artista}')`);
        res.status(201).json({ message: 'created', id: response.insertId });
    }
    catch (error) {
        next(error);
    }
});
exports.agregarCancion = agregarCancion;
const actualizarCancion = (req, res, next) => {
    const { nombre, genero, artista } = req.body;
    const { id } = req.params;
    (0, mysql_service_1.default)(`UPDATE canciones SET nombre = '${nombre}', genero = '${genero}', artista = '${artista}' WHERE idcancion = '${id}'`).then((response) => {
        response.json({ message: response.affectedRows > 0 ? 'Updated' : 'No hay registro con este Id' });
    }).catch((error) => {
        next(error);
    });
};
exports.actualizarCancion = actualizarCancion;
const eliminarCancion = (req, res, next) => {
    (0, mysql_service_1.default)(`DELETE * FROM canciones WHERE idcancion = ${req.params.id} `).then((response) => {
        console.log(response);
        res.json({ message: response.affectedRows > 0 ? 'deleted' : 'No hay registro con este Id' });
    }).catch((error) => {
        next(error);
    });
};
exports.eliminarCancion = eliminarCancion;
//# sourceMappingURL=cancionesController.js.map