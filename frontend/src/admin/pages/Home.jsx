import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

function Home() {

    const [data, setData] = useState([]);

    const fetchLaptops = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/user/`, {
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
        fetchLaptops();
    }, []);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

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