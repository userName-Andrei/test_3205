import { body } from "express-validator";

export const searchValidation = [
    body("email", "Invalid format email").trim().isEmail().escape(),
    body("number").trim().escape(),
];
