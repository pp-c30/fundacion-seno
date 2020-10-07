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
class DonacionesController {
    listarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let donaciones = yield conex.query('select * from donaciones');
            return res.json(donaciones);
        });
    }
    crearDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let donaciones = req.body;
            const conex = yield database_1.conexion();
            yield conex.query('insert into donaciones set ?', [donaciones]);
            return res.json("Donacion Creada");
        });
    }
    eliminarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_donaciones = req.params.id;
            yield conex.query('delete from donaciones where id_donaciones = ?', [id_donaciones]);
            return res.json("Donacion Eliminada");
        });
    }
    actualizarDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_donaciones = req.params.id;
            let nueva_don = req.body;
            yield conex.query('update donaciones set ? where id_donaciones = ?', [nueva_don, id_donaciones]);
            return res.json("Donacion actualizada");
        });
    }
    obtenerDonaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_donaciones = req.params.id;
            let una_donacion = yield conex.query('select * from donaciones where id_donaciones = ?', [id_donaciones]);
            return res.json([una_donacion]);
        });
    }
}
exports.DonacionesController = DonacionesController;
