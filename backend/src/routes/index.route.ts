import { Router } from "express";

import { mensaje } from "../controllers/index.controllers";

let enrutadorIndex = Router();

enrutadorIndex.route('/').get(mensaje);

export default enrutadorIndex;