import { TableMovie } from "../models/Movie.model.js";

let errorMessage = {
    message: "lo sentimos ocurrio un error inesperado"
}

export const InfoMovie = async (req,res)=>{
    try {
        const traerMovie = await TableMovie.findAll();
        res.status(200).json(traerMovie)
    } catch (error) {
        res.status(500).json(errorMessage)
    }
} 


export const findMovie = async (req,res)=>{
    try {
        const idReq = req.params
        const MovieFiltro = await TableMovie.findOne({
            where: { id: idReq}
        })

        if(!MovieFiltro){
            res.status(404).json(errorMessage)
        }

        res.status(200).json(MovieFiltro)
    } catch (error) {
        res.styatus(400).json(errorMessage)
    }
}