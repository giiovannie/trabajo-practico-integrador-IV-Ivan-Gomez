import { Router } from "express";
import { InfoMovie } from "../controllers/Movie.controller.js";

export const RouterMovies = Router();

RouterMovies.get("/", InfoMovie);