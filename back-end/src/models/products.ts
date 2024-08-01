import {DataTypes} from "sequelize"

import {sequelize} from "../config/index"

export const Products = sequelize.define("products", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

