"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
// require all modules 
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const user_router_1 = require("./router/user.router");
// create the server 
let app = express();
exports.app = app;
app.use(morgan("dev"));
app.use(cors());
app.use(user_router_1.userRoute);
app.get("/", function (req, res) {
    res.status(200).json({
        status: 200,
        data: "Home Page"
    });
});
app.get("/about", function (req, res) {
    res.status(200).json({
        status: 200,
        data: {
            name: "Ali",
            Department: "Computer Science And Engineering"
        }
    });
});
// handle the router error 
app.use(function (req, res, next) {
    res.status(404).json({
        status: 404,
        data: "Page Not Found !"
    });
});
// handle the server error 
app.use(function (err, req, res, next) {
    res.status(404).json({
        status: 500,
        data: "Find Server Error !",
        error: err
    });
});
