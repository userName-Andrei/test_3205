"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controllers_1 = require("../controllers");
const validation_1 = require("../validation");
const SearchRoutes = express_1.default.Router();
SearchRoutes.post("/search", validation_1.searchValidation, controllers_1.SearchController.search);
exports.default = SearchRoutes;
