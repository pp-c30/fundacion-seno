import { Router } from "express";
import { EventoController } from "../controllers/evento.controllers";

const enrutadorEvento = Router();

let eventoController = new EventoController();


enrutadorEvento.route('/eventos').get(eventoController.listarEvento);

enrutadorEvento.route('/eventos').post(eventoController.crearEvento);

enrutadorEvento.route('/eventos/:id').delete(eventoController.eliminarEvento);

enrutadorEvento.route('/eventos/:id').put(eventoController.actualizarEvento);

enrutadorEvento.route('/eventos/:id').get(eventoController.obtenerEvento);
export default enrutadorEvento;