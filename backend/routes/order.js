import express from "express";
import { order, getOrder, doneOrder, deleteOrder } from "../controllers/order.js";

const router = express.Router();

router.post("/", order);
router.get("/getAll", getOrder);
router.put("/doneOrder/:id", doneOrder);
router.delete("/deleteOrder/:id", deleteOrder);

export default router;