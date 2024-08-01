"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putProduct = void 0;
const express_1 = __importDefault(require("express"));
const products_1 = require("../models/products");
const router = express_1.default.Router();
exports.putProduct = router.put("/:id", async (req, res) => {
    const idProduct = req.params.id;
    const newProduct = req.body;
    console.log("Données reçues par l'API:", newProduct);
    try {
        const product = await products_1.Products.findByPk(idProduct);
        if (product) {
            await product.update(newProduct);
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ message: "Produit non trouvé" });
        }
    }
    catch (error) {
        console.error("Erreur lors de la mise à jour du produit :", error);
        res
            .status(500)
            .json({ message: "Erreur lors de la mise à jour du produit" });
    }
});
