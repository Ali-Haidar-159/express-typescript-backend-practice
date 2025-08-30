import {app} from "./app" ;
import * as dotenv  from "dotenv"
import * as chalk from "chalk" ;

dotenv.config() ;

let PORT : number | string = process.env.PORT || 5000 ;

app.listen(PORT , function():void{

    console.log(chalk.bgRed.italic.bold(`Server is running at http://localhost:${PORT}...`)) ;

});
