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

export const editUser = (req, res) => {
    const token = req.cookies.accessToken;

    if (!token) {
        return res.status(401).json("Not logged in!");
    }

    jwt.verify(token, "secretkey", async (err, userInfo) => {
        if (err) {
            return res.status(500).json(err);
        }

        const { username, gmail, addrees, city, photo, phone } = req.body;

        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }

        const q = `
        UPDATE user 
        SET 
            username = '${username}',
            gmail = '${gmail}',
            addrees = '${addrees}',
            ${req.body.password ? `password = '${req.body.password}',` : ''}
            addrees = '${addrees}',
            city = '${city}',
            photo = '${photo}',
            phone = '${phone}'
        WHERE 
            id = ${userInfo.id};
        `;

        db.query(q, (err, data) => {
            if (err) {
                console.error(err);
                return res.status(500).json(err);
            }

            return res.json("User has been updated.");
        });
    });
};