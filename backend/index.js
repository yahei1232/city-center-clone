import express from "express";
const app = express();

app.use(express.json());

//API CONNECT
app.listen(8800, () => {
    console.log("API working!");
});