import { Router } from "express";
import { CuidadosController } from "../controllers/cuidados.controllers";
import multer from "../libs/multer";
const enrutadorCcuidados = Router();

let cuidadosController = new CuidadosController();


enrutadorCcuidados.route('/cuidados').post(multer.array('img_cuidados'),cuidadosController.guardarCuidado)

enrutadorCcuidados.route('/cuidados').get(cuidadosController.listarCuidado);

enrutadorCcuidados.route('/cuidados/:id').delete(cuidadosController.eliminarCuidado);

enrutadorCcuidados.route('/cuidados/:id').put(cuidadosController.actualizarCuidado);

enrutadorCcuidados.route('/cuidados/:id').get(cuidadosController.obtenerCuidado);
export default enrutadorCcuidados ;