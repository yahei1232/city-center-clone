import React from 'react'
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';

function Navbar() {
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
                    <img src="https://media.istockphoto.com/id/537373196/photo/trees-forming-a-heart.jpg?s=612x612&w=0&k=20&c=onZKNjkycICe4q2ZDnKi39z42Ax9tpZT7pph-2e5Seo=" alt="" className="topAvatar" width="40px" height="40px" />
                </div>
            </div>
        </div>
    );
}

export default Navbar