import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';

function Register() {

    const [inputs, setInputs] = useState({
        username: "",
        gmail: "",
        password: "",
        addrees: "",
        city: "",
        phone: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e.target.name)
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            navigate("/login");
        } catch (err) {
            console.log("err");
            console.log(err);
        }
    };


    return (
        <div className='login'>
            <h1>Account Reguster</h1>
            <form className="auth">

                <div className="welcome">
                    <h2>Welcome To City Center</h2>
                    <p>If you have an account click here</p><Link className='link' to="/login">LOGIN</Link>
                </div>
                <div className="inputs">
                    <input onChange={handleChange} type="username" name="username" id="input-field" placeholder='username' />
                    <input onChange={handleChange} type="gmail" name="gmail" id="input-field" placeholder='gmail' />
                    <input onChange={handleChange} type="password" name="password" id="input-field" placeholder='Password' />
                    <input onChange={handleChange} type="text" name="addrees" id="input-field" placeholder='addrees' />
                    <input onChange={handleChange} type="text" name="city" id="input-field" placeholder='city' />
                    <input onChange={handleChange} type="number" name="phone" id="input-field" placeholder='phone' />
                    <input onClick={handleSubmit} className='submit' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Register