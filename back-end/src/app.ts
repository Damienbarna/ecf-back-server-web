import express from "express";
import cors from "cors";
import { getProducts } from "./routes/get";
import { postProduct } from "./routes/post";
import { putProduct } from "./routes/put";
import { deleteProduct } from "./routes/delete";

const app = express();


app.use(express.json());
app.use(cors());

app.use("/api/products", getProducts);
app.use("/api/products", postProduct);
app.use("/api/products", putProduct);
app.use("/api/products", deleteProduct);

app.use((req, res) =>
  res.status(404).json({ msg: "This route does not exists" })
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});