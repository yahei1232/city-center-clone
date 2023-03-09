import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import itemRoutes from "./routes/item.js";

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({ origin: 'http://localhost:3000', credentials: true })
);

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/item", itemRoutes);

//API CONNECT
app.listen(8800, () => {
    console.log("API working!");
});