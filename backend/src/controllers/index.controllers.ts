
import { Response, Request } from "express";

export function mensaje(req:Request, res:Response)
{
    return res.json("Esta es la ruta principal");
}