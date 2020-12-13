import { Router } from "express";
import { GaleriaController } from "../controllers/galeria.controllers";
import multer from "../libs/multer";
import { validarToken } from "../libs/verificarToken";
const enrutadorGaleria = Router();

let galeriaController = new GaleriaController();

enrutadorGaleria.route('/galeria').post(multer.array('img_galeria'),galeriaController.guardarGaleria);

enrutadorGaleria.route('/galeria').get(validarToken,galeriaController.listarGaleria);

enrutadorGaleria.route('/galeria-imagenes/:id_galeria').get(galeriaController.listarImagenesGaleria);

enrutadorGaleria.route('/agregar-imagenes-galeria/:id_galeria').put(multer.array('img_galeria'),galeriaController.agregarImagenesGaleria);

enrutadorGaleria.route('/detalles-imagen-galeria/:id_img_galeria/:public_id').delete(galeriaController.eliminarImagenGaleria);

enrutadorGaleria.route('/galeria/:id_galeria').delete(galeriaController.eliminarGaleria);

enrutadorGaleria.route('/galeria/:id_galeria').put(galeriaController.actualizarGaleria);

enrutadorGaleria.route('/galeria-portada/:id_img_galeria/:id_galeria').get(galeriaController.establecerPortada);

export default enrutadorGaleria;


