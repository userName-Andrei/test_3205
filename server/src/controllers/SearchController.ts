import { Request, Response } from "express";
import { IFormInputs } from "../types";
import { SearchServices } from "../services";
import { Result, validationResult } from "express-validator";

export const search = (req: Request, res: Response) => {
    try {
        setTimeout(async () => {
            const validateResult = validationResult(req).array();

            if (validateResult.length) {
                res.status(400).json({ message: validateResult[0].msg });
                return;
            }

            const data: IFormInputs[] = await SearchServices.search(req);

            if (data.length) {
                res.json(data);
            } else {
                res.status(404).json({ message: "Person not found" });
            }
        }, 5000);
    } catch (error) {
        res.status(500).json({ message: "Something wrong" });
    }
};
