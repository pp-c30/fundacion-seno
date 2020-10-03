import { Router } from "express";

import { AcompaniamientoController } from "../controllers/acompaniamiento.controllers";

const enrutadorAcomp = Router();

let acompController = new AcompaniamientoController();

enrutadorAcomp.route('/acompaniamiento').get(acompController.listarAcomp);

enrutadorAcomp.route('/acompaniamiento').post(acompController.crearAcomp);

enrutadorAcomp.route('/acompaniamiento/:id').delete(acompController.eliminarAcomp);

enrutadorAcomp.route('/acompaniamiento/:id').put(acompController.actualizarAcomp);

enrutadorAcomp.route('/acompaniamiento/:id').get(acompController.obtenerAcomp);

export default enrutadorAcomp;