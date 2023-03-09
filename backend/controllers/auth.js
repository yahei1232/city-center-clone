import { db } from "../connect.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {

    const q = "SELECT * FROM user WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const q =
            "INSERT INTO user (`username`,`gmail`,`password`,`addrees`,`city`,`phone`,`isAdmin`) VALUE (?)";

        const values = [
            req.body.username,
            req.body.gmail,
            hashedPassword,
            req.body.addrees,
            req.body.city,
            req.body.phone,
            req.body.isAdmin,
        ];

        db.query(q, [values], (err, data) => {
            console.log(err);
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created.");
        });
    });
};

export const login = (req, res) => {
    //CHECK USER

    const q = "SELECT * FROM user WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        // console.log(data);
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        //Check password
        if (!req.body.password) {
            return res.status(400).json("Password is required!");
        }
        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!isPasswordCorrect)
            return res.status(400).json("Wrong username or password!");

        const token = jwt.sign({ id: data[0].id }, "secretkey");
        const { password, ...other } = data[0];
        res.status(200).json({ ...other, token });
    });
};