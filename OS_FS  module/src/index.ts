import {Server , IncomingMessage , ServerResponse, createServer} from "http"
// import * as os from "os" ;

import * as fs from "fs" ;
import * as path from "path" ;

// let data = {
//     homedir : os.homedir() ,
//     computerName : os.hostname()
// }

let myServer:Server = createServer(function(req:IncomingMessage,res:ServerResponse):void{

    res.writeHead(200 , {"content-type" : "text/plain"}) ;
    
    if(req.url === "/data")
    {
        let fetchedData = fs.readFile(path.join(__dirname , ".." ,"asset" , "note.txt") , "utf-8"  , function(err:NodeJS.ErrnoException|null,data:string):void{

            if(err)
            {
                res.end(JSON.stringify(err)) ;
            }
            else
            {
                res.end(JSON.stringify(data)) ;
            }


        })
        // res.write(JSON.stringify(data)) ;
    }
    else
    {
        res.end("Other Page") ;
    }

}) ;

let PORT:number = 3000 ;

myServer.listen(PORT , function():void{

    console.log(`Server is running at http://localhost:${PORT} ...`) ;

}) ;