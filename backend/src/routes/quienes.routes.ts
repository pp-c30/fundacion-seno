import { Router } from "express";
import { QuienesController } from "../controllers/quienes.controllers";
import { validarToken } from "../libs/verificarToken";
const enrutadorQuienes_somos = Router();

let quienesController = new QuienesController();

enrutadorQuienes_somos.route('/quienes').get(validarToken,quienesController.listarQuienes);

enrutadorQuienes_somos.route('/quienes').post(quienesController.crearQuienes);

enrutadorQuienes_somos.route('/quienes/:id').delete(quienesController.eliminarQuienes);

enrutadorQuienes_somos.route('/quienes/:id').put(quienesController.actualizarQuienes);

enrutadorQuienes_somos.route('/quienes/:id').get(quienesController.obtenerQuienes);


export default enrutadorQuienes_somos;
