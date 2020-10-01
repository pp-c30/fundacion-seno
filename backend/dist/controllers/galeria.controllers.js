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
class GaleriaController {
    listarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let galeria = yield conex.query('select * from galeria');
            return res.json(galeria);
        });
    }
    crearGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let galeria = req.body;
            const conex = yield database_1.conexion();
            yield conex.query('insert into galeria set ?', [galeria]);
            return res.json('El elemento se ha insertado exitosamente');
        });
    }
    eliminarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_galeria = req.params.id;
            let conex = yield database_1.conexion();
            yield conex.query('delete from galeria where id_galeria = ?', id_galeria);
            return res.json('El elemento se ha eliminado exitosamente');
        });
    }
    actualizarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_galeria = req.params.id;
            let gale = req.body;
            let conex = yield database_1.conexion();
            yield conex.query('update galeria set ? where id_galeria = ? ', [gale, id_galeria]);
            return res.json('El elemento se actualizo exitosamente');
        });
    }
    obtenerGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_galeria = req.params.id;
            let conex = yield database_1.conexion();
            let gal = yield conex.query('select * from galeria where id_galeria = ?', [id_galeria]);
            return res.json(gal[0]);
        });
    }
}
exports.GaleriaController = GaleriaController;
