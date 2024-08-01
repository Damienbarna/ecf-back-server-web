"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postProduct = void 0;
const express_1 = __importDefault(require("express"));
const products_1 = require("../models/products");
const router = express_1.default.Router();
exports.postProduct = router.post("", async (req, res) => {
    const newProduct = req.body;
    const userId = req.user.id;
    console.log("Données reçues :", newProduct);
    try {
        const product = await products_1.Products.create({
            userId: userId,
            name: newProduct.name,
            url: newProduct.url,
            description: newProduct.description,
            image: newProduct.image,
            langage: newProduct.langage,
            categorie: newProduct.categorie,
        });
        res.status(201).json(product);
    }
    catch (error) {
        console.error("Erreur lors de l'ajout du produit :", error);
        res.status(500).json({ message: "Erreur lors de l'ajout du produit" });
    }
});
