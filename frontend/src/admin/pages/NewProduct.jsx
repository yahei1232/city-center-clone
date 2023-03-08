import { useState } from "react";

export default function NewProduct() {

    const [name, setName] = useState('');
    const [description, setDesc] = useState('');
    const [catId, setCatId] = useState();
    const [memory, setMemory] = useState('');
    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');
    const [price, setPrice] = useState('');

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                    <label>Name</label>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Apple Airpods" />
                </div>
                <div className="addProductItem">
                    <label>description</label>
                    <input onChange={(e) => setDesc(e.target.value)} type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>price</label>
                    <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>catId</label>
                    <input onChange={(e) => setCatId(e.target.value)} type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>Memory</label>
                    <input onChange={(e) => setMemory(e.target.value)} type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>Cpu</label>
                    <input onChange={(e) => setCpu(e.target.value)} type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>Gpu</label>
                    <input onChange={(e) => setGpu(e.target.value)} type="text" placeholder="123" />
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    );
}