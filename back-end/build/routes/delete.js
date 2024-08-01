"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = void 0;
const express_1 = __importDefault(require("express"));
const products_1 = require("../models/products");
const router = express_1.default.Router();
exports.deleteProduct = router.delete("/:id", async (req, res) => {
    const idProduct = parseInt(req.params.id);
    try {
        const product = await products_1.Products.findByPk(idProduct);
        if (product) {
            await product.destroy();
            res.status(200).json({ message: "Produit supprimé avec succès" });
        }
        else {
            res.status(404).json({ message: "Produit non trouvé" });
        }
    }
    catch (error) {
        console.error("Erreur lors de la suppression du produit :", error);
        res
            .status(500)
            .json({ message: "Erreur lors de la suppression du produit" });
    }
});
