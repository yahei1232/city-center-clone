import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import axios from 'axios';



function Items() {

    const [laptops, setLaptops] = useState([]);
    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');
    const [memory, setMemory] = useState('');
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');

    const fetchLaptops = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/item/filter?cpu=${cpu}&gpu=${gpu}&memory=${memory}&min=${priceMin}&max=${priceMax}`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setLaptops(response?.data);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        fetchLaptops();
    }, [cpu, gpu, memory]);


    const location = useLocation()
    const { from } = location.state || {};

    const options = [
        { value: "16", label: 16 },
        { value: "25", label: 25 },
        { value: '50', label: 50 },
        { value: '75', label: 75 },
        { value: '100', label: 100 },
    ];

    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = event => {
        setSelectedOption(options.find(option => option.value === event.target.value));
    };


    return (
        <div className='items column'>
            <h1>{from}</h1>
            <div className="items-of-cat" style={{ display: "flex", flexWrap: "wrap" }}>
                <div className="items-img" style={{ flexBasis: "25%" }}>
                    <img src="https://image.citycenter.jo/cachewebp/catalog/category-images/audio-160x100.webp" alt="" />
                    <h3>Audo</h3>
                </div>
            </div>

            {/* FILTER */}

            <form
                className='filter'
                onSubmit={e => {
                    e.preventDefault();
                    fetchLaptops();
                }}>
                <label>
                    CPU:
                    <select value={cpu} onChange={e => setCpu(e.target.value)}>
                        <option value="">Select CPU</option>
                        <option value="Intel Core i7">Intel Core i7</option>
                        <option value="Core i7">Core i7</option>
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
                    <select value={selectedOption.value} onChange={handleChange}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                    Sort By:
                    <select value={selectedOption.value} onChange={handleChange}>
                        {options.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="cards" style={{ display: "flex", flexWrap: "wrap" }}>
                {laptops.map(laptop => (
                    <div className="card column" key={laptop.id} style={{ flexBasis: "25%" }}>
                        <img src="https://image.citycenter.jo/cachewebp/catalog/002023/22023/790AAASTRIX-550x400.webp" alt="" />
                        {/* <p>Brand: {laptop.brand}</p>
                        <p>Model: {laptop.model}</p> */}
                        <Link className='link' to={`/item/${laptop.id}`}>
                            <h2>{laptop.name}</h2>
                        </Link>
                        <p>descdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdescdesc</p>
                        <h2>${laptop.price}</h2>
                        <p>CPU: {laptop.cpu}</p>
                        <p>GPU: {laptop.gpu}</p>
                        <p>Memory: {laptop.memory} GB</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Items