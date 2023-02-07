import React from "react";

function Register() {
    return (
        <div className="login">
            <h1>Account Reguster</h1>
            <form className="auth">
                <div className="welcome">
                    <h2>Welcome To City Center</h2>
                    <p>If you have an account click here.</p>
                    <h2>LOGIN</h2>
                </div>
                <div className="inputs">
                    <input type="username" id="input-field" placeholder="username" />
                    <input type="email" id="input-field" placeholder="Email" />
                    <input type="password" id="input-field" placeholder="Password" />
                    <input type="Adrees" id="input-field" placeholder="Adrees" />
                    <input type="Telephone" id="input-field" placeholder="Telephone" />
                    <input type="City" id="input-field" placeholder="City" />
                    <input className="submit" type="submit" />
                </div>
            </form>
        </div>
    );
}

export default Register;
