import { conexion } from "../database";
import { Request, Response } from "express";
import { IEvento } from "../models/evento";

cloudinary.v2.config({
    claud_name:'dj7l5ojza',
    api_key:'566266184157444',
    api_secret:'Y3au0dyhsbHHgKNPK2pg67Vb_h8'

});

export class EventoController
{
    public async guardarEvento(req:Request, res:Response)
    {
       const files:any = req.files;
     
       const ti = req.body.titulo; 
       const des = req.body.descripcion; 
       const fe = req.body.fecha_hora; 
       const or = req.body.organizadora; 
       const re = req.body.responsable; 
       const cat = req.body.categoria; 
       const es = req.body.estado;
       const pre = req.body.precio;
       const esta = req.body.estado_home;
       
       const db = await conexion();
       const unEvento = {    
           titulo:ti,
           descripcion:des,
           fecha_hora:fe,
           organizadora:or,
           responsable:re,
           categoria:cat,
           estado:es,
           precio:pre,
           estado_home:esta
       }
       const resultado = await db.query ('insert into eventos set?',[unEvento]);

       for (let i=0; i<files.length; i++){
           const imagen_evento={
               id_evento:resultado.insertId,
               imagen_url:files[i].path,
           }
          await db.query('insert into img_evento set ?',[imagen_evento])
       }
       res.json('se inserto exitosamente');
    }
}