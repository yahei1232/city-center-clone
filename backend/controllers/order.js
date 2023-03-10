import { db } from "../connect.js";
import jwt from "jsonwebtoken";

export const order = (req, res) => {

    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not logged in!");

    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("Token is not valid!");
        const q =
            "INSERT INTO orders(`userId`, `itemId`, `quantity`, `amount`, `address`) VALUES (?)";

        const values = [
            userInfo.id,
            req.body.itemId,
            req.body.quantity,
            req.body.amount,
            req.body.address,
        ];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.json("product has been created.");
        });
    });
};

export const getOrder = (req, res) => {

    const q =
        "SELECT * FROM orders";

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
};

export const doneOrder = (req, res) => {
    const orderId = req.params.id;

    console.log(orderId);

    const q = `
    UPDATE orders 
    SET 
    status = 'done'
    WHERE 
    id = ${orderId}
    `;

    db.query(q, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json(data);
    });
};