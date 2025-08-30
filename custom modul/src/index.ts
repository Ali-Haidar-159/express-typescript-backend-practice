import {createServer , Server , IncomingMessage , ServerResponse} from "http" ;
import {PlayWithString} from "./util/playWithString" ;

let myServer:Server = createServer(function(req:IncomingMessage , res:ServerResponse):void{

    res.writeHead(200 , {"content-type" : "text/plain"}) ;

    let length:number = PlayWithString.getLength("ali") ;

    res.end(length.toString()) ;

}) ;

let PORT:number = 3000 ;

myServer.listen(PORT , function():void{

    console.log(`Server is running at http://localhost:${PORT} ...`) ;

}) ;