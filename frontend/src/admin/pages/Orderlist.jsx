import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { Link } from "react-router-dom";
import { useState } from "react";

function Orderslist() {
    const [data, setData] = useState([]);


    const handleDelete = async (id) => {
    };

    const handleDone = async (id) => {
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