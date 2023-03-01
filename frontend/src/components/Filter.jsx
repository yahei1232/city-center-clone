import React, { useState } from "react";

const Filter = () => {

    const [laptops, setLaptops] = useState([
        {
            id: 1,
            brand: 'Dell',
            model: 'Inspiron',
            cpu: 'Intel Core i7',
            gpu: 'NVIDIA GeForce',
            memory: 16,
            price: 999.99
        },
        {
            id: 2,
            brand: 'Apple',
            model: 'MacBook Pro',
            cpu: 'Intel Core i9',
            gpu: 'AMD Radeon Pro',
            memory: 32,
            price: 1999.99
        },
    ]);
    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');
    const [memory, setMemory] = useState('');
    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault();
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
            {laptops.map(laptop => (
                <div key={laptop.id}>
                    <p>Brand: {laptop.brand}</p>
                    <p>Model: {laptop.model}</p>
                    <p>CPU: {laptop.cpu}</p>
                    <p>GPU: {laptop.gpu}</p>
                    <p>Memory: {laptop.memory} GB</p>
                    <p>Price: ${laptop.price}</p>
                    <hr />
                </div>
            ))
            }
        </div >
    );
};

export default Filter;
