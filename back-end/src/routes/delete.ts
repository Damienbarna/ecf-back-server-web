import express from "express";
import {Products} from "../models/products"

const router = express.Router();

export const deleteProduct = router.delete("/:id", async (req, res) => {
  const idProduct = parseInt(req.params.id);
  try {
    const product = await Products.findByPk(idProduct);
    if (product) {
      await product.destroy();
      res.status(200).json({ message: "Produit supprimé avec succès" });
    } else {
      res.status(404).json({ message: "Produit non trouvé" });
    }
  } catch (error) {
    console.error("Erreur lors de la suppression du produit :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du produit" });
  }
});

