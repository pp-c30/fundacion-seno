import { conexion } from "../database";
import { Request, Response } from "express";
import { ILocalidad } from "../models/localidad";

export class LocalidadController
{
    public async listarLocalidad(req:Request, res:Response){
        const conex = await conexion();

        let localidad = await conex.query('select * from localidad');

        return res.json(localidad);
    }

    public async crearLocalidad(req:Request, res:Response){
        let localidad:ILocalidad = req.body;

        const conex = await conexion();

        await conex.query("insert into localidad set ?",[localidad]);
        
        return res.json('Localidad Creada');
    }

    public async eliminarLocalidad(req:Request, res:Response){
        const conex = await conexion();
        let id_localidad = req.params.id;

        try {
            await conex.query('delete from localidad where id_localidad = ?',[id_localidad]);
            return res.json("Localidad eliminada");

        } catch (error) {
           return res.json("No se puede eliminar una localiadad que este siendo utilizada ")
        }
    }

    public async actualizarLocalidad(req:Request, res:Response){
        const conex = await conexion();

        let id_localidad = req.params.id;

        let nueva_localidad = req.body;

        await conex.query("update localidad set ? where id_localidad = ?", [nueva_localidad, id_localidad]);

        return res.json('Localidad Actualizada')
    }

    public async listarLocalidades(req:Request, res:Response){
        const conex = await conexion();

        let id_provincia = req.params.id;

        let localidad = await conex.query('select * from localidad where provincia =?',[id_provincia] );

        return res.json(localidad);
    }

}