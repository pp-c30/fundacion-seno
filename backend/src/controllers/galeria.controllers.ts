import { Response,Request } from "express";
import { conexion } from "../database";
import { IGaleria } from "../models/galeria";

export class GaleriaController
{
    public async listarGaleria(req:Request,res:Response)
    {
        const conex= await conexion();

        let galeria = await conex.query('select * from galeria');

        return res.json(galeria);
    }

    public async crearGaleria(req:Request, res:Response)
    {

        let galeria:IGaleria = req.body;

        const conex = await conexion();

        await conex.query('insert into galeria set ?', [galeria]);

        return res.json('El elemento se ha insertado exitosamente');
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

        let sensor = req.body;

        let conex = await conexion();

        await conex.query('update galeria set ? where id_galeria = ? ', [sensor,id_galeria]);

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
