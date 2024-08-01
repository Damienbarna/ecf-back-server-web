import { DataTypes } from "sequelize";
import { sequelize } from "../config/index";

import { Products } from "./products";
import { User } from "./user";

export const Cart = sequelize.define("cart", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Cart.belongsTo(Products, { foreignKey: "productId" });
Cart.belongsTo(User, { foreignKey: "userId" });