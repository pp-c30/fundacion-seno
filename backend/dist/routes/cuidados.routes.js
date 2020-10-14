"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cuidados_controllers_1 = require("../controllers/cuidados.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
const enrutadorCcuidados = express_1.Router();
let cuidadosController = new cuidados_controllers_1.CuidadosController();
enrutadorCcuidados.route('/cuidados').post(multer_1.default.array('img_cuidados'), cuidadosController.guardarCuidado);
enrutadorCcuidados.route('/cuidados').get(cuidadosController.listarCuidado);
enrutadorCcuidados.route('/cuidados/:id').delete(cuidadosController.eliminarCuidado);
enrutadorCcuidados.route('/cuidados/:id').put(cuidadosController.actualizarCuidado);
enrutadorCcuidados.route('/cuidados/:id').get(cuidadosController.obtenerCuidado);
exports.default = enrutadorCcuidados;
