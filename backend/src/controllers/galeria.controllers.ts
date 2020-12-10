import { Response,Request } from "express";
import { conexion } from "../database";
import { IGaleria } from "../models/galeria";
import fs from "fs-extra";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name:'dj7l5ojza',
    api_key:'566266184157444',
    api_secret:'Y3au0dyhsbHHgKNPK2pg67Vb_h8'

});

export class GaleriaController
{

    public async establecerPortada(req:Request, res:Response)
    {
        let id_img_galeria = req.params.id_img_galeria;

        let id_galeria =req.params.id_galeria;

        const db = await conexion();

        //primero ponemos todas las imagenes en portada 0(cero)
        const portadasEnEstadoCero={
            portada:0,
        }
        await db.query('update img_galeria set ? where id_galeria = ? ',[portadasEnEstadoCero,id_galeria]);

        //establecer como portada una imagen
        const datosImagenesGaleria={
            portada:1,
        }
        await db.query('update img_galeria set ? where id_img_galeria = ?',[datosImagenesGaleria,id_img_galeria]);

        //guardo la imagen que se eligio como portada en la tabla galeria
        const unaFila = await db.query('select * from img_galeria where id_img_galeria = ?',[id_img_galeria]);

        let datosGaleria = {
            imagen_portada:unaFila[0].imagen
        }

        //ahora guardamos (editamos) solo su url de la imagen en la tabla galeria
        await db.query('update galeria set ? where id_galeria = ?',[datosGaleria,id_galeria]);

        res.json('Se establecio portada');
    }

    public async actualizarGaleria(req:Request,res:Response)
    {
        if(!req.files)
        {
            let unaGaleria = req.body;
            
            const updateGaleria ={
                descripcion:req.body.descripcion, 
                fecha:req.body.fecha,
                localidad:req.body.localidad,
                categoria:req.body.categoria,
                tipo:req.body.tipo,
                estado_home:req.body.estado_home,
            }
            const db = await conexion();

            await db.query('update galeria set ? where id_galeria =?',[updateGaleria, req.body.id_galeria]);

            res.json('Se actualizo exitosamente');
        }
    }

    public async listarGaleria(req:Request,res:Response)
    {
        const db= await conexion();

        let galeria = await db.query('select *,date_format(fecha,"%d/%m/%Y ") as fecha,(select nombre from localidad where id_localidad = g.localidad ) as localidad,(select descripcion from categoria_galeria where id_categoria =g.categoria) as categoria from galeria g');

        return res.json(galeria);
    }


    public async guardarGaleria(req:Request, res:Response)
    {
       const files:any = req.files;
     
       const des = req.body.descripcion; 
       const fe = req.body.fecha; 
       const loc = req.body.localidad; 
       const cat = req.body.categoria; 
       const tip = req.body.tipo;
       const esta = req.body.estado_home;
       
       const db = await conexion();
       const unaGaleria = {    
    
           descripcion:des,
           fecha:fe,
           localidad:loc,
           categoria:cat,
           tipo:tip,
           estado_home:esta
       }
       const resultado = await db.query ('insert into galeria set?',[unaGaleria]);

       for (let i=0; i<files.length; i++){
            //especifica al path(la ruta de la imagen en la carpeta upload)
           const resultadode_cloudinary = await cloudinary.v2.uploader.upload(files[i].path);

           const img_galeria={
               id_galeria:resultado.insertId,
               imagen:resultadode_cloudinary.url,
               public_id:resultadode_cloudinary.public_id
           }

          await db.query('insert into img_galeria set ?',[img_galeria]);
           
          await fs.unlink(files[i].path); 
         
        }
        res.json('se inserto exitosamente');
    }


    public async eliminarGaleria(req:Request,res:Response)
    {
        let db = await conexion();

        let id_galeria = req.params.id_galeria;

        await db.query('delete from galeria where id_galeria = ?',[id_galeria]);

        let lista_imagenes_galeria = await db.query('select * from img_galeria where id_galeria = ?',[id_galeria]);

        for (let index = 0; index < lista_imagenes_galeria.length; index++) {
            await cloudinary.v2.uploader.destroy(lista_imagenes_galeria[index].public_id);
        }
        await db.query('delete from img_galeria where id_galeria = ?',[id_galeria]);

        return res.json('Se elimino la galeria completa');
    }

    public async listarImagenesGaleria(req:Request, res:Response)
    {
        let id_galeria = req.params.id_galeria;

        const db = await conexion();

        let lista_imagenes_galeria = await db.query('select * from img_galeria where id_galeria = ?',[id_galeria])
        
        res.json(lista_imagenes_galeria);
    }

    public async agregarImagenesGaleria(req:Request, res:Response)
    {
        const archivos:any = req.files;

        let id_galeria = req.params.id_galeria;

        const db = await conexion();

        for (let index = 0; index < archivos.length; index++) {
            
            const resultado_cloud = await cloudinary.v2.uploader.upload(archivos[index].path);

            const imagen_galeria = {
                id_galeria:id_galeria,
                imagen:resultado_cloud.url,
                public_id:resultado_cloud.public_id
            }

                await db.query('insert into img_galeria set ?',[imagen_galeria]);

                await fs.unlink(archivos[index].path)
        }
        res.json('Se agregaron las Imagenes')
    }

    public async eliminarImagenGaleria(req:Request,res:Response)
    {
        let id_img_galeria = req.params.id_img_galeria;

        let public_id = req.params.public_id;

        //conectarme a la base de datos
        const db = await conexion();

        await db.query('delete from img_galeria where id_img_galeria = ?',[id_img_galeria]);
        
        await cloudinary.v2.uploader.destroy(public_id);

        res.json('Imagen eliminada');
    }

}
