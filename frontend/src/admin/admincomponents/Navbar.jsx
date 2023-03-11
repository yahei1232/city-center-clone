import React from 'react'
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import axios from 'axios';
import { logout } from '../..//redux/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logOutHandler = async () => {
        try {
            await axios.post(`http://localhost:8800/api/auth/logout`);
            document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            dispatch(logout())
            navigate("/login")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">CityCenterAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNoneSharpIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <LanguageSharpIcon />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <SettingsSharpIcon />
                    </div>
                    <img onClick={() => logOutHandler()} src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    );
}

export default Navbar