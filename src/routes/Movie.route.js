import { Router } from "express";
import { findMovie, InfoMovie } from "../controllers/Movie.controller.js";

export const RouterMovies = Router();

RouterMovies.get("/", InfoMovie);
RouterMovies.get("/:id", findMovie)