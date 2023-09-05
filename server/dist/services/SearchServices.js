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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const fs_1 = __importDefault(require("fs"));
const search = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, number } = req.body;
    let output = [];
    const jsonData = yield fs_1.default.promises.readFile("dataBase.json", "utf8");
    const data = JSON.parse(jsonData);
    const result = data.filter((obj) => (email && obj.email.includes(email)) ||
        (number && obj.number.includes(number)));
    output = result;
    return output;
});
exports.search = search;
