import express from "express";
import {
    addItem,
} from "../controllers/item.js";

const router = express.Router();

router.post("/addItem", addItem);

export default router;