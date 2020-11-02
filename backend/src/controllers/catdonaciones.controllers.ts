import { conexion } from "../database";
import { Request, Response } from "express";
import { ICatdonaciones } from "../models/catdonaciones";

export class CatdonacionesController
{
    public async listarCatdonaciones(req:Request,res:Response){
        
        const conex = await conexion();

        let catdonaciones = await conex.query('select * from categoria_donaciones');

        return res.json(catdonaciones);
    }

    public async crearCatdonaciones(req:Request,res:Response){

        let catdonaciones:ICatdonaciones = req.body;

        const conex = await conexion();

        await conex.query('insert into categoria_donaciones set ?',[catdonaciones]);

        return res.json('Categoria Agregada');

    }

    public async eliminarCatdonaciones(req:Request,res:Response){
        const conex = await conexion();

        let id_categoria_donaciones =req.params.id;
        try {
            await conex.query('delete from categoria_donaciones where id_categoria_donaciones = ?',[id_categoria_donaciones]);
            return res.json("Categoria eliminada");

        } catch (error) {
           return res.json("No se puede eliminar una categoria que este siendo utilizada ")
        }
    }

    public async actualizarCatdonaciones(req:Request,res:Response){
        const conex = await conexion();

        let id_categoria_donaciones = req.params.id;

        let nueva_catdon = req.body;

        await conex.query('update categoria_donaciones set ? where id_categoria_donaciones = ?',[ nueva_catdon,id_categoria_donaciones]);

        return res.json('Categoria Actualizada')
    }

    public async obtenerCatdonaciones(req:Request, res:Response){
        const conex = await conexion();

        let id_categoria_donaciones = req.params.id;

        let unaCatdon = await conex.query("select * from categoria_donaciones where id_categoria_donaciones =?",[id_categoria_donaciones]);

        return res.json(unaCatdon[0]);
    }
}