"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = require("../controllers/productoController");
const erros_1 = __importDefault(require("../middlewares/erros"));
const productoRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/obtenerProductos', productoController_1.obtenerProductos, erros_1.default);
    router.get('/obtenerProducto/:id', productoController_1.obtenerProducto);
    router.post('/agregarProducto', productoController_1.agregarProducto);
    router.put('/actualizarProducto/:id', productoController_1.actualizarProducto);
    router.delete('/eliminarProducto/:id', productoController_1.eliminarProducto);
    router.use(erros_1.default);
};
exports.default = productoRoutes;
//# sourceMappingURL=producto.js.map