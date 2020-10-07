"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_controllers_1 = require("../controllers/index.controllers");
let enrutadorIndex = express_1.Router();
enrutadorIndex.route('/').get(index_controllers_1.mensaje);
exports.default = enrutadorIndex;
