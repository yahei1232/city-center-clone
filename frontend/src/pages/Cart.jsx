import React, { useEffect, useState } from 'react'
import asd from '../assets/pikrepo.jpg'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart, updateQuantity } from '../redux/cartSlice';
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";

const KEY = process.env.REACT_APP_STRIPE;

function Cart() {

    const dispatch = useDispatch();
    const carts = useSelector((state) => state?.cart?.cartItems);
    const user = useSelector((state) => state?.user?.currentUser);

    let totalPrice = 0;
    for (let i = 0; i < carts.length; i++) {
        const normalPrice = carts[i].price;
        const quantity = +carts[i].quantity;
        totalPrice += quantity * normalPrice;
    }


    const [stripeToken, setStripeToken] = useState(null);
    const navigate = useNavigate();

    const handleClearCart = async (e) => {
        e.preventDefault();
        try {
            for (const cartItem of carts) {
                const order = {
                    itemId: cartItem.id,
                    quantity: cartItem.quantity,
                    amount: (cartItem.price * cartItem.quantity),
                    address: user.addrees
                };
                await axios.post("http://localhost:8800/api/order/", order,
                    { withCredentials: true }
                    , {
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });
            }
            dispatch(clearCart());
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await axios.post('http://localhost:8800/api/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: totalPrice * 100,
                });
                navigate('/success', {
                    state: {
                        stripeData: res.data,
                        products: carts,
                    },
                });
            } catch (error) {
                console.log(error);
            }
        };
        stripeToken && makeRequest();
    }, [stripeToken, carts, totalPrice, navigate]);

    const handleQuantityChange = (id, quantity) => {
        dispatch(updateQuantity({ id, quantity }));
    };

    return (
        <div className='cart'>
            <h1>Shopping Cart</h1>
            <div className="cart-item">
                <h2>Image</h2>
                <h2>Product Name</h2>
                <h2>Quantity</h2>
                <h2>Unit Price</h2>
                <h2>Total</h2>
                <h2>Price</h2>
            </div>
            {carts.map((item, key) => (
                <div key={key} className="cart-item">
                    <h3><img src={asd} height='60px' width='60px' alt="" /></h3>
                    <p>{item.name}</p>
                    <div className="">
                        <input
                            className='total'
                            type="number"
                            value={item.quantity}
                            onChange={e => handleQuantityChange(item.id, e.target.value)}
                        />
                    </div>
                    <h3>{item.price}</h3>
                    <h3>{item.description}</h3>
                    <h3>{item.quantity * item.price}</h3>
                </div>
            ))}
            <StripeCheckout
                name="city center"
                image={asd}
                billingAddress
                shippingAddress
                description={`Your total is $${totalPrice}`}
                amount={totalPrice * 100}
                token={async (token) => {
                    const body = {
                        token,
                        amount: (carts.price * carts.quantity) * 100
                    };
                    try {
                        const response = await fetch('/payment', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(body)
                        });
                        setStripeToken(response)
                    } catch (error) {
                        console.log(error);
                    }
                }}

                stripeKey={KEY}
            >
                <h1><button className='buy' onClick={handleClearCart}>CHECKOUT NOW</button></h1>
            </StripeCheckout>
        </div>
    )
}

export default Cart