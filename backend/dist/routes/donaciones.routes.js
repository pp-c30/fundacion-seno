"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const donaciones_controllers_1 = require("../controllers/donaciones.controllers");
const verificarToken_1 = require("../libs/verificarToken");
const enrutadorDonaciones = express_1.Router();
let donacionesController = new donaciones_controllers_1.DonacionesController();
enrutadorDonaciones.route('/donaciones').get(verificarToken_1.validarToken, donacionesController.listarDonaciones);
enrutadorDonaciones.route('/donaciones').post(donacionesController.crearDonaciones);
enrutadorDonaciones.route('/donaciones/:id').delete(donacionesController.eliminarDonaciones);
enrutadorDonaciones.route('/donaciones/:id').put(donacionesController.actualizarDonaciones);
enrutadorDonaciones.route('/donaciones/:id').get(donacionesController.obtenerDonaciones);
exports.default = enrutadorDonaciones;
