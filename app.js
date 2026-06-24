import express from 'express';
import { DataBaseUp } from './src/config/DataBase.js';
import { RouterMovies } from './src/routes/Movie.route.js';

//el servidor lo entienda en formato json

const app = express();
let port = 3000;

app.use(express.json())

app.use("/movies", RouterMovies)


app.listen(port, async ()=>{
    await DataBaseUp();
    console.log(`server corriendo en el puerto ${port}`);
})