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
class ProvinciaController {
    listarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let provincia = yield conex.query('select * from provincia');
            return res.json(provincia);
        });
    }
    crearProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let provincia = req.body;
            const conex = yield database_1.conexion();
            yield conex.query('insert into provincia set ?', [provincia]);
            return res.json("Porvincia Creada");
        });
    }
    eliminarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_provincia = req.params.id;
            try {
                yield conex.query('delete from provincia where id_provincia = ?', [id_provincia]);
                return res.json("Provincia eliminada");
            }
            catch (error) {
                return res.json("no se puede eliminar una provincia que este siendo utilisada por una localidad");
            }
        });
    }
    actualizarProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_provincia = req.params.id;
            let nueva_prov = req.body;
            yield conex.query('update provincia set ? where id_provincia = ?', [nueva_prov, id_provincia]);
            return res.json("Provincia Actualizada");
        });
    }
    obtenerProvincia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conex = yield database_1.conexion();
            let id_provincia = req.params.id;
            let una_prov = yield conex.query('select * from provincia where id_provincia = ?', [id_provincia]);
            return res.json([una_prov]);
        });
    }
}
exports.ProvinciaController = ProvinciaController;
