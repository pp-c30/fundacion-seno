import { Router } from "express";
import { GaleriaController } from "../controllers/galeria.controllers";

const enrutadorGaleria = Router();

let galeriaController = new GaleriaController();


enrutadorGaleria.route('/galeria').get(galeriaController.listarGaleria);

enrutadorGaleria.route('/galeria').post(galeriaController.crearGaleria);

enrutadorGaleria.route('/galeria/:id').delete(galeriaController.eliminarGaleria);

enrutadorGaleria.route('/galeria/:id').put(galeriaController.actualizarGaleria);

enrutadorGaleria.route('/galeria/:id').get(galeriaController.obtenerGaleria);
export default enrutadorGaleria;


