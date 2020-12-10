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
class EventoController {
    establecerPortada(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_img_evento = req.params.id_img_evento;
            let id_evento = req.params.id_evento;
            const db = yield database_1.conexion();
            //primero ponemos todas las imagenes en portada 0(cero)
            const portadasEnEstadoCero = {
                portada: 0,
            };
            yield db.query('update img_evento set ? where id_evento = ? ', [portadasEnEstadoCero, id_evento]);
            //establecer como portada una imagen
            const datosImagenesEvento = {
                portada: 1,
            };
            yield db.query('update img_evento set ? where id_img_evento = ?', [datosImagenesEvento, id_img_evento]);
            //guardo la imagen que se eligio como portada en la tabla evento
            const unaFila = yield db.query('select * from img_evento where id_img_evento = ?', [id_img_evento]);
            let datosEvento = {
                imagen_portada: unaFila[0].imagen
            };
            //ahora guardamos (editamos) solo su url de la imagen en la tabla eventos
            yield db.query('update eventos set ? where id_evento = ?', [datosEvento, id_evento]);
            res.json('Se establecio portada');
        });
    }
    actualizarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!req.files) {
                let unEvento = req.body;
                const updateEvento = {
                    titulo: req.body.titulo,
                    descripcion: req.body.descripcion,
                    fecha_hora: req.body.fecha_hora,
                    organizadora: req.body.organizadora,
                    responsable: req.body.responsable,
                    categoria: req.body.categoria,
                    precio: req.body.precio,
                    estado_home: req.body.estado_home,
                };
                const db = yield database_1.conexion();
                yield db.query('update eventos set ? where id_evento =?', [updateEvento, req.body.id_evento]);
                res.json('Se actualizo exitosamente');
            }
        });
    }
    listarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let eventos = yield db.query('select *,date_format(fecha_hora,"%d/%m/%Y %H:%i:%s") as fecha_hora,(select descripcion from categoria_eventos where id_categoria_eventos = e.categoria) as categoria  from eventos e');
            res.json(eventos);
        });
    }
    guardarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            const ti = req.body.titulo;
            const des = req.body.descripcion;
            const fe = req.body.fecha_hora;
            const or = req.body.organizadora;
            const re = req.body.responsable;
            const cat = req.body.categoria;
            const pre = req.body.precio;
            const esta = req.body.estado_home;
            const db = yield database_1.conexion();
            const unEvento = {
                titulo: ti,
                descripcion: des,
                fecha_hora: fe,
                organizadora: or,
                responsable: re,
                categoria: cat,
                precio: pre,
                estado_home: esta
            };
            const resultado = yield db.query('insert into eventos set? ', [unEvento]);
            for (let i = 0; i < files.length; i++) {
                //especifica al path(la ruta de la imagen en la carpeta upload)
                const resultadode_cloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                const img_evento = {
                    id_evento: resultado.insertId,
                    imagen: resultadode_cloudinary.url,
                    public_id: resultadode_cloudinary.public_id
                };
                yield db.query('insert into img_evento set ?', [img_evento]);
                yield fs_extra_1.default.unlink(files[i].path);
            }
            res.json('se inserto exitosamente');
        });
    }
    eliminarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield database_1.conexion();
            let id_evento = req.params.id_evento;
            yield db.query('delete from eventos where id_evento = ?', [id_evento]);
            let lista_imagenes_evento = yield db.query('select * from img_evento where id_evento = ?', [id_evento]);
            for (let index = 0; index < lista_imagenes_evento.length; index++) {
                yield cloudinary_1.default.v2.uploader.destroy(lista_imagenes_evento[index].public_id);
            }
            yield db.query('delete from img_evento where id_evento =?', [id_evento]);
            res.json('Se elimino completamente el evento');
        });
    }
    listarImagenesEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let id_evento = req.params.id_evento;
            const db = yield database_1.conexion();
            let lista_imagenes_evento = yield db.query('select * from img_evento where id_evento = ?', [id_evento]);
            res.json(lista_imagenes_evento);
        });
    }
    agregarImagenesEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const archivos = req.files;
            let id_evento = req.params.id_evento;
            const db = yield database_1.conexion();
            for (let index = 0; index < archivos.length; index++) {
                const resultado_cloud = yield cloudinary_1.default.v2.uploader.upload(archivos[index].path);
                const imagen_evento = {
                    id_evento: id_evento,
                    imagen: resultado_cloud.url,
                    public_id: resultado_cloud.public_id
                };
                yield db.query('insert into img_evento set ?', [imagen_evento]);
                yield fs_extra_1.default.unlink(archivos[index].path);
            }
            res.json('Se agregaron las imagenes de manera exitosa');
        });
    }
    eliminarImagenesEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //conectarme a la base de datos
            const db = yield database_1.conexion();
            let id_img_evento = req.params.id_img_evento;
            let public_id = req.params.public_id;
            yield db.query('delete from img_evento where id_img_evento = ?', [id_img_evento]);
            yield cloudinary_1.default.v2.uploader.destroy(public_id);
            res.json('Se elimino exitosamente');
        });
    }
}
exports.EventoController = EventoController;
