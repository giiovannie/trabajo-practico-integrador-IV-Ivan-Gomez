import { Sequelize } from "sequelize";

const sequelize = new Sequelize("peliculas_db", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

//firewald

export const DataBaseUp = async ()=>{
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: true});
        console.log(`conexion exitosa, la bd esta lista `);
    } catch (error) {
        console.error(`se produjo un erro con la base de datos ${error}`)
    }
}