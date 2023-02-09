import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='login'>
            <h1>Account Login</h1>
            <form className="auth">

                <div className="welcome">
                    <h2>Welcome To City Center</h2>
                    <p>By creating an account you will be able to shop faster, be up to date on an order's status,
                        and keep track of the orders you have previously made.</p>
                    <Link className='link' to='/register'>Reguster if you dont have account</Link>
                </div>
                <div className="inputs">
                    <input type="email" id="input-field" placeholder='Email' />
                    <input type="password" id="input-field" placeholder='Password' />
                    <input className='submit' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login