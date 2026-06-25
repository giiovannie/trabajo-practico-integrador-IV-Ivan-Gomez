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

export const insertMovie = async (req,res)=>{
    try {
        const {title, genere, duration, year,synopsis } = req.body;

        if(!title || !genre || !duration || !year){
            return res.status(400).json(errorMessage)
        }
        
        if(!Number.isInteger(Number(duration)) || Number(duration) <= 0){
            return res.status(400).json(errorMessage)
        }
        
        if(
            !Number.isInteger(Number(year)) || 
            Number(year) < 1888
        ){
            return res.status(400).json(errorMessage)
        }

        const exists = await TableMovie.findOne({
            where: { title }
        });

        if (exists) {
            return res.status(400).json({
                message: "Ya existe una película con ese título"
            });
        }

        const agregarPelicula = await TableMovie.create({
            title,
            genere,
            duration,
            year,
            synopsis
        })

        res.json(agregarPelicula)

    } catch (error) {
        res.status(401).json(errorMessage)
    }
}