import { conexion } from "../database";
import { Request, Response } from "express";
import { IEvento } from "../models/evento";
import fs from "fs-extra";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name:'dj7l5ojza',
    api_key:'566266184157444',
    api_secret:'Y3au0dyhsbHHgKNPK2pg67Vb_h8'

});

export class EventoController
{

    public async establecerPortada(req:Request, res:Response)
    {
        let id_img_evento = req.params.id_img_evento;

        let id_evento =req.params.id_evento;

        const db = await conexion();

        //primero ponemos todas las imagenes en portada 0(cero)
        const portadasEnEstadoCero={
            portada:0,
        }
        await db.query('update img_evento set ? where id_evento = ? ',[portadasEnEstadoCero,id_evento]);

        //establecer como portada una imagen
        const datosImagenesEvento={
            portada:1,
        }
        await db.query('update img_evento set ? where id_img_evento = ?',[datosImagenesEvento,id_img_evento]);

        //guardo la imagen que se eligio como portada en la tabla evento
        const unaFila = await db.query('select * from img_evento where id_img_evento = ?',[id_img_evento]);

        let datosEvento = {
            imagen_portada:unaFila[0].imagen
        }

        //ahora guardamos (editamos) solo su url de la imagen en la tabla eventos
        await db.query('update eventos set ? where id_evento = ?',[datosEvento,id_evento]);

        res.json('Se establecio portada');
    }

    public async actualizarEvento(req:Request, res:Response)
    {
        if(!req.files)
        {
            let unEvento = req.body;
            
            const updateEvento ={
                titulo:req.body.titulo,
                descripcion:req.body.descripcion, 
                fecha_hora:req.body.fecha_hora,
                organizadora:req.body.organizadora,
                responsable:req.body.responsable,
                categoria:req.body.categoria,
                precio:req.body.precio,
                estado_home:req.body.estado_home,
            }
            const db = await conexion();

            await db.query('update eventos set ? where id_evento =?',[updateEvento, req.body.id_evento]);

            res.json('Se actualizo exitosamente');
        }

    }

    public async listarEvento(req:Request, res:Response)
    {
        const db = await conexion();

        let eventos = await db.query('select *,date_format(fecha_hora,"%d/%m/%Y %H:%i:%s") as fecha_hora,(select descripcion from categoria_eventos where id_categoria_eventos = e.categoria) as categoria  from eventos e');
        
        res.json(eventos);
    }


    public async guardarEvento(req:Request, res:Response)
    {
       const files:any = req.files;
     
       const ti = req.body.titulo; 
       const des = req.body.descripcion; 
       const fe = req.body.fecha_hora; 
       const or = req.body.organizadora; 
       const re = req.body.responsable; 
       const cat = req.body.categoria; 
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
           precio:pre,
           estado_home:esta
       }
       const resultado = await db.query ('insert into eventos set? ',[unEvento]);

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
         
        }
        res.json('se inserto exitosamente');
    }

    public async eliminarEvento(req:Request, res:Response)
    {
        const db = await conexion();

        let id_evento = req.params.id_evento;

        await db.query('delete from eventos where id_evento = ?',[id_evento]);

        let lista_imagenes_evento = await db.query('select * from img_evento where id_evento = ?',[id_evento]);

        for (let index = 0; index < lista_imagenes_evento.length; index++) {
            await cloudinary.v2.uploader.destroy(lista_imagenes_evento[index].public_id);        
        }

        await db.query('delete from img_evento where id_evento =?',[id_evento]);
        
        res.json('Se elimino completamente el evento');
          
    }

    public async listarImagenesEvento(req:Request, res:Response)
    {
        let id_evento = req.params.id_evento;

        const db = await conexion();

        let lista_imagenes_evento = await db.query('select * from img_evento where id_evento = ?',[id_evento])
        
        res.json(lista_imagenes_evento);
    }

    public async agregarImagenesEvento(req:Request, res:Response)
    {
        const archivos:any = req.files;

        let id_evento = req.params.id_evento;

        const db = await conexion();

        for (let index = 0; index < archivos.length; index++) {
        
            const resultado_cloud = await cloudinary.v2.uploader.upload(archivos[index].path);

            const imagen_evento = {
                id_evento:id_evento,
                imagen:resultado_cloud.url,
                public_id:resultado_cloud.public_id
            }
            await db.query('insert into img_evento set ?',[imagen_evento]);

            await fs.unlink(archivos[index].path);
        }
        
        res.json('Se agregaron las imagenes de manera exitosa')
    }

    public async eliminarImagenesEvento(req:Request, res:Response)
    {
        //conectarme a la base de datos
        const db = await conexion();
        
        let id_img_evento = req.params.id_img_evento;
        
        let public_id =req.params.public_id;

        await db.query('delete from img_evento where id_img_evento = ?',[id_img_evento]);

        await cloudinary.v2.uploader.destroy(public_id);
 
        res.json('Se elimino exitosamente');
    }
}
