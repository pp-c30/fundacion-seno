"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
function principal() {
    let serv = new server_1.Server();
    serv.listen();
}
principal();
