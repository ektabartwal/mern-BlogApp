import express from "express";
import { google, signup } from "../Controller/Auth.controller.js";
import { signin } from "../Controller/Auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);

export default router;
