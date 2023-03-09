import express from "express";
import { getUsers, editUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.put("/", editUser);

export default router;