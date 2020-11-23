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
    cloud_name: 'depxqeimu',
    api_key: '319511783793755',
    api_secret: 'ct-xrgsM7GwILBH6HHpRATy2Kmc'
});
class GaleriaController {
    listarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let galeria = yield db.query('select * from galeria');
            return res.json(galeria);
        });
    }
    guardarGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            const des = req.body.descripcion;
            const fe = req.body.fecha;
            const loc = req.body.localidad;
            const cat = req.body.categoria;
            const tip = req.body.tipo;
            const esta = req.body.estado_home;
            const db = yield database_1.conexion();
            const unaGaleria = {
                descripcion: des,
                fecha: fe,
                localidad: loc,
                categoria: cat,
                tipo: tip,
                estado_home: esta
            };
            const resultado = yield db.query('insert into galeria set?', [unaGaleria]);
            for (let i = 0; i < files.length; i++) {
                //especifica al path(la ruta de la imagen en la carpeta upload)
                const resultadode_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                const img_galeria = {
                    id_galeria: resultado.insertId,
                    imagen: resultadode_cloudinary.url,
                    public_id: resultadode_cloudinary.public_id
                };
                yield db.query('insert into img_galeria set ?', [img_galeria]);
                yield fs_extra_1.default.unlink(files[i].path);
            }
            res.json('se inserto exitosamente');
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
            let id_galeria = req.params.id_galeria;
            const db = yield database_1.conexion();
            let lista_imagenes_galeria = yield db.query('select * from img_galeria where id_galeria = ?', [id_galeria]);
            res.json(lista_imagenes_galeria);
        });
    }
    agregarImagenesGaleria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const archivos = req.files;
            let id_galeria = req.params.id_galeria;
            const db = yield database_1.conexion();
            for (let index = 0; index < archivos.length; index++) {
                const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(archivos[index].path);
                const imagen_galeria = {
                    id_galeria: id_galeria,
                    imagen_url: resultado_cloud.url,
                    public_id: resultado_cloud.public_id
                };
                yield db.query('insert into img_galeria set ?', [imagen_galeria]);
                yield fs_extra_1.default.unlink(archivos[index].path);
            }
            res.json('Se agregaron las Imagenes');
        });
    }
}
exports.GaleriaController = GaleriaController;
