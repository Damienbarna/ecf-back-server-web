"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../config/index");
exports.Products = index_1.sequelize.define("products", {
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
});
