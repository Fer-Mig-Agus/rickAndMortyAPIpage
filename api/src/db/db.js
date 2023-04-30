require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD, DB_DIALECT } = process.env;
const { Sequelize } = require('sequelize');


const baseDeDatos=new Sequelize(BDD,DB_USER,DB_PASSWORD,{
    host:DB_HOST,
    dialect: DB_DIALECT,
    port:DB_PORT,
    logging:false,
    define:{
        timestamps:false,
        underscored:true
    }
});




module.exports = baseDeDatos;

















// // Option 3: Passing parameters separately (other dialects)
// const baseDeDatos = new Sequelize(BDD, DB_USER, "admin", {
//     host: "localhost",
//     dialect: "postgres",
//     logging:false
// });

