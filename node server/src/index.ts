import * as http from "http" ;
import {Server , IncomingMessage , ServerResponse} from "http" ;

let PORT : number = 3000 ;

let myServer:Server = http.createServer(function(req:IncomingMessage , res:ServerResponse):void{

    res.writeHead(200 , {"content-type" : "text/plain"}) ;
    res.end("Hello from server") ;

}) ;

myServer.listen(PORT , function():void{

    console.log(`Server is running at http://localhost:${PORT} ...`) ;

});