"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
// import * as os from "os" ;
const fs = require("fs");
const path = require("path");
// let data = {
//     homedir : os.homedir() ,
//     computerName : os.hostname()
// }
let myServer = (0, http_1.createServer)(function (req, res) {
    res.writeHead(200, { "content-type": "text/plain" });
    if (req.url === "/data") {
        let fetchedData = fs.readFile(path.join(__dirname, "..", "asset", "note.txt"), "utf-8", function (err, data) {
            if (err) {
                res.end(JSON.stringify(err));
            }
            else {
                res.end(JSON.stringify(data));
            }
        });
        // res.write(JSON.stringify(data)) ;
    }
    else {
        res.end("Other Page");
    }
});
let PORT = 3000;
myServer.listen(PORT, function () {
    console.log(`Server is running at http://localhost:${PORT} ...`);
});
