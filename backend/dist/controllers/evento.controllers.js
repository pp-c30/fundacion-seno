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
class EventoController {
    listarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let evento = yield conec.query('select * from evento');
            return res.json(evento);
        });
    }
    crearEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let evento = req.body;
            const conec = yield database_1.conexion();
            yield conec.query("insert into evento set ?", [evento]);
            return res.json('El elemento fue agregado');
        });
    }
    eliminarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_evento = req.params.id;
            yield conec.query("delete from eventos where id_evento = ?", id_evento);
            return res.json('El evento ha sido Eliminado');
        });
    }
    actualizarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_evento = req.params.id;
            let nueva_data = req.body;
            yield conec.query("update eventos set ? where id_evento = ?", [nueva_data, id_evento]);
            return res.json('El elemento ha sido actualizado');
        });
    }
    obtenerEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let id_evento = req.params.id;
            let unEvento = yield conec.query("select * from eventos where id_evento =?", [id_evento]);
            return res.json(unEvento[0]);
        });
    }
}
exports.EventoController = EventoController;
