"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProducts = void 0;
const express_1 = __importDefault(require("express"));
const products_1 = require("../models/products");
const router = express_1.default.Router();
exports.getProducts = router.get("/all", async (req, res) => {
    const userId = req.user.id;
    try {
        const product = await products_1.Products.findAll({ where: { userId: userId } });
        res.json(product);
    }
    catch (error) {
        console.error("Erreur lors de la récupération des produits :", error);
        res.status(500).json({ error: "Erreur serveur" });
    }
});
