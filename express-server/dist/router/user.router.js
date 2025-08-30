"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express = require("express");
const user_controller_1 = require("../controller/user.controller");
let userRoute = express.Router();
exports.userRoute = userRoute;
userRoute.get("/api", user_controller_1.getApi);
