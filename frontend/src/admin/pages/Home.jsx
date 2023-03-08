import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';


function Home() {

    const [data, setData] = useState([]);


    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
            field: "user",
            headerName: "User",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="userListUser">
                        <img className="userListImg" src={params.row.photo} alt="" />
                        {params?.row?.username}
                    </div>
                );
            },
        },
        { field: "gmail", headerName: "gmail", width: 200 },
        { field: "addrees", headerName: "addrees", width: 200 },
        { field: "city", headerName: "city", width: 200 },
        { field: "phone", headerName: "phone", width: 200 },
        { field: "isAdmin", headerName: "isAdmin", width: 200 },
    ];


    return (
        <div className="userList">
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

export default Home