require("dotenv").config();
const server = require("./src/server/app");
const baseDeDatos = require("./src/db/db");

const PORT = process.env.PORT || 3001;

require("./src/db/models/relationShips");

baseDeDatos.sync({ force: false }).then(() => {
    server.listen(PORT, () => {
        if (process.env.DEBUG === "true") {
            // Listening Verify.
            console.log(`server listening on http://localhost:${PORT}`);
        } else {
            console.log(`server listening on https://backend-rick-and-morty.onrender.com:${PORT}`);
        }
    });
});

