"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApi = void 0;
let getApi = function (req, res) {
    res.status(200).json({
        status: 200,
        data: "API Page"
    });
};
exports.getApi = getApi;
