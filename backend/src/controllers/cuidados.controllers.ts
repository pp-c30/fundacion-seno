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
    public async listarCuidado(req:Request, res:Response)
    {
        const conec = await conexion();

        let cuidados = await conec.query('select * from cuidados');

        return res.json(cuidados);

    }

    
    public async guardarCuidado(req:Request, res:Response)
    {
       const files:any = req.files;
     
       const des = req.body.descripcion; 
    
       const db = await conexion();
       const unCuidado = {    
    
           descripcion:des
       }
       const resultado = await db.query ('insert into cuidados set?',[unCuidado]);

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

    public async eliminarCuidado(req:Request, res:Response)
    {
        const conec = await conexion();

        let id_cuidados =req.params.id;

        await conec.query("delete from cuidados where id_cuidados = ?", id_cuidados);
 
        return res.json('El evento ha sido Eliminado');
    }

    public async actualizarCuidado(req:Request, res:Response)
    {
        const conec = await conexion();

        let id_cuidados = req.params.id;

        let nueva_data = req.body;

        await conec.query("update cuidados set ? where id_cuidados = ?", [nueva_data, id_cuidados]);

        return res.json('El elemento ha sido actualizado');
    }

    public async obtenerCuidado(req:Request, res:Response)
    {
        const conec = await conexion();

        let id_cuidados = req.params.id;

        let cuida = await conec.query("select * from cuidados where id_cuidados =?",[id_cuidados]);

        return res.json(cuida[0]);
    }

}