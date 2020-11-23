import { conexion } from "../database";
import { Request, Response } from "express";
import { ICuidados} from "../models/cuidados";
import fs from "fs-extra";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name:'dj7l5ojza',
    api_key:'566266184157444',
    api_secret:'Y3au0dyhsbHHgKNPK2pg67Vb_h8'

});
export class CuidadosController
{

    public async establecerPortada(req:Request, res:Response)
    {
        let id_img_cuidados = req.params.id_img_cuidados;

        let id_cuidados =req.params.id_cuidados;

        const db = await conexion();

        //primero ponemos todas las imagenes en portada 0(cero)
        const portadasEnEstadoCero={
            portada:0,
        }
        await db.query('update img_cuidados set ? where id_cuidados = ? ',[portadasEnEstadoCero,id_cuidados]);

        //establecer como portada una imagen
        const datosImagenesCuidados={
            portada:1,
        }
        await db.query('update img_cuidados set ? where id_img_cuidados = ?',[datosImagenesCuidados,id_img_cuidados]);

        //guardo la imagen que se eligio como portada en la tabla cuidados
        const unaFila = await db.query('select * from img_cuidados where id_img_cuidados = ?',[id_img_cuidados]);

        let datosCuidados = {
            imagen_portada:unaFila[0].imagen
        }

        //ahora guardamos (editamos) solo su url de la imagen en la tabla cuidados
        await db.query('update cuidados set ? where id_cuidados = ?',[datosCuidados,id_cuidados]);

        res.json('Se establecio portada');
    }

    public async actualizarCuidados(req:Request, res:Response)
    {
        if(!req.files)
        {
            let unCuidado = req.body;
            
            const updateCuidado ={
                descripcion:req.body.descripcion,
                titulo:req.body.titulo
            }
            const db = await conexion();

            await db.query('update cuidados set ? where id_cuidados =?',[updateCuidado, req.body.id_cuidados]);

            res.json('Se actualizo exitosamente');
        }

    }

    public async listarCuidados(req:Request, res:Response)
    {
        const db = await conexion();

        let cuidados = await db.query('select * from cuidados');
        
        res.json(cuidados);
    }


    public async guardarCuidados(req:Request, res:Response)
    {
       const files:any = req.files;
    
       const des = req.body.descripcion; 
       const ti = req.body.titulo; 

       const db = await conexion();
       const unCuidado = {    
           
           descripcion:des,
           titulo:ti
         
       }
       const resultado = await db.query ('insert into cuidados set? ',[unCuidado]);

       for (let i=0; i<files.length; i++){
            //especifica al path(la ruta de la imagen en la carpeta upload)
           const resultadode_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);

           const img_cuidados={
               id_cuidados:resultado.insertId,
               imagen:resultadode_cloudinary.url,
               public_id:resultadode_cloudinary.public_id
           }

          await db.query('insert into img_cuidados set ?',[img_cuidados]);
           
          await fs.unlink(files[i].path); 
         
        }
        res.json('se inserto exitosamente');
    }

    public async listarImagenesCuidados(req:Request, res:Response)
    {
        let id_cuidados = req.params.id_cuidados;

        const db = await conexion();

        let lista_imagenes_cuidado = await db.query('select * from img_cuidados where id_cuidados = ?',[id_cuidados])
        
        res.json(lista_imagenes_cuidado);
    }

    public async agregarImagenesCuidados(req:Request, res:Response)
    {
        const archivos:any = req.files;

        let id_cuidados = req.params.id_cuidados;

        const db = await conexion();

        for (let index = 0; index < archivos.length; index++) {
        
            const resultado_cloud = await cloudinary.v2.uploader.upload(archivos[index].path);

            const imagen_cuidado = {
                id_cuidados:id_cuidados,
                imagen:resultado_cloud.url,
                public_id:resultado_cloud.public_id
            }
            await db.query('insert into img_cuidados set ?',[imagen_cuidado]);

            await fs.unlink(archivos[index].path);
        }
        
        res.json('Se agregaron las imagenes de manera exitosa')
    }

    public async eliminarImagenesCuidados(req:Request, res:Response)
    {
        //conectarme a la base de datos
        const db = await conexion();
        
        let id_img_cuidados = req.params.id_img_cuidados;
        
        let public_id =req.params.public_id;

        await db.query('delete from img_cuidados where id_img_cuidados = ?',[id_img_cuidados]);

        await cloudinary.v2.uploader.destroy(public_id);
 
        res.json('Se elimino exitosamente');
    }

    public async eliminarCuidados(req:Request, res:Response)
    {
        const db = await conexion();

        let id_cuidados = req.params.id_cuidados;

        await db.query('delete from cuidados where id_cuidados = ?',[id_cuidados]);

        let lista_imagenes_cuidado = await db.query('select * from img_cuidados where id_cuidados = ?',[id_cuidados]);

        for (let index = 0; index < lista_imagenes_cuidado.length; index++) {
            await cloudinary.v2.uploader.destroy(lista_imagenes_cuidado[index].public_id);        
        }

        await db.query('delete from img_cuidados where id_cuidados =?',[id_cuidados]);
        
        res.json('Se elimino completamente el cuidado');
          
    }


}