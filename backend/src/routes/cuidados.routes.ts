import { Router } from "express";
import { CuidadosController } from "../controllers/cuidados.controllers";

const enrutadorCcuidados = Router();

let cuidadosController = new CuidadosController();


enrutadorCcuidados.route('/cuidados').get(cuidadosController.listarCuidado);

enrutadorCcuidados.route('/cuidados').post(cuidadosController.crearCuidado);

enrutadorCcuidados.route('/cuidados/:id').delete(cuidadosController.eliminarCuidado);

enrutadorCcuidados.route('/cuidados/:id').put(cuidadosController.actualizarCuidado);

enrutadorCcuidados.route('/cuidados/:id').get(cuidadosController.obtenerCuidado);
export default enrutadorCcuidados ;