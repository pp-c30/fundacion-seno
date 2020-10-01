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
class CatgaleriaController {
    listarCatgaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let catgaleria = yield conec.query('select * from categoria_galeria');
            return res.json(catgaleria);
        });
    }
    crearCatgaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let catgaleria = req.body;
            const conec = yield database_1.conexion();
            yield conec.query("insert into categoria_galeria set ?", [catgaleria]);
            return res.json('El elemento fue agregado');
        });
    }
    eliminarCatgaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_categoria = req.params.id;
            yield conec.query("delete from categoria_galeria where id_categoria = ?", id_categoria);
            return res.json('El evento ha sido Eliminado');
        });
    }
    actualizarCatgaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_categoria = req.params.id;
            let nueva_data = req.body;
            yield conec.query("update categoria_galeria set ? where id_categoria = ?", [nueva_data, id_categoria]);
            return res.json('El elemento ha sido actualizado');
        });
    }
    obtenerCatgaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_categoria = req.params.id;
            let catga = yield conec.query("select * from categoria_galeria where id_categoria =?", [id_categoria]);
            return res.json(catga[0]);
        });
    }
}
exports.CatgaleriaController = CatgaleriaController;
