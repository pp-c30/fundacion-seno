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
    claud_name: 'dj7l5ojza',
    api_key: '566266184157444',
    api_secret: 'Y3au0dyhsbHHgKNPK2pg67Vb_h8'
});
class EventoController {
    guardarEvento(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = req.files;
            const ti = req.body.titulo;
            const des = req.body.descripcion;
            const fe = req.body.fecha_hora;
            const or = req.body.organizadora;
            const re = req.body.responsable;
            const cat = req.body.categoria;
            const es = req.body.estado;
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
                estado: es,
                precio: pre,
                estado_home: esta
            };
            const resultado = yield db.query('insert into eventos set?', [unEvento]);
            for (let i = 0; i < files.length; i++) {
                //especifica al path(la ruta de la imagen en la carpeta upload)
                const resultadodecloudinary = yield cloudinary_1.default.v2.uploader.upload(files[i].path);
                const imagen_evento = {
                    id_evento: resultado.insertId,
                    imagen_url: resultadodecloudinary.url,
                    public_id: resultadodecloudinary.public_id,
                };
                yield db.query('insert into img_evento set ?', [imagen_evento]);
                fs_extra_1.default.unlink(files[i].path);
            }
            res.json('se inserto exitosamente');
        });
    }
}
exports.EventoController = EventoController;
