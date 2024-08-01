import express from "express";
import {Products} from "../models/products"
import { Orders } from "../models/orders";
import { Cart } from "../models/cart";

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

export const validateOrder = router.put("/orders/:id/validate", async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Orders.findByPk(orderId);
    if (order) {
      await order.update({ status: "validated" });
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Commande non trouvée" });
    }
  } catch (error) {
    console.error("Erreur lors de la validation de la commande :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export const updateCartItem = router.put("/cart/:id", async (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  try {
    const item = await Cart.findByPk(itemId);
    if (item) {
      await item.update(updatedItem);
      res.status(200).json(item);
    } else {
      res.status(404).json({ message: "Article non trouvé" });
    }
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'article du panier :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});