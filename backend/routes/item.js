import express from "express";
import {
    addItem,
    items,
    getItems,
    editItem,
    deleteitems,
    searchItems,
    getRendomItems
} from "../controllers/item.js";

const router = express.Router();

router.post("/addItem", addItem);
router.get("/items", items);
router.get("/:id", getItems);
router.put("/:id", editItem);
router.delete("/deleteitems/:id", deleteitems);
router.get("/search/:name", searchItems);
router.get("/rend/rendomitems", getRendomItems);

export default router;