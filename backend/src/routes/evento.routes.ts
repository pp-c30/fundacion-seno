import { Router } from "express";
import { EventoController } from "../controllers/evento.controllers";
import multer from "../libs/multer";

const enrutadorEvento = Router();

let eventoController = new EventoController();

enrutadorEvento.route('/eventos').post(multer.array('img_evento'),eventoController.guardarEvento);

export default enrutadorEvento;