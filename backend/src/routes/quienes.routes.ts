import { Router } from "express";
import { QuienesController } from "../controllers/quienes.controllers";

const enrutadorQuienes_somos = Router();

let quienesController = new QuienesController();

enrutadorQuienes_somos.route('/quienes_somos').get(quienesController.listarQuienes);

enrutadorQuienes_somos.route('/quienes_somos').post(quienesController.crearQuienes);

enrutadorQuienes_somos.route('/quienes_somos/:id').delete(quienesController.eliminarQuienes);

enrutadorQuienes_somos.route('/quienes_somos/:id').put(quienesController.actualizarQuienes);

enrutadorQuienes_somos.route('/quienes_somos/:id').get(quienesController.obtenerQuienes);

export default enrutadorQuienes_somos;
