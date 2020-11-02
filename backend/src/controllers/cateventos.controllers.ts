import { conexion } from "../database";
import { Request, Response } from "express";
import { ICateventos } from "../models/cateventos";

export class CateventosController
{
    public async listarCateventos(req:Request,res:Response){
        
        const conex = await conexion();

        let cateventos = await conex.query('select * from categoria_eventos');

        return res.json(cateventos);
    }

    public async crearCateventos(req:Request,res:Response){

        let cateventos:ICateventos = req.body;

        const conex = await conexion();

        await conex.query('insert into categoria_eventos set ?',[cateventos]);

        return res.json('Categoria agregada');

    }

    public async eliminarCateventos(req:Request,res:Response){
        const conex = await conexion();

        let id_categoria_eventos =req.params.id;

        try {
            await conex.query('delete from categoria_eventos where id_categoria_eventos = ?',[id_categoria_eventos]);
            return res.json("Categoria eliminada");

        } catch (error) {
           return res.json("No se puede eliminar una categoria que este siendo utilizada ")
        }
    }

    public async actualizarCateventos(req:Request,res:Response){
        const conex = await conexion();

        let id_categoria_eventos = req.params.id;

        let nueva_Cateven = req.body;

        await conex.query('update categoria_eventos set ? where id_categoria_eventos = ?',[nueva_Cateven,id_categoria_eventos]);

        return res.json('Categoria actualizada')
    }

    public async obtenerCateventos(req:Request, res:Response){
        const conex = await conexion();

        let id_categoria_eventos = req.params.id;

        let unaCateven = await conex.query("select * from categoria_eventos where id_categoria_eventos = ?",[id_categoria_eventos]);

        return res.json(unaCateven[0]);
    }
}