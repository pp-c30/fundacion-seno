import { conexion } from "../database";
import { Request, Response } from "express";
import { IEvento } from "../models/evento";
import fs from "fs-extra";
import cloudinary from "cloudinary";


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
            //especifica al path(la ruta de la imagen en la carpeta upload)
           const resultadode_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);

           const img_evento={
               id_evento:resultado.insertId,
               imagen:resultadode_cloudinary.url,
               public_id:resultadode_cloudinary.public_id
           }

          await db.query('insert into img_evento set ?',[img_evento]);
           
          await fs.unlink(files[i].path); 
         
          res.json('se inserto exitosamente');
        }
        

       
    }
}
