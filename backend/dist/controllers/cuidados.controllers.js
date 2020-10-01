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
class CuidadosController {
    listarCuidado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let cuidados = yield conec.query('select * from cuidados');
            return res.json(cuidados);
        });
    }
    crearCuidado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cuidados = req.body;
            const conec = yield database_1.conexion();
            yield conec.query("insert into cuidados set ?", [cuidados]);
            return res.json('El elemento fue agregado');
        });
    }
    eliminarCuidado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_cuidados = req.params.id;
            yield conec.query("delete from cuidados where id_cuidados = ?", id_cuidados);
            return res.json('El evento ha sido Eliminado');
        });
    }
    actualizarCuidado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_cuidados = req.params.id;
            let nueva_data = req.body;
            yield conec.query("update cuidados set ? where id_cuidados = ?", [nueva_data, id_cuidados]);
            return res.json('El elemento ha sido actualizado');
        });
    }
    obtenerCuidado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_cuidados = req.params.id;
            let cuida = yield conec.query("select * from cuidados where id_cuidados =?", [id_cuidados]);
            return res.json(cuida[0]);
        });
    }
}
exports.CuidadosController = CuidadosController;
