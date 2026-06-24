import express from 'express';
import { DataBaseUp } from './src/config/DataBase.js';

//el servidor lo entienda en formato json

const app = express();
let port = 3000;

app.use(express.json())

app.listen(port, async ()=>{
    await DataBaseUp();
    console.log(`server corriendo en el puerto ${port}`);
})