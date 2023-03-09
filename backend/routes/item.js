import express from "express";
import {
    addItem,
    items
} from "../controllers/item.js";

const router = express.Router();

router.post("/addItem", addItem);
router.get("/items", items);

export default router;