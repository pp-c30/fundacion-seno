import { Router } from "express";
import { CuidadosController } from "../controllers/cuidados.controllers";
import multer from "../libs/multer";
import enrutadorEvento from "./evento.routes";
import { validarToken } from "../libs/verificarToken";

const enrutadorCcuidados = Router();

let cuidadosController = new CuidadosController();


enrutadorCcuidados.route('/cuidados').post(multer.array('img_cuidados'),cuidadosController.guardarCuidados);

enrutadorCcuidados.route('/cuidados').get(validarToken,cuidadosController.listarCuidados);

enrutadorCcuidados.route('/cuidados-imagenes/:id_cuidados').get(cuidadosController.listarImagenesCuidados);

enrutadorCcuidados.route('/agregar-imagenes-cuidados/:id_cuidados').put(multer.array('img_cuidados'),cuidadosController.agregarImagenesCuidados);

enrutadorCcuidados.route('/detalles-imagen-cuidados/:id_img_cuidados/:public_id').delete(cuidadosController.eliminarImagenesCuidados);

enrutadorCcuidados.route('/cuidados/:id_cuidados').delete(cuidadosController.eliminarCuidados);

enrutadorCcuidados.route('/cuidados/:id_cuidados').put(cuidadosController.actualizarCuidados);

enrutadorCcuidados.route('/cuidados-portada/:id_img_cuidados/:id_cuidados').get(cuidadosController.establecerPortada);


export default enrutadorCcuidados ;