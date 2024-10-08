import express from "express";
import { signup } from "../Controller/Auth.controller.js";
import { signin } from "../Controller/Auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
export default router;
