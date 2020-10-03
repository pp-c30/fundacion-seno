"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const acompaniamiento_controllers_1 = require("../controllers/acompaniamiento.controllers");
const enrutadorAcomp = express_1.Router();
let acompController = new acompaniamiento_controllers_1.AcompaniamientoController();
enrutadorAcomp.route('/acompaniamiento').get(acompController.listarAcomp);
enrutadorAcomp.route('/acompaniamiento').post(acompController.crearAcomp);
enrutadorAcomp.route('/acompaniamiento/:id').delete(acompController.eliminarAcomp);
enrutadorAcomp.route('/acompaniamiento/:id').put(acompController.actualizarAcomp);
enrutadorAcomp.route('/acompaniamiento/:id').get(acompController.obtenerAcomp);
exports.default = enrutadorAcomp;
