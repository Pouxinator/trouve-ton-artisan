require("dotenv").config();

const app = require("./app");
const sequelize = require("./config/database");


require("./models");

const PORT = process.env.PORT || 3000;

sequelize
    .authenticate()
    .then(async () => {

        console.log("Connexion MySQL réussie.");


        await sequelize.sync({ alter: false });

        app.listen(PORT, () => {
            console.log(`Serveur lancé sur http://localhost:${PORT}`);
        });

    })
    .catch((err) => {
        console.error(err);
    });