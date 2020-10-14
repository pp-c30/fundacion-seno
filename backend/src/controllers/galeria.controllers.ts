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
    public async listarGaleria(req:Request,res:Response)
    {
        const conex= await conexion();

        let galeria = await conex.query('select * from galeria');

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
        let id_galeria = req.params.id;

        let conex = await conexion();

        await conex.query('delete from galeria where id_galeria = ?',id_galeria);

        return res.json('El elemento se ha eliminado exitosamente');
    }

    public async actualizarGaleria(req:Request,res:Response)
    {
 
        let id_galeria = req.params.id;

        let gale = req.body;

        let conex = await conexion();

        await conex.query('update galeria set ? where id_galeria = ? ', [gale,id_galeria]);

        return res.json('El elemento se actualizo exitosamente');
    }

    public async obtenerGaleria(req:Request,res:Response)
    {
        let id_galeria = req.params.id;

        let conex = await conexion();
        
        let gal = await conex.query('select * from galeria where id_galeria = ?' ,[id_galeria]);
        
        return res.json(gal[0]);
    }

}
