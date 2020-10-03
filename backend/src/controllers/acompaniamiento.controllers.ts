import { conexion } from "../database";
import { Request, Response } from "express";
import { IAcompaniamiento } from "../models/acompaniamiento";

export class AcompaniamientoController
{
    public async listarAcomp(req:Request,res:Response){
        
        const conex = await conexion();

        let acomp = await conex.query('select * from tipo_acompaniamiento');

        return res.json(acomp);
    }

    public async crearAcomp(req:Request,res:Response){

        let acomp:IAcompaniamiento = req.body;

        const conex = await conexion();

        await conex.query('insert into tipo_acompaniamiento set ?',[acomp]);

        return res.json('Elemento agregado con exito');

    }

    public async eliminarAcomp(req:Request,res:Response){
        const conex = await conexion();

        let id_acomp =req.params.id;

        await conex.query('delete from tipo_acompaniamiento where id_acomp = ?', id_acomp);

        return res.json('Elemento eliminado con exito');
    }

    public async actualizarAcomp(req:Request,res:Response){
        const conex = await conexion();

        let id_acomp= req.params.id;

        let nuevo_ac = req.body;

        await conex.query('update tipo_acompaniamiento set ? where id_acomp',[id_acomp, nuevo_ac]);

        return res.json('Elemnto actualizado con exito')
    }

    public async obtenerAcomp(req:Request, res:Response){
        const conex = await conexion();

        let id_acomp = req.params.id;

        let nuevo_ac = await conex.query("select * from tipo_acompaniamiento where id_acomp =?",[id_acomp]);

        return res.json(nuevo_ac[0]);
    }
}