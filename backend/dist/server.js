"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const acompaniamiento_routes_1 = __importDefault(require("./routes/acompaniamiento.routes"));
const catdonaciones_routes_1 = __importDefault(require("./routes/catdonaciones.routes"));
const cateventos_routes_1 = __importDefault(require("./routes/cateventos.routes"));
const catgaleria_routes_1 = __importDefault(require("./routes/catgaleria.routes"));
const cuidados_routes_1 = __importDefault(require("./routes/cuidados.routes"));
const donaciones_routes_1 = __importDefault(require("./routes/donaciones.routes"));
const evento_routes_1 = __importDefault(require("./routes/evento.routes"));
const galeria_routes_1 = __importDefault(require("./routes/galeria.routes"));
const localidad_routes_1 = __importDefault(require("./routes/localidad.routes"));
const provincia_routes_1 = __importDefault(require("./routes/provincia.routes"));
const quienes_routes_1 = __importDefault(require("./routes/quienes.routes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        //app va almacenar todas las funcionalidades de express al iniciar el server
        this.app = express_1.default();
        this.configuracion();
        this.middleware();
        this.routes();
    }
    configuracion() {
        this.app.set('port', process.env.port || 3000);
    }
    routes() {
        this.app.use(acompaniamiento_routes_1.default);
        this.app.use(catdonaciones_routes_1.default);
        this.app.use(cateventos_routes_1.default);
        this.app.use(catgaleria_routes_1.default);
        this.app.use(cuidados_routes_1.default);
        this.app.use(donaciones_routes_1.default);
        this.app.use(evento_routes_1.default);
        this.app.use(galeria_routes_1.default);
        this.app.use(localidad_routes_1.default);
        this.app.use(provincia_routes_1.default);
        this.app.use(quienes_routes_1.default);
        this.app.use(index_routes_1.default);
    }
    middleware() {
        //morgan registra y muestra en consola  todas las peticiones HTTP(post,get,put,delete,update)
        this.app.use(morgan_1.default('dev'));
        // se requiere para la comunicacion entre dos servidores distintos
        this.app.use(cors_1.default());
        //el servidor espera recibir los datos en formato json
        this.app.use(express_1.default.json());
    }
    listen() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.listen(3000);
            console.log('Corriendo servidor en el puerto', this.app.get('port'));
        });
    }
}
exports.Server = Server;
