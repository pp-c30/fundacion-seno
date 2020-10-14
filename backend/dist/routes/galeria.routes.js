"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const galeria_controllers_1 = require("../controllers/galeria.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
const enrutadorGaleria = express_1.Router();
let galeriaController = new galeria_controllers_1.GaleriaController();
enrutadorGaleria.route('/galeria').post(multer_1.default.array('img_galeria'), galeriaController.guardarGaleria);
enrutadorGaleria.route('/galeria').get(galeriaController.listarGaleria);
enrutadorGaleria.route('/galeria/:id').delete(galeriaController.eliminarGaleria);
enrutadorGaleria.route('/galeria/:id').put(galeriaController.actualizarGaleria);
enrutadorGaleria.route('/galeria/:id').get(galeriaController.obtenerGaleria);
exports.default = enrutadorGaleria;
