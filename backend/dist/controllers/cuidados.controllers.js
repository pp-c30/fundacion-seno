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
    establecerPortada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_img_cuidados = req.params.id_img_cuidados;
            let id_cuidados = req.params.id_cuidados;
            const db = yield database_1.conexion();
            //primero ponemos todas las imagenes en portada 0(cero)
            const portadasEnEstadoCero = {
                portada: 0,
            };
            yield db.query('update img_cuidados set ? where id_cuidados = ? ', [portadasEnEstadoCero, id_cuidados]);
            //establecer como portada una imagen
            const datosImagenesCuidados = {
                portada: 1,
            };
            yield db.query('update img_cuidados set ? where id_img_cuidados = ?', [datosImagenesCuidados, id_img_cuidados]);
            //guardo la imagen que se eligio como portada en la tabla cuidados
            const unaFila = yield db.query('select * from img_cuidados where id_img_cuidados = ?', [id_img_cuidados]);
            let datosCuidados = {
                imagen_portada: unaFila[0].imagen
            };
            //ahora guardamos (editamos) solo su url de la imagen en la tabla cuidados
            yield db.query('update cuidados set ? where id_cuidados = ?', [datosCuidados, id_cuidados]);
            res.json('Se establecio portada');
        });
    }
    actualizarCuidados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.files) {
                let unCuidado = req.body;
                const updateCuidado = {
                    descripcion: req.body.descripcion,
                    titulo: req.body.titulo
                };
                const db = yield database_1.conexion();
                yield db.query('update cuidados set ? where id_cuidados =?', [updateCuidado, req.body.id_cuidados]);
                res.json('Se actualizo exitosamente');
            }
        });
    }
    listarCuidados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let cuidados = yield db.query('select * from cuidados');
            res.json(cuidados);
        });
    }
    guardarCuidados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            const des = req.body.descripcion;
            const ti = req.body.titulo;
            const db = yield database_1.conexion();
            const unCuidado = {
                descripcion: des,
                titulo: ti
            };
            const resultado = yield db.query('insert into cuidados set? ', [unCuidado]);
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
    listarImagenesCuidados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_cuidados = req.params.id_cuidados;
            const db = yield database_1.conexion();
            let lista_imagenes_cuidado = yield db.query('select * from img_cuidados where id_cuidados = ?', [id_cuidados]);
            res.json(lista_imagenes_cuidado);
        });
    }
    agregarImagenesCuidados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const archivos = req.files;
            let id_cuidados = req.params.id_cuidados;
            const db = yield database_1.conexion();
            for (let index = 0; index < archivos.length; index++) {
                const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(archivos[index].path);
                const imagen_cuidado = {
                    id_cuidados: id_cuidados,
                    imagen: resultado_cloud.url,
                    public_id: resultado_cloud.public_id
                };
                yield db.query('insert into img_cuidados set ?', [imagen_cuidado]);
                yield fs_extra_1.default.unlink(archivos[index].path);
            }
            res.json('Se agregaron las imagenes de manera exitosa');
        });
    }
    eliminarImagenesCuidados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conectarme a la base de datos
            const db = yield database_1.conexion();
            let id_img_cuidados = req.params.id_img_cuidados;
            let public_id = req.params.public_id;
            yield db.query('delete from img_cuidados where id_img_cuidados = ?', [id_img_cuidados]);
            yield cloudinary_1.default.v2.uploader.destroy(public_id);
            res.json('Se elimino exitosamente');
        });
    }
    eliminarCuidados(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id_cuidados = req.params.id_cuidados;
            yield db.query('delete from cuidados where id_cuidados = ?', [id_cuidados]);
            let lista_imagenes_cuidado = yield db.query('select * from img_cuidados where id_cuidados = ?', [id_cuidados]);
            for (let index = 0; index < lista_imagenes_cuidado.length; index++) {
                yield cloudinary_1.default.v2.uploader.destroy(lista_imagenes_cuidado[index].public_id);
            }
            yield db.query('delete from img_cuidados where id_cuidados =?', [id_cuidados]);
            res.json('Se elimino completamente el cuidado');
        });
    }
}
exports.CuidadosController = CuidadosController;
