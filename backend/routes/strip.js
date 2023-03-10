import express from "express";
const router = express.Router();
const KEY = process.env.STRIPE_KEY
import stripe from "stripe";

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);


router.post("/payment", (req, res) => {
    stripeInstance.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "usd",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
    );
});

export default router;