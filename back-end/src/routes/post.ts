import express from "express"
import { Products } from "../models/products";
import { Cart } from "../models/cart";
import { Orders } from "../models/orders";

const router = express.Router();

export const postProduct = router.post("", async (req, res) => {
  const newProduct = req.body;
  const userId = req.user.id;
  console.log("Données reçues :", newProduct);

  try {
    const product = await Products.create({
      userId: userId,
      name: newProduct.name,
      url: newProduct.url,
      description: newProduct.description,
      image: newProduct.image,
      langage: newProduct.langage,
      categorie: newProduct.categorie,
    });
    res.status(201).json(product);
  } catch (error) {
    console.error("Erreur lors de l'ajout du produit :", error);
    res.status(500).json({ message: "Erreur lors de l'ajout du produit" });
  }
});



export const addItemToCart = router.post("/cart", async (req, res) => {
  const newItem = req.body;
  try {
    const item = await Cart.create(newItem);
    res.status(201).json(item);
  } catch (error) {
    
    console.error("Erreur lors de l'ajout de l'article au panier :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

export const payOrder = router.post("/orders/:id/pay", async (req, res) => {
  const orderId = req.params.id;
  try {
    const order = await Orders.findByPk(orderId);
    if (order) {
      await order.update({ status: "paid" });
      res.status(200).json(order);
    } else {
      res.status(404).json({ message: "Commande non trouvée" });
    }
  } catch (error) {
    console.error("Erreur lors du paiement de la commande :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});
