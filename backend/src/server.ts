import express, {Application} from 'express';
import enrutadorIndex from "./routes/index.routes";
import enrutadorAcomp from "./routes/acompaniamiento.routes";
import enrutadorCatdon from "./routes/catdonaciones.routes";
import enrutadorCateven from "./routes/cateventos.routes";
import enrutadorCatgaleria from "./routes/catgaleria.routes";
import enrutadorCcuidados from "./routes/cuidados.routes";
import enrutadorDonaciones from "./routes/donaciones.routes";
import enrutadorEvento from "./routes/evento.routes";
import enrutadorGaleria from "./routes/galeria.routes";
import enrutadorLocalidad from "./routes/localidad.routes";
import enrutadorProvincia from "./routes/provincia.routes";
import enrutadorQuienes_somos from "./routes/quienes.routes";
import enrutadorAut from "./routes/autenticacion.routes"
import morgan from 'morgan';
import cors from "cors";

export class Server{

    app:Application;
    
    constructor()
    {
        //app va almacenar todas las funcionalidades de express al iniciar el server
        this.app = express();
        this.configuracion();
        this.middleware();
        this.routes();
    }

    configuracion()
    {   //se establece el puerto 3000
        this.app.set('port',process.env.port || 3000);
   
    }

    routes()
    {
        this.app.use(enrutadorAcomp);

        this.app.use(enrutadorCatdon);

        this.app.use(enrutadorCateven);

        this.app.use(enrutadorCatgaleria);

        this.app.use(enrutadorCcuidados);
        
        this.app.use(enrutadorAut);

        this.app.use(enrutadorDonaciones);

        this.app.use(enrutadorEvento);

        this.app.use(enrutadorGaleria);

        this.app.use(enrutadorLocalidad);

        this.app.use(enrutadorProvincia);

        this.app.use(enrutadorQuienes_somos);

        this.app.use(enrutadorIndex);
    }

    middleware()
    {
        //morgan registra y muestra en consola  todas las peticiones HTTP(post,get,put,delete,update)
        this.app.use(morgan('dev'));

        // se requiere para la comunicacion entre dos servidores distintos
        this.app.use(cors());

        //el servidor espera recibir los datos en formato json
        this.app.use(express.json());
    }

    async listen()
    {
        await this.app.listen(3000);
        console.log('Corriendo servidor en el puerto', this.app.get('port'));
    }
}
