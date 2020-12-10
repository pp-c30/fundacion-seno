import { conexion } from "../database";
import { Request, Response } from "express";
import { IDonaciones } from "../models/donaciones";

export class DonacionesController 
{
    public async listarDonaciones(req:Request, res:Response){
        const conex = await conexion();

        let donaciones = await conex.query('select *,(select descripcion from categoria_donaciones where id_categoria_donaciones = d.categoria) as categoria from donaciones d');

        return res.json(donaciones);
    }

    public async crearDonaciones(req:Request, res:Response){
        let donaciones:IDonaciones = req.body;

        const conex = await conexion();

        await conex.query('insert into donaciones set ?',[donaciones]);

        return res.json("Donacion Creada");
    }

    public async eliminarDonaciones(req:Request, res:Response){
        const conex = await conexion();

        let id_donaciones = req.params.id;

        await conex.query('delete from donaciones where id_donaciones = ?',[id_donaciones]);

        return res.json("Donacion Eliminada");
    }

    public async actualizarDonaciones(req:Request, res:Response){
        const conex = await conexion();

        let id_donaciones = req.params.id;

        let nueva_don = req.body;

        await conex.query('update donaciones set ? where id_donaciones = ?',[nueva_don, id_donaciones]);

        return res.json("Donacion actualizada");
    }

    public async obtenerDonaciones(req:Request, res:Response){
        const conex = await conexion();

        let id_donaciones = req.params.id;

        let una_donacion = await conex.query('select * from donaciones where id_donaciones = ?',[id_donaciones]);

        return res.json([una_donacion]);
    }
}