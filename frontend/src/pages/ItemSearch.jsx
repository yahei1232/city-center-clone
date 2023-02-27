import React from 'react'
import { Link } from 'react-router-dom';

function ItemsSearch() {
    return (
        <div className='items column'>
            <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="card column" style={{ flexBasis: "25%" }}>
                    <img src="https://image.citycenter.jo/cachewebp/catalog/002023/22023/790AAASTRIX-550x400.webp" alt="" />
                    <Link className='link' to={`/item/:id`}>
                        <h2>ASUS ROG</h2>
                    </Link>
                    <p>description</p>
                    <h2>$600</h2>
                    <p>CPU: i7</p>
                    <p>GPU: gtx 1650</p>
                    <p>Memory: 16 GB</p>
                </div>
            </div>
        </div>
    )
}

export default ItemsSearch