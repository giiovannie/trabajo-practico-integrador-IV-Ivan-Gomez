import { Router } from "express";
import { ActualizarMovie, eliminarPelicula, findMovie, InfoMovie, insertMovie } from "../controllers/Movie.controller.js";

export const RouterMovies = Router();

RouterMovies.get("/movies", InfoMovie);
RouterMovies.get("/movies/:id", findMovie);
RouterMovies.post("/movies", insertMovie);
RouterMovies.put("/movies/:id", ActualizarMovie);
RouterMovies.delete("/movies/:id", eliminarPelicula);