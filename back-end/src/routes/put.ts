import express from "express";
import {Products} from "../models/products"

const router = express.Router();


export const putProduct = router.put("/:id", async (req , res) => {
  const idProduct = req.params.id;
  const newProduct = req.body;
  console.log("Données reçues par l'API:", newProduct);

  try {
    const product = await Products.findByPk(idProduct);
    if (product) {
      await product.update(newProduct);
      res.status(200).json(product);
    } else {
      res.status(404).json({ message: "Produit non trouvé" });
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour du produit :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du produit" });
  }
});