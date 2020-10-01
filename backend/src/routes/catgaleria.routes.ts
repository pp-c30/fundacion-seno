import { Router } from "express";
import { CatgaleriaController } from "../controllers/catgaleria.controllers";

const enrutadorCatgaleria = Router();

let catgaleriaController = new CatgaleriaController();


enrutadorCatgaleria.route('/categoria_galeria').get(catgaleriaController.listarCatgaleria);

enrutadorCatgaleria.route('/categoria_galeria').post(catgaleriaController.crearCatgaleria);

enrutadorCatgaleria.route('/categoria_galeria/:id').delete(catgaleriaController.eliminarCatgaleria);

enrutadorCatgaleria.route('/categoria_galeria/:id').put(catgaleriaController.actualizarCatgaleria);

enrutadorCatgaleria.route('/categoria_galeria/:id').get(catgaleriaController.obtenerCatgaleria);
export default enrutadorCatgaleria ;