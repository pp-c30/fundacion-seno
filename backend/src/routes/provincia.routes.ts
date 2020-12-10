import { Router } from "express";
import { ProvinciaController } from "../controllers/provincia.controllers";
import { validarToken } from "../libs/verificarToken";

const enrutadorProvincia = Router();

let provinciaController = new ProvinciaController;

enrutadorProvincia.route('/provincia').get(validarToken,provinciaController.listarProvincia);

enrutadorProvincia.route('/provincia').post(provinciaController.crearProvincia);

enrutadorProvincia.route('/provincia/:id').delete(provinciaController.eliminarProvincia);

enrutadorProvincia.route('/provincia/:id').put(provinciaController.actualizarProvincia);

enrutadorProvincia.route('/provincia/:id').get(provinciaController.obtenerProvincia);

export default enrutadorProvincia;