"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signin = void 0;
const express_1 = __importDefault(require("express"));
const User_1 = require("../../models/User");
const router = express_1.default.Router();
exports.signin = router.get("/:id", async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User_1.User.findByPk(userId, {
            attributes: ["name"],
        });
        if (!user) {
            return res.status(404).json({ message: "Utilisateur non trouvé" });
        }
        res.status(200).json({ name: user.getDataValue("name") });
    }
    catch (error) {
        console.error("Erreur lors de la récupération du nom d'utilisateur :", error);
        res.status(500).json({ message: "Erreur serveur" });
    }
});
