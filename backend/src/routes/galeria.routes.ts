import { Router } from "express";
import { GaleriaController } from "../controllers/galeria.controllers";
import multer from "../libs/multer";

const enrutadorGaleria = Router();

let galeriaController = new GaleriaController();

enrutadorGaleria.route('/galeria').post(multer.array('img_galeria'),galeriaController.guardarGaleria);

enrutadorGaleria.route('/galeria').get(galeriaController.listarGaleria);

enrutadorGaleria.route('/galeria/:id').delete(galeriaController.eliminarGaleria);

enrutadorGaleria.route('/galeria/:id').put(galeriaController.actualizarGaleria);

enrutadorGaleria.route('/galeria/:id').get(galeriaController.obtenerGaleria);
export default enrutadorGaleria;


