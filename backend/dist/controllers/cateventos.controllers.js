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
class CateventosController {
    listarCateventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let cateventos = yield conex.query('select * from categoria_eventos');
            return res.json(cateventos);
        });
    }
    crearCateventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cateventos = req.body;
            const conex = yield database_1.conexion();
            yield conex.query('insert into categoria_eventos set ?', [cateventos]);
            return res.json('Categoria agregada');
        });
    }
    eliminarCateventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_categoria_eventos = req.params.id;
            yield conex.query('delete from categoria_eventos where id_categoria_eventos = ?', id_categoria_eventos);
            return res.json('Categoria eliminada');
        });
    }
    actualizarCateventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_categoria_eventos = req.params.id;
            let nueva_Cateven = req.body;
            yield conex.query('update categoria_eventos set ? where id_categoria_eventos', [id_categoria_eventos, nueva_Cateven]);
            return res.json('Categoria actualizada');
        });
    }
    obtenerCateventos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_categoria_eventos = req.params.id;
            let unaCateven = yield conex.query("select * from categoria_eventos where id_categoria_eventos =?", [id_categoria_eventos]);
            return res.json(unaCateven[0]);
        });
    }
}
exports.CateventosController = CateventosController;
