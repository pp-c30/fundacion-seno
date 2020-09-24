import { Router } from "express";
import { EventoController } from "../controllers/evento.controllers";

const enrutadorEvento = Router();

let eventoController = new EventoController();


enrutadorEvento.route('/evento').get(eventoController.listarEvento);

enrutadorEvento.route('/evento').post(eventoController.crearEvento);

enrutadorEvento.route('/evento/:id').delete(eventoController.eliminarEvento);

enrutadorEvento.route('/evento/:id').put(eventoController.actualizarEvento);

enrutadorEvento.route('/evento:id').get(eventoController.obtenerEvento);
export default enrutadorEvento;