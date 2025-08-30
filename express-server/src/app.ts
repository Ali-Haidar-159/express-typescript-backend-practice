// require all modules 
import * as express from "express" ;
import {Application , Request , Response , NextFunction} from "express" ;

import * as morgan from "morgan"; 
import * as cors from "cors"; 
import { userRoute } from "./router/user.router";

// create the server 

let app : Application = express() ;

app.use(morgan("dev")) ;
app.use(cors()) ;

app.use(userRoute)  ;


app.get("/" , function(req:Request,res:Response):void{

    res.status(200).json({

        status : 200 ,
        data : "Home Page"

    });

});

app.get("/about" , function(req:Request,res:Response):void{

    res.status(200).json({

        status : 200 ,
        data : {
            name : "Ali" ,
            Department : "Computer Science And Engineering"
        }

    });

});


// handle the router error 

app.use(function(req:Request,res:Response,next:NextFunction):void{

    res.status(404).json({

        status : 404 ,
        data : "Page Not Found !"

    });

}) ;

// handle the server error 
app.use(function(err:any,req:Request,res:Response,next:NextFunction): void{

    res.status(404).json({

        status : 500 ,
        data : "Find Server Error !" ,
        error : err 

    });

}) ;

// exports code 
export {app}