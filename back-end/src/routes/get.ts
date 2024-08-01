import express from 'express';
import { Products } from '../models/products';
import { Orders } from '../models/orders';

const router = express.Router();

export const getProducts = router.get("/all", async (req, res) => {
  const userId = req.user.id;
  try {
    const product = await Products.findAll({ where: { userId: userId } });
    res.json(product);
  } catch (error) {
    console.error("Erreur lors de la récupération des produits :", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});



export const getOrders = router.get("/orders", async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error("Erreur lors de la récupération des commandes :", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});