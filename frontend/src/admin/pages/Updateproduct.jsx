import PublishSharpIcon from '@mui/icons-material/PublishSharp';
import { useState } from "react";
export default function Product() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [img, setImg] = useState('');
    const [catId, setCatId] = useState('');
    const [memory, setMemory] = useState('');
    const [cpu, setCpu] = useState('');
    const [gpu, setGpu] = useState('');



    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
            </div>
            <div className="productTop">
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productInfoImg" />
                        <span className="productName">Apple Airpods</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                        <input type="text" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                        <input type="text" placeholder="Image URL" value={img} onChange={(e) => setImg(e.target.value)} />
                        <input type="text" placeholder="Category ID" value={catId} onChange={(e) => setCatId(e.target.value)} />
                        <input type="text" placeholder="Memory" value={memory} onChange={(e) => setMemory(e.target.value)} />
                        <input type="text" placeholder="CPU" value={cpu} onChange={(e) => setCpu(e.target.value)} />
                        <input type="text" placeholder="GPU" value={gpu} onChange={(e) => setGpu(e.target.value)} />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <PublishSharpIcon />
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
}