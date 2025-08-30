import {createServer , Server, IncomingMessage , ServerResponse} from "http" ;

let myServer:Server = createServer(function(req:IncomingMessage , res:ServerResponse):void{

    let path:string | undefined = req.url ;
    let method:string | undefined = req.method ;

    res.writeHead(200 , {"content-type" : "text/plain"}) ;

    if(path === "/" && method==="GET")
    {
        res.end("GET : HOME Page") ;
    }
    else if(path === "/about" && method==="GET")
    {
        res.end("GET : ABOUT Page") ;
    }
    else if(path === "/login" && method==="POST")
    {
        let body : string = "" ;

        req.on("data" , function(chunk){

            body += chunk.toString() ;

        });

        req.on("end" , function(){

            const params:URLSearchParams = new URLSearchParams(body);

            const email:string | null = params.get("email");
            const password:string|null = params.get("password");

            if(email === "ali@gmail.com" && password === "123456")
            {
                res.end(`Login Success`) ;
            }
            else
            {
                res.end(`Invalid email or password`) ;
            }

        });
    }
    else
    {
        res.end("Path not found !") ;
    }

});

let PORT:number = 3000 ;

myServer.listen(PORT , function():void{

    console.log(`Server is running at http://localhost:${PORT} ...`) ;

});