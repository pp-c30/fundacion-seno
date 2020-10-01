import { Router } from "express";

import { CateventosController } from "../controllers/cateventos.controllers";

const enrutadorCateven = Router();

let cateventosController = new CateventosController();

enrutadorCateven.route('/categoria_eventos').get(cateventosController.listarCateventos);

enrutadorCateven.route('/categoria_eventos').post(cateventosController.crearCateventos);

enrutadorCateven.route('/categoria_eventos/:id').delete(cateventosController.eliminarCateventos);

enrutadorCateven.route('/categoria_eventos/:id').put(cateventosController.actualizarCateventos);

enrutadorCateven.route('/categoria_eventos/:id').get(cateventosController.obtenerCateventos);

export default enrutadorCateven;