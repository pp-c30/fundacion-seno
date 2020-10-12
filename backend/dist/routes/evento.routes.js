"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const evento_controllers_1 = require("../controllers/evento.controllers");
const multer_1 = __importDefault(require("../libs/multer"));
const enrutadorEvento = express_1.Router();
let eventoController = new evento_controllers_1.EventoController();
enrutadorEvento.route('/eventos').post(multer_1.default.array('img_evento'), eventoController.guardarEvento);
exports.default = enrutadorEvento;
