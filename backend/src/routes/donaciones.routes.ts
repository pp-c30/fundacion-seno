import { Router } from "express";
import { DonacionesController } from "../controllers/donaciones.controllers";
import { validarToken } from "../libs/verificarToken";
const enrutadorDonaciones = Router();

let donacionesController = new DonacionesController();

enrutadorDonaciones.route('/donaciones').get(validarToken,donacionesController.listarDonaciones);

enrutadorDonaciones.route('/donaciones').post(donacionesController.crearDonaciones);

enrutadorDonaciones.route('/donaciones/:id').delete(donacionesController.eliminarDonaciones);

enrutadorDonaciones.route('/donaciones/:id').put(donacionesController.actualizarDonaciones);

enrutadorDonaciones.route('/donaciones/:id').get(donacionesController.obtenerDonaciones);

export default enrutadorDonaciones;