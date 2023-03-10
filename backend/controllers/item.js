import { db } from "../connect.js";


export const addItem = (req, res) => {

    const q =
        "INSERT INTO item(`name`, `description`, `price`, `img`, `catId`, `memory`, `cpu`, `gpu`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.img,
        req.body.catId,
        req.body.memory,
        req.body.cpu,
        req.body.gpu,
    ];
    console.log(values);
    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.json("Item has been created.");
    });
};


export const items = (req, res) => {

    let query = `SELECT * FROM item ORDER BY price ASC`;

    db.query(query, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

export const getItems = (req, res) => {

    const itemId = req.params.id

    let query = `
    SELECT * FROM item 
    WHERE id = ?
    `;

    db.query(query, [itemId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

export const editItem = (req, res) => {

    const itemId = req.params.id;

    const q = `
    UPDATE item 
    SET 
    name = ?, 
    description = ?, 
    price = ?, 
    img = ?, 
    catId = ?, 
    memory = ?, 
    cpu = ?, 
    gpu = ?
    WHERE 
    id = ${itemId}
    `;

    const values = [
        req.body.name,
        req.body.description,
        req.body.price,
        req.body.img,
        req.body.catId,
        req.body.memory,
        req.body.cpu,
        req.body.gpu,
    ];

    db.query(q, values, (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).json(err);
        }

        return res.json("Product has been updated.");
    });
};