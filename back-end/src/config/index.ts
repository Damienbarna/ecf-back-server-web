import { Sequelize } from "sequelize";
const login = {
  database: "mcdo",
  username: "mcdo",
  password: "admin",
};

export const sequelize = new Sequelize(
  login.database,
  login.username,
  login.password,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
sequelize
  .authenticate()
  .then(() => console.log("connecté à la bdd"))
  .catch((error: any) =>
    console.error("impossible de ca connecter à la bdd :", error)
  );

sequelize.sync({ force: true }).then(async () => {
  console.log("Modèles et tables synchronisésssssss.");
});



