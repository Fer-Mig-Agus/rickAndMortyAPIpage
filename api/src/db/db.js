require('dotenv').config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, BDD, DB_DIALECT, DEBUG, DB_RENDER } = process.env;
const { Sequelize } = require('sequelize');


if(DEBUG === "true"){
    const baseDeDatos = new Sequelize(BDD, DB_USER, DB_PASSWORD, {
        host: DB_HOST,
        dialect: DB_DIALECT,
        port: DB_PORT,
        logging: false,
        define: {
            timestamps: false,
            underscored: true
        }
    });

    module.exports = baseDeDatos;

}else{
    //Render deploy database
    const baseDeDatos = new Sequelize(DB_RENDER, {
        logging: false, // set to console.log to see the raw SQL queries
        native: false,
        dialect: "postgres", // lets Sequelize know we can use pg-native for ~30% more speed
        dialectOptions: {
            ssl: {
                require: true,
            },
        }
    });

    module.exports = baseDeDatos;

}


















// // Option 3: Passing parameters separately (other dialects)
// const baseDeDatos = new Sequelize(BDD, DB_USER, "admin", {
//     host: "localhost",
//     dialect: "postgres",
//     logging:false
// });

