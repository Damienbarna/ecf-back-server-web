import { DataTypes } from "sequelize";
import { sequelize } from "../config/index";
import { Products } from "./products";
import { Orders } from "./orders";

export const OrderItem = sequelize.define("orderItem", {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

OrderItem.belongsTo(Products, { foreignKey: "productId" });

OrderItem.belongsTo(Orders, { foreignKey: "orderId" });