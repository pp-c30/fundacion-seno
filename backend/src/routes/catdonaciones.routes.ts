import { Router } from "express";

import { CatdonacionesController } from "../controllers/catdonaciones.controllers";

const enrutadorCatdon = Router();

let catdonacionesController = new CatdonacionesController();

enrutadorCatdon.route('/categoria_donaciones').get(catdonacionesController.listarCatdonaciones);

enrutadorCatdon.route('/categoria_donaciones').post(catdonacionesController.crearCatdonaciones);

enrutadorCatdon.route('/categoria_donaciones/:id').delete(catdonacionesController.eliminarCatdonaciones);

enrutadorCatdon.route('/categoria_donaciones/:id').put(catdonacionesController.actualizarCatdonaciones);

enrutadorCatdon.route('/categoria_donaciones/:id').get(catdonacionesController.obtenerCatdonaciones);

export default enrutadorCatdon;