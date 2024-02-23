import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import CategoriesRoutes from "./routes/categories.js";
import productRoutes from './routes/product.js'
import cartRoutes from './routes/cart.js'
import orderRoutes from './routes/order.js'
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
app.get("/test", (req, res) => {
  res.json("it works");
});

app.use("/api/auth", authRoutes);
app.use("/api/categories", CategoriesRoutes);
app.use('/api/product',productRoutes);
app.use('/api/cart',cartRoutes)
app.use('/api/order',orderRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
