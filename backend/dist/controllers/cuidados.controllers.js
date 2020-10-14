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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../database");
const fs_extra_1 = __importDefault(require("fs-extra"));
const cloudinary_1 = __importDefault(require("cloudinary"));
cloudinary_1.default.v2.config({
    cloud_name: 'dj7l5ojza',
    api_key: '566266184157444',
    api_secret: 'Y3au0dyhsbHHgKNPK2pg67Vb_h8'
});
class CuidadosController {
    listarCuidado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const conec = yield database_1.conexion();
            let cuidados = yield conec.query('select * from cuidados');
            return res.json(cuidados);
        });
    }
    guardarCuidado(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            const des = req.body.descripcion;
            const db = yield database_1.conexion();
            const unCuidado = {
                descripcion: des
            };
            const resultado = yield db.query('insert into cuidados set?', [unCuidado]);
            for (let i = 0; i < files.length; i++) {
                //especifica al path(la ruta de la imagen en la carpeta upload)
                const resultadode_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                const img_cuidados = {
                    id_cuidados: resultado.insertId,
                    imagen: resultadode_cloudinary.url,
                    public_id: resultadode_cloudinary.public_id
                };
                yield db.query('insert into img_cuidados set ?', [img_cuidados]);
                yield fs_extra_1.default.unlink(files[i].path);
            }
            res.json('se inserto exitosamente');
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
