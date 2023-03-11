import React, { useState } from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LoopIcon from '@mui/icons-material/Loop';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import logo from '../assets/logo.png';
import DiamondSharpIcon from '@mui/icons-material/DiamondSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import WorkSharpIcon from '@mui/icons-material/WorkSharp';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { searchItems } from '../redux/searchSlice';
import { logout } from '../redux/userSlice';

function Navbar() {

    const carts = useSelector(state => state?.cart?.cartItems)
    const navigate = useNavigate();

    const user = useSelector(state => state?.user?.currentUser?.token)
    // console.log(carts);

    //TOTAL PRICE CALCOLATE

    let totalPrice = 0;

    for (let i = 0; i < carts.length; i++) {
        const normalPrice = carts[i].price;
        const quantite = +carts[i].quantity;
        // console.log(quantite);
        // console.log(normalPrice);
        totalPrice += (quantite * normalPrice)
    }

    const [showMenu, setShowMenu] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);

    const [name1, setQuery] = useState("");
    // const [results, setResults] = useState([]);

    const cat = [
        "Computer Hardware",
        "PC & Laptops",
        "Gaming",
        "Printers & Scanners",
        "Electronics",
        "Software",
        "Powered by ASUS"
    ]

    const dispatch = useDispatch();

    const handleInputChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`http://localhost:8800/api/item/asdd/${name1}`,
                { withCredentials: true });
            // setResults(response?.data);
            // console.log(response?.data);
            dispatch(searchItems(response?.data));
            navigate("/itemssearch")
        } catch (error) {
            console.error(error);
        }
    };

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
        <div className='navbar'>
            <div className="top">
                <Link to="/">
                    <img src={logo} alt="" className="logo" />
                </Link>
                <div className="search-sub">
                    <input value={name1} onChange={handleInputChange} type="search" placeholder='Search' />
                    <button onClick={() => handleSearch()} className='sub'>SEARCH</button>
                </div>
                <div className="ui-account">
                    <div className="parent" onClick={() => setShowMenu(!showMenu)}>
                        <PersonIcon />
                        <h3>MY ACCOUNT</h3>
                        <ArrowDropDownIcon />
                        <div className="">

                            {showMenu && (
                                <ul className="menu" >
                                    {user ? (
                                        <>
                                            <Link className='link gray' to="profile">
                                                <li>Profile</li>
                                            </Link>
                                            <li onClick={logOutHandler}>Logout</li>
                                        </>
                                    ) : (
                                        <>
                                            <Link className='gray link' to="/login">
                                                <li>Login</li>
                                            </Link>
                                            <Link className='gray link' to="/register">
                                                <li>Reguster</li>
                                            </Link>
                                        </>
                                    )}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
                <div className="pcjod">
                    <LoopIcon />
                    <div className="cjod">
                        <Link to="/cart" className='gray'>
                            <ShoppingCartSharpIcon />
                        </Link>
                        <div className="Cart">Cart ({carts.length})</div>
                        <h3>${totalPrice}</h3>
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