"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const playWithString_1 = require("./util/playWithString");
let myServer = (0, http_1.createServer)(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    let length = playWithString_1.PlayWithString.getLength("ali");
    res.end(length.toString());
});
let PORT = 3000;
myServer.listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT} ...`);
});
