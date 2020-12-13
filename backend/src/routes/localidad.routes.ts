import { Router } from "express";
import { LocalidadController } from "../controllers/localidad.controllers";
import { validarToken } from "../libs/verificarToken";
const enrutadorLocalidad = Router();

let localidadController = new LocalidadController();

enrutadorLocalidad.route('/localidad').get(validarToken,localidadController.listarLocalidad);

enrutadorLocalidad.route('/localidad').post(localidadController.crearLocalidad);

enrutadorLocalidad.route('/localidad/:id').delete(localidadController.eliminarLocalidad);

enrutadorLocalidad.route('/localidad/:id').put(localidadController.actualizarLocalidad);

enrutadorLocalidad.route('/localidades/:id').get(localidadController.listarLocalidades);

export default enrutadorLocalidad;
