import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

function Item() {

    const [quantity, setQuantity] = useState(1);
    const [item, setItem] = useState({});

    const dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...item, quantity }));
    };


    const location = useLocation();

    const itemId = location.pathname.split("/")[2];
    // console.log(item);

    const fetchLaptops = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/item/${itemId}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setItem(response?.data[0]);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchLaptops();
    }, []);


    return (
        <div className='Single column'>
            <div className="top">
                <div className="leftSide">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                    <img width='350px' height='350px' src="https://image.citycenter.jo/cachewebp/catalog/0112022/CK000-1200x1200.webp" alt="" />
                    <hr />
                </div>
                <div className="rightSide">
                    <div className='row spa'>
                        <div className="price">
                            <h1>${item.price}</h1>
                            <h3>$729.00</h3>
                            <h5>You save $50.00</h5>
                        </div>
                        <div className="type">
                            <div className="row">
                                <h3>Availability: </h3>
                                <p> In Stock</p>
                            </div>
                            <div className="row">
                                <h3>Product Code: </h3>
                                <p> 6J7G3EA</p>
                            </div>
                            <div className="row">
                                <h3>Brand: </h3>
                                <p> HP</p>
                            </div>
                        </div>
                    </div>
                    <hr className='hr' />
                    <div className="add-to-cart row">
                        <input min="1" value={quantity} onChange={handleQuantityChange} type="number" className='the-number' />
                        <button onClick={handleAddToCart} className='the-number add'>Add to Cart</button>
                        <button className='the-number get'>Get off by Email</button>
                    </div>
                </div>
            </div>
            <div className="bottom column" style={{ marginTop: "3rem" }}>
                <h4>Detals:</h4>
                <div className="row aic">
                    <h5>cpu</h5>
                    <p>{item.cpu}</p>
                </div>
                <hr />
                <div className="row aic">
                    <h5>gpu</h5>
                    <p>{item.gpu}</p>
                </div>
                <hr />
                <div className="row aic">
                    <h5>memory</h5>
                    <p>{item.memory}</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default Item