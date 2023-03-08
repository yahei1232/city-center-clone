import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState([]);


    const handleDelete = async (id) => {
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "product",
            headerName: "Product",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params.row.img} alt="" />
                        {params.row.name}
                    </div>
                );
            },
        },
        {
            field: "price",
            headerName: "Price",
            width: 160,
        },
        {
            field: "desc",
            headerName: "desc",
            width: 160,
        },
        {
            field: "memory",
            headerName: "memory",
            width: 160,
        },
        {
            field: "cpu",
            headerName: "cpu",
            width: 160,
        },
        {
            field: "gpu",
            headerName: "gpu",
            width: 160,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/product/" + params.row.id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
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