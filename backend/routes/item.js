import express from "express";
import {
    addItem,
    items,
    getItems,
    editItem
} from "../controllers/item.js";

const router = express.Router();

router.post("/addItem", addItem);
router.get("/items", items);
router.get("/:id", getItems);
router.put("/:id", editItem);

export default router;