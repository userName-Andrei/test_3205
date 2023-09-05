"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchValidation = void 0;
const express_validator_1 = require("express-validator");
exports.searchValidation = [
    (0, express_validator_1.body)("email", "Invalid format email").trim().isEmail().escape(),
    (0, express_validator_1.body)("number").trim().escape(),
];
