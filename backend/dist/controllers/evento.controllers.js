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
cloudinary.v2.config({
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
                const imagen_evento = {
                    id_evento: resultado.insertId,
                    imagen_url: files[i].path,
                };
                yield db.query('insert into img_evento set ?', [imagen_evento]);
            }
            res.json('se inserto exitosamente');
        });
    }
}
exports.EventoController = EventoController;
