import { db } from "../connect.js";

export const getUsers = (req, res) => {
    const q = "SELECT * FROM user";

    db.query(q, (err, data) => {
        if (err) {
            return res.status(500).json(err);
        } else {
            const users = data.map(user => {
                const { password, ...info } = user;
                return info;
            });
            return res.json(users);
        }
    });
};