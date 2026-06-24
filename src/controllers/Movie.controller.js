import { TableMovie } from "../models/Movie.model.js";

let errorMessage = {
    message: "error en la peticion"
}

export const InfoMovie = async (req,res)=>{
    try {
        const traerMovie = await TableMovie.findAll();
        res.status(200).json(traerMovie)
    } catch (error) {
        res.status(400).json(errorMessage)
    }
} 
