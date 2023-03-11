import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function Orderslist() {
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/order/getAll`, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setData(response?.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/api/order/deleteOrder/${id}`);
            fetchOrders()
        } catch (error) {
            console.error(error);
        }
    };

    const handleDone = async (id) => {
        try {
            await axios.put(`http://localhost:8800/api/order/doneOrder/${id}`);
            fetchOrders()
        } catch (error) {
            console.error(error);
        }
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "userId",
            headerName: "userId",
            width: 150,
            renderCell: (params) => {
                return (
                    < div className="productListItem" >
                        {params.row.userId}
                    </div >
                );
            },
        },
        {
            field: "amount",
            headerName: "amount",
            width: 160,
        },
        {
            field: "itemId",
            headerName: "itemId",
            width: 160,
        },
        {
            field: "address",
            headerName: "address",
            width: 160,
        },
        {
            field: "quantity",
            headerName: "quantity",
            width: 160,
        },
        {
            field: "status",
            headerName: "status",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <button onClick={() => handleDone(params.row.id)} className="productListEdit">done</button>
                        <DeleteOutlineSharpIcon
                            className="productListDelete"
                            onClick={() => handleDelete(params.row.id)}
                        />
                    </>
                );
            },
        },
    ];
    return (
        <div className="productList">
            <Link to="/adminnewproduct">
                <button className="productAddButton">Create</button>
            </Link>
            <DataGrid
                rows={data}
                disableSelectionOnClick
                columns={columns}
                pageSize={8}
                checkboxSelection
            />
        </div>
    );
}

export default Orderslist