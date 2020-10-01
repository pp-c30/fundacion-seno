import { conexion } from "../database";
import { Request, Response } from "express";
import { ICuidados} from "../models/cuidados";

export class CuidadosController
{
    public async listarCuidado(req:Request, res:Response)
    {
        const conec = await conexion();

        let cuidados = await conec.query('select * from cuidados');

        return res.json(cuidados);

    }

    public async crearCuidado (req:Request, res:Response)
    {
        let cuidados:ICuidados = req.body;

        const conec = await conexion();

        await conec.query("insert into cuidados set ?",[cuidados]);
    
        return res.json('El elemento fue agregado');
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