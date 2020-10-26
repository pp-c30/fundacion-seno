import { conexion } from "../database";
import { Request, Response } from "express";
import { IProvincia } from "../models/provincia";

export class ProvinciaController
{
    public async listarProvincia(req:Request, res:Response){
        const conex = await conexion();

        let provincia = await conex.query('select * from provincia');

        return res.json(provincia);
    }

    public async crearProvincia(req:Request, res:Response){
        let provincia:IProvincia = req.body;

        const conex = await conexion();

        await conex.query('insert into provincia set ?',[provincia]);

        return res.json("Porvincia Creada");
    }

    public async eliminarProvincia(req:Request, res:Response){
        const conex = await conexion();
        let id_provincia = req.params.id;

        try {
            await conex.query('delete from provincia where id_provincia = ?',[id_provincia]);
            return res.json("Provincia eliminada");

        } catch (error) {
           return res.json("No se puede eliminar una provincia que este siendo utilizada por una localidad")
        }
    }

    public async actualizarProvincia(req:Request, res:Response){
        const conex = await conexion();

        let id_provincia = req.params.id;

        let nueva_prov = req.body;

        await conex.query('update provincia set ? where id_provincia = ?',[nueva_prov, id_provincia]);

        return res.json("Provincia Actualizada");
    }

    public async obtenerProvincia(req:Request, res:Response){
        const conex = await conexion();

        let id_provincia = req.params.id;

        let una_prov = await conex.query('select * from provincia where id_provincia = ?',[id_provincia]);

        return res.json([una_prov]);
    }
}