import React from 'react'
import asd from '../assets/pikrepo.jpg'
function Cart() {
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
            <div className="cart-item">
                <h3><img src={asd} height='60px' width='60px' alt="" /></h3>
                <p>item name</p>
                <div className="">
                    <input
                        className='total'
                        type="number"
                    />
                </div>
                <h3>price</h3>
                <h3>description</h3>
                <h3>total price</h3>
            </div>

            <h1><button className='buy'>CHECKOUT NOW</button></h1>
        </div>
    )
}

export default Cart