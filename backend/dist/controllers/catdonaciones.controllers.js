"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
class CatdonacionesController {
    listarCatdonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let catdonaciones = yield conex.query('select * from categoria_donaciones');
            return res.json(catdonaciones);
        });
    }
    crearCatdonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let catdonaciones = req.body;
            const conex = yield database_1.conexion();
            yield conex.query('insert into categoria_donaciones set ?', [catdonaciones]);
            return res.json('Categoria Agregada');
        });
    }
    eliminarCatdonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_categoria_donaciones = req.params.id;
            try {
                yield conex.query('delete from categoria_donaciones where id_categoria_donaciones = ?', [id_categoria_donaciones]);
                return res.json("Categoria eliminada");
            }
            catch (error) {
                return res.json("No se puede eliminar una categoria que este siendo utilizada ");
            }
        });
    }
    actualizarCatdonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_categoria_donaciones = req.params.id;
            let nueva_catdon = req.body;
            yield conex.query('update categoria_donaciones set ? where id_categoria_donaciones = ?', [nueva_catdon, id_categoria_donaciones]);
            return res.json('Categoria Actualizada');
        });
    }
    obtenerCatdonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_categoria_donaciones = req.params.id;
            let unaCatdon = yield conex.query("select * from categoria_donaciones where id_categoria_donaciones =?", [id_categoria_donaciones]);
            return res.json(unaCatdon[0]);
        });
    }
}
exports.CatdonacionesController = CatdonacionesController;
