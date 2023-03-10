import express from "express";
import { order, getOrder } from "../controllers/order.js";

const router = express.Router();

router.post("/", order);
router.get("/getAll", getOrder);

export default router;