import {Server} from './server';

function principal()
{
    let serv =  new Server();

    serv.listen();
}

principal();
