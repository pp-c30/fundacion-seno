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
class QuienesController {
    listarQuienes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let quienes = yield conex.query('select * from quienes_somos');
            return res.json(quienes);
        });
    }
    crearQuienes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let quienes = req.body;
            const conex = yield database_1.conexion();
            yield conex.query('insert into quienes_somos set ?', [quienes]);
            return res.json('Elemento  Agregado con exito');
        });
    }
    eliminarQuienes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_qs = req.params.id;
            yield conex.query('delete from quienes_somos where id_qs = ?', id_qs);
            return res.json('Elemento Eliminado con exito');
        });
    }
    actualizarQuienes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_qs = req.params.id;
            let nueva_e = req.body;
            yield conex.query('update quienes_somos set ? where id_qs = ?', [nueva_e, id_qs]);
            return res.json('Elemento Actualizado con exito');
        });
    }
    obtenerQuienes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_qs = req.params.id;
            let nueva_e = yield conex.query("select * from quienes_somos where id_qs =?", [id_qs]);
            return res.json(nueva_e[0]);
        });
    }
}
exports.QuienesController = QuienesController;
