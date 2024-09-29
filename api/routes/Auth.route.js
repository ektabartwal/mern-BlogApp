import express from "express";
import { signup } from "../Controller/Auth.controller";

const authRoutes = express.Router();

routes.post("/signup", signup);
export default authRoutes;
