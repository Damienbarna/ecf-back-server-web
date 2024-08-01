import { DataTypes } from "sequelize";
import { sequelize } from "../config/index";
import { User } from "./user";

export const Orders = sequelize.define("orders", {
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Orders.belongsTo(User, { foreignKey: "userId" });