import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoopIcon from '@mui/icons-material/Loop';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import logo from '../assets/logo.png';
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import { Link } from 'react-router-dom';

function Navbar() {

    const [showMenu, setShowMenu] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);

    const cat = [
        "Computer Hardware",
        "PC & Laptops",
        "Gaming",
        "Printers & Scanners",
        "Electronics",
        "Software",
        "Powered by ASUS"
    ]

    return (
        <div className='navbar'>
            <div className="top">
                <img src={logo} alt="" className="logo" />
                <div className="search-sub">
                    <input type="search" name="" placeholder='Search' />
                    <button className='sub'>SEARCH</button>
                </div>
                <div className="ui-account">
                    <div className="parent" onClick={() => setShowMenu(!showMenu)}>
                        <PersonIcon />
                        <h3>MY ACCOUNT</h3>
                        <ArrowDropDownIcon />
                        <div className="">

                            {showMenu && (
                                <ul className="menu" >
                                    <li>
                                        <Link className='link' to='/login'>
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className='link' to='/register'>
                                            Reguster
                                        </Link>
                                    </li>
                                    <li>logout</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="pcjod">
                    <LoopIcon />
                    <div className="cjod">
                        <ShoppingCartSharpIcon />
                        <div className="Cart">Cart (0)</div>
                        <h3>JOD 0.00</h3>
                    </div>
                </div>
            </div>

            <div className="bot">
                <div className="cat">
                    <div className="dropdown">
                        <div className="dropdown-button" onClick={() => setShowMenu2(!showMenu2)}>
                            {cat.map((i, key) => (
                                <div key={key}>
                                    <Link className='link gray' state={{ from: i }} to='items'>
                                        <h4>{i}</h4>
                                    </Link>
                                </div>
                            ))}
                        </div>
                        {showMenu2 === 1 ? (
                            <ul className="dropdown-menu">
                                <li>Item 1</li>
                                <li>Item 2</li>
                                <li>Item 3</li>
                            </ul>
                        ) : (
                            showMenu2 === 2
                        ) ? (
                            <ul className="dropdown-menu">
                                <li>Item 4</li>
                                <li>Item 5</li>
                                <li>Item 6</li>
                            </ul>
                        ) : (<></>)}
                    </div>
                </div>
            </div>

            <div className="dist">
                <div className="dim">
                    <DiamondSharpIcon />
                    <div className="c">
                        <h4>#1 Computer Store</h4>
                        <p>Best computer store in jordan</p>
                    </div>
                </div>

                <div className="dim">
                    <FacebookSharpIcon />
                    <div className="c">
                        <h4>Follow Us On Facebook</h4>
                        <p>Particpate in our public community</p>
                    </div>
                </div>

                <div className="dim">
                    <WorkSharpIcon />
                    <div className="c">
                        <h4>Industry Experience</h4>
                        <p>Over 19 years of IT hardware supply</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar