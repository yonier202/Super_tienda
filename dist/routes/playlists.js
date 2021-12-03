"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cancionesController_1 = require("../controllers/cancionesController");
const erros_1 = __importDefault(require("../middlewares/erros"));
const playlistRoutes = (app) => {
    const router = (0, express_1.Router)();
    app.use('/', router);
    router.get('/obtenerCanciones', cancionesController_1.obtenerCanciones, erros_1.default);
    router.get('/obtenerCancion/:id', cancionesController_1.obtenerCancion);
    router.post('/agregarCancion', cancionesController_1.agregarCancion);
    router.put('/actualizarCancion/:id', cancionesController_1.actualizarCancion);
    router.delete('/eliminarCancion/:id', cancionesController_1.eliminarCancion);
    router.use(erros_1.default);
};
exports.default = playlistRoutes;
//# sourceMappingURL=playlists.js.map