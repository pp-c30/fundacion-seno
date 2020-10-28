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
class AcompaniamientoController {
    listarAcomp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let acomp = yield conex.query('select * from tipo_acompaniamiento');
            return res.json(acomp);
        });
    }
    crearAcomp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let acomp = req.body;
            const conex = yield database_1.conexion();
            yield conex.query('insert into tipo_acompaniamiento set ?', [acomp]);
            return res.json('Elemento agregado con exito');
        });
    }
    eliminarAcomp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_acomp = req.params.id;
            yield conex.query('delete from tipo_acompaniamiento where id_acomp = ?', id_acomp);
            return res.json('Elemento eliminado con exito');
        });
    }
    actualizarAcomp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_acomp = req.params.id;
            let nuevo_ac = req.body;
            yield conex.query('update tipo_acompaniamiento set ? where id_acomp = ?', [nuevo_ac, id_acomp]);
            return res.json('Elemento actualizado con exito');
        });
    }
    obtenerAcomp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_acomp = req.params.id;
            let nuevo_ac = yield conex.query("select * from tipo_acompaniamiento where id_acomp =?", [id_acomp]);
            return res.json(nuevo_ac[0]);
        });
    }
}
exports.AcompaniamientoController = AcompaniamientoController;
