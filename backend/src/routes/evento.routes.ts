import { Router } from "express";
import { EventoController } from "../controllers/evento.controllers";
import multer from "../libs/multer";
import { validarToken } from "../libs/verificarToken";
const enrutadorEvento = Router();

let eventoController = new EventoController();

enrutadorEvento.route('/eventos').post(multer.array('img_evento'),eventoController.guardarEvento);

enrutadorEvento.route('/eventos').get(validarToken,eventoController.listarEvento);

enrutadorEvento.route('/eventos-imagenes/:id_evento').get(eventoController.listarImagenesEvento);

enrutadorEvento.route('/agregar-imagenes-evento/:id_evento').put(multer.array('img_evento'),eventoController.agregarImagenesEvento);

enrutadorEvento.route('/detalles-imagen-evento/:id_img_evento/:public_id').delete(eventoController.eliminarImagenesEvento);

enrutadorEvento.route('/eventos/:id_evento').delete(eventoController.eliminarEvento);

enrutadorEvento.route('/eventos/:id_evento').put(eventoController.actualizarEvento);

enrutadorEvento.route('/evento-portada/:id_img_evento/:id_evento').get(eventoController.establecerPortada);

export default enrutadorEvento;