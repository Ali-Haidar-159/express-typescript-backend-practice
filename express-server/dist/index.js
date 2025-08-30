"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const dotenv = require("dotenv");
const chalk = require("chalk");
dotenv.config();
let PORT = process.env.PORT || 5000;
app_1.app.listen(PORT, function () {
    console.log(chalk.bgRed.italic.bold(`Server is running at http://localhost:${PORT}...`));
});
