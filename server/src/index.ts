import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import fs from "fs";
import { IFormInputs } from "./types";
import SearchRoutes from "./routes/SearchRoutes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", SearchRoutes);

app.listen(process.env.PORT, () => {
    console.log(`server started at port ${process.env.PORT}`);
});
