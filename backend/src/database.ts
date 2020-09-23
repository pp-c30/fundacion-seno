import { createPool } from "promise-mysql";

export async function conexion()
{
   const connect = await createPool({
        host:'localhost',
        user:'root',
        password:'',
        database:'fundacion_seno'
    });

    return connect;

}