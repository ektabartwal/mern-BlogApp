import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
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

app.get("/");

app.listen(3000, () => {
  console.log("listening");
});
