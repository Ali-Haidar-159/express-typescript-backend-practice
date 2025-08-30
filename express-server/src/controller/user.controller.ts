import {Request,Response} from "express"

let getApi = function(req:Request,res:Response){

    res.status(200).json({

        status : 200 ,
        data : "API Page"

    });

}


export {getApi}