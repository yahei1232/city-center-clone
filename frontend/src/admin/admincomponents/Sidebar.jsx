import React from 'react'
import LineStyleSharpIcon from '@mui/icons-material/LineStyleSharp';
import { Link } from 'react-router-dom';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';
import LocalMallSharpIcon from '@mui/icons-material/LocalMallSharp';
import SellSharpIcon from '@mui/icons-material/SellSharp';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/admin" className="link">
                            <li className="sidebarListItem active">
                                <LineStyleSharpIcon className="sidebarIcon" />
                                Home
                            </li>
                        </Link>
                        <Link to='/adminnewuser' className='link'>
                            <li className="sidebarListItem">
                                <AddCircleOutlineSharpIcon className="sidebarIcon" />
                                Add user
                            </li>
                        </Link>
                        <Link to='adminproductlst' className='link'>
                            <li className="sidebarListItem">
                                <LocalMallSharpIcon className="sidebarIcon" />
                                Product
                            </li>
                        </Link>
                        <Link to='adminorderlist' className='link'>
                            <li className="sidebarListItem">
                                <SellSharpIcon className="sidebarIcon" />
                                order
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar