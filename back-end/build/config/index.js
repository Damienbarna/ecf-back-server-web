"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const login = {
    database: "mcdo",
    username: "mcdo",
    password: "admin",
};
exports.sequelize = new sequelize_1.Sequelize(login.database, login.username, login.password, {
    host: "localhost",
    dialect: "mysql",
});
exports.sequelize
    .authenticate()
    .then(() => console.log("connecté à la bdd"))
    .catch((error) => console.error("impossible de ca connecter à la bdd :", error));
exports.sequelize.sync({ force: true }).then(async () => {
    console.log("Modèles et tables synchronisésssssss.");
});
