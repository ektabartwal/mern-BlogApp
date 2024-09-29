import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from ".routes/Auth.route.js";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("error");
  });

const app = express();

app.get("/test", (req, res) => {
  res.json({
    message: "api tested",
  });
});

app.listen(3000, () => {
  console.log("listening");
});
app.use("api/auth", authRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server Error";
  res.statu(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
