const server = require("./src/server/app");
const baseDeDatos = require("./src/db/db");

const User = require("./src/db/models/User");
const Favorites = require("./src/db/models/Favorites");

require("dotenv").config();
const PORT = process.env.PORT || 3001;


baseDeDatos.sync({force:false}).then(()=>{
    server.listen(PORT,()=>{
        console.log("listening on PORT: ",PORT);
    });
});

