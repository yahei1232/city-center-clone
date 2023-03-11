import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function ItemsSearch() {

    const itemsSearch = useSelector((state) => state?.search?.searchItem)

    return (
        <div className='items column'>
            <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
                {itemsSearch.map((item, key) => (
                    <div className="card column" key={key} style={{ flexBasis: "25%" }}>
                        <img src="https://image.citycenter.jo/cachewebp/catalog/002023/22023/790AAASTRIX-550x400.webp" alt="" />
                        {/* <p>Brand: {item.brand}</p>
                        <p>Model: {item.model}</p> */}
                        <Link className='link' to={`/item/${item.id}`}>
                            <h2>{item.name}</h2>
                        </Link>
                        <p>descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc</p>
                        <h2>${item.price}</h2>
                        <p>CPU: {item.cpu}</p>
                        <p>GPU: {item.gpu}</p>
                        <p>Memory: {item.memory} GB</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ItemsSearch