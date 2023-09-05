"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const services_1 = require("../services");
const express_validator_1 = require("express-validator");
const search = (req, res) => {
    try {
        setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
            const validateResult = (0, express_validator_1.validationResult)(req).array();
            if (validateResult.length) {
                res.status(400).json({ message: validateResult[0].msg });
                return;
            }
            const data = yield services_1.SearchServices.search(req);
            if (data.length) {
                res.json(data);
            }
            else {
                res.status(404).json({ message: "Person not found" });
            }
        }), 5000);
    }
    catch (error) {
        res.status(500).json({ message: "Something wrong" });
    }
};
exports.search = search;
