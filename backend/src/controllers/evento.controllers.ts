import { conexion } from "../database";
import { Request, Response } from "express";
import { IEvento } from "../models/evento";

export class EventoController
{
    public async listarEvento(req:Request, res:Response)
    {
        const conec = await conexion();

        let evento = await conec.query('select * from evento');

        return res.json(evento);

    }

    public async crearEvento (req:Request, res:Response)
    {
        const conec = await conexion();

        const evento = req.body;

        await conec.query("insert into evento set ?",[evento]);
    
        return res.json('El elemento fue agregado');
    }

    public async eliminarEvento(req:Request, res:Response)
    {
        const conec = await conexion();

        let id_evento =req.params.id;

        await conec.query("delete from evento where id_evento = ?", id_evento);
 
        return res.json('El evento ha sido Eliminado');
    }

    public async actualizarEvento(req:Request, res:Response)
    {
        const conec = await conexion();

        let id_evento = req.params.id;

        let nueva_data = req.body;

        await conec.query("update evento set ? where id_evento = ?", [nueva_data, id_evento]);

        return res.json('El elemento ha sido actualizado');
    }

    public async obtenerEvento(req:Request, res:Response)
    {
        const conec = await conexion();

        let id_evento = req.params.id;

        let unEvento = await conec.query("select * from evento where id_evento =?",[id_evento]);

        return res.json(unEvento[0]);
    }

}