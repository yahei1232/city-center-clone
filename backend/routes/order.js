import express from "express";
import { order, getOrder, doneOrder } from "../controllers/order.js";

const router = express.Router();

router.post("/", order);
router.get("/getAll", getOrder);
router.put("/doneOrder/:id", doneOrder);

export default router;