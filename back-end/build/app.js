"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const get_1 = require("./routes/get");
const post_1 = require("./routes/post");
const put_1 = require("./routes/put");
const delete_1 = require("./routes/delete");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api/products", get_1.getProducts);
app.use("/api/products", post_1.postProduct);
app.use("/api/products", put_1.putProduct);
app.use("/api/products", delete_1.deleteProduct);
app.use((req, res) => res.status(404).json({ msg: "This route does not exists" }));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
