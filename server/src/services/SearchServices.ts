import { Request } from "express";
import fs from "fs";
import { IFormInputs } from "../types";

export const search = async (req: Request): Promise<IFormInputs[]> => {
    const { email, number } = req.body;
    let output: IFormInputs[] = [];

    const jsonData = await fs.promises.readFile("dataBase.json", "utf8");
    const data: IFormInputs[] = JSON.parse(jsonData);
    const result = data.filter(
        (obj) =>
            (email && obj.email.includes(email)) ||
            (number && obj.number.includes(number))
    );

    output = result;

    return output;
};
