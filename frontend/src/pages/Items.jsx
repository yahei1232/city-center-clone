import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';



function Items() {

    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');
    const [memory, setMemory] = useState('');
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');



    const show = [
        { value: "16", label: 16 },
        { value: "25", label: 25 },
        { value: '50', label: 50 },
        { value: '75', label: 75 },
        { value: '100', label: 100 },
    ];

    const dateorprice = [
        { value: "A-Z", label: "A-Z" },
        { value: "Z-A", label: "Z-A" },
        { value: 'Price (Low to height)', label: "Price (Low to height)" },
        { value: 'Price (height to Low)', label: "Price (height to Low)" },
        { value: 'date', label: "date" },
    ];

    return (
        <div className='items column'>
            <h1>asd</h1>
            <div className="items-of-cat" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="items-img" style={{ flexBasis: "25%" }}>
                    <img src="https://image.citycenter.jo/cachewebp/catalog/category-images/audio-160x100.webp" alt="" />
                    <h3>Audo</h3>
                </div>
            </div>
            <hr />


            <form
                className='filter'
                onSubmit={e => {
                    e.preventDefault();
                }}>
                <label>
                    CPU:
                    <select value={cpu} onChange={e => setCpu(e.target.value)}>
                        <option value="">Select CPU</option>
                        <option value="Intel Core i7">Intel Core i7</option>
                        <option value="Intel Core i9">Intel Core i9</option>
                        <option value="AMD Ryzen 5">AMD Ryzen 5</option>
                        <option value="AMD Ryzen 7">AMD Ryzen 7</option>
                    </select>
                </label>
                <br />
                <label>
                    GPU:
                    <select value={gpu} onChange={e => setGpu(e.target.value)}>
                        <option value="">Select GPU</option>
                        <option value="Nvidia GeForce RTX 3060">Nvidia GeForce RTX 3060</option>
                        <option value="AMD Radeon RX 6700 XT">AMD Radeon RX 6700 XT</option>
                        <option value="RTX 3050TI">RTX 3050TI</option>
                    </select>
                </label>
                <br />
                <label>
                    Memory:
                    <select value={memory} onChange={e => setMemory(e.target.value)}>
                        <option value="">Select Memory</option>
                        <option value="8">8 GB</option>
                        <option value="16">16 GB</option>
                        <option value="32">32 GB</option>
                    </select>
                </label>
                <br />
                <label>
                    Price Min:
                    <input type="number" value={priceMin} onChange={e => setPriceMin(e.target.value)} />
                </label>
                <br />
                <label>
                    Price Max:
                    <input type="number" value={priceMax} onChange={e => setPriceMax(e.target.value)} />
                </label>
                <br />
                <button type="submit">Filter</button>
            </form>
            <hr />

            <div className="grid-show row">
                <div className="grid row">
                    <div className="g row">
                        <GridViewSharpIcon />
                        Grid
                    </div>
                    <div className="g row">
                        <ListSharpIcon />
                        Grid
                    </div>
                    <div className="g row">
                        Compare List ( 0 )
                    </div>
                </div>
                <div className="show">
                    Show:
                    <select>
                        {show.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    Sort By:
                    <select>
                        {dateorprice.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="card column" style={{ flexBasis: "25%" }}>
                    <img src="https://image.citycenter.jo/cachewebp/catalog/002023/22023/790AAASTRIX-550x400.webp" alt="" />
                    <Link className='link' to={`/item/1`}>
                        <h2>hp</h2>
                    </Link>
                    <p>HP Laptop 15s-eq1026ne AMD Ryzen 5 4500U up to 4.0GHz 6-Cores 11M Cash , 8GB RAM DDR4 (upgradable) ,  256 GB PCIe® NVMe™ M.2 SSD (upgradable) , 15.6"  HD 250nits Anti-glare 220 nits 45% NTSC Display , AMD Radeon Vega 6 Graphic Card , Camera , Wireless , Bluetooth , Arabic / English Keyboard , Dos</p>
                    <h2>$200</h2>
                    <p>CPU: i7</p>
                    <p>GPU: gtx1650</p>
                    <p>Memory: 16 GB</p>
                </div>
            </div>
        </div>
    )
}

export default Items