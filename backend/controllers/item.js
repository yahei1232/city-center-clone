import { db } from "../connect.js";

export const filter = (req, res) => {
    const { cpu, gpu, memory, min, max } = req.query;

    let query = `
    SELECT * FROM item
    WHERE 1=1
    `;

    if (cpu) {
        query += `AND (cpu = '${cpu}')`;
    }

    if (gpu) {
        query += `AND (gpu = '${gpu}')`;
    }

    if (memory) {
        query += `AND (memory >= ${memory})`;
    }

    if (min && max) {
        query += `AND (price BETWEEN ${min} AND ${max})`;
    }

    query += `ORDER BY price ASC`;


    db.query(query, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

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

export const deleteitems = (req, res) => {
    const itemId = req.params.id;
    const q = "DELETE FROM item WHERE `id` = ?";
    db.query(q, [itemId], (err, data) => {
        console.log(err);
        if (err) return res.status(403).json("You can delete only your ITEM!");
        console.log(data);
        return res.json("ITEM has been deleted!");
    });
};

export const searchItems = (req, res) => {
    const name = req.params.name;
    const sql = `SELECT * FROM item WHERE name LIKE '%${name}%'`;
    db.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error fetching results");
        } else {
            res.json(results);
        }
    });
};

export const getRendomItems = (req, res) => {

    const sql = `
    SELECT * FROM item
    ORDER BY RAND()
    LIMIT 8;`;
    db.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error fetching results");
        } else {
            res.json(results);
        }
    });
};

export const getRendomItemsADS = (req, res) => {

    const sql = `
    SELECT * FROM item
    ORDER BY RAND()
    LIMIT 3;`;
    db.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error fetching results");
        } else {
            res.json(results);
        }
    });
};
