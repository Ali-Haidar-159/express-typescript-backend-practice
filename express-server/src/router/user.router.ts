import * as express from "express" ;
import { getApi } from "../controller/user.controller";

let userRoute:express.Router = express.Router() ;

userRoute.get("/api" , getApi) ;


export {userRoute}