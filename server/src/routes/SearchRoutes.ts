import express from "express";
import { SearchController } from "../controllers";
import { searchValidation } from "../validation";

const SearchRoutes = express.Router();

SearchRoutes.post("/search", searchValidation, SearchController.search);

export default SearchRoutes;
