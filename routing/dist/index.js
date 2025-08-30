"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
let myServer = (0, http_1.createServer)(function (req, res) {
    let path = req.url;
    let method = req.method;
    res.writeHead(200, { "content-type": "text/plain" });
    if (path === "/" && method === "GET") {
        res.end("GET : HOME Page");
    }
    else if (path === "/about" && method === "GET") {
        res.end("GET : ABOUT Page");
    }
    else if (path === "/login" && method === "POST") {
        let body = "";
        req.on("data", function (chunk) {
            body += chunk.toString();
        });
        req.on("end", function () {
            const params = new URLSearchParams(body);
            const email = params.get("email");
            const password = params.get("password");
            if (email === "ali@gmail.com" && password === "123456") {
                res.end(`Login Success`);
            }
            else {
                res.end(`Invalid email or password`);
            }
        });
    }
    else {
        res.end("Path not found !");
    }
});
let PORT = 3000;
myServer.listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT} ...`);
});
