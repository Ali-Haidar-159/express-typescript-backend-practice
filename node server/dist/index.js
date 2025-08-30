"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
let PORT = 3000;
let myServer = http.createServer(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello from server");
});
myServer.listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT} ...`);
});
