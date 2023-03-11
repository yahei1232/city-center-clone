import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../redux/apiClint";
import { useDispatch, useSelector } from "react-redux";

function Login() {

    const [inputs, setInputs] = useState({
        username: "",
        password: "",
    });

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const { isFetching, error } = useSelector((state) => state?.user);
    console.log(useSelector((state) => state?.user));
    console.log(error);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, (inputs));
        navigate('/')
    };

    return (
        <div className='login'>
            <h1>Account Login</h1>
            <form className="auth">

                <div className="welcome">
                    <h2>Welcome To City Center</h2>
                    <p>By creating an account you will be able to shop faster, be up to date on an order's status,
                        and keep track of the orders you have previously made.</p>
                </div>
                <div className="inputs">
                    <input onChange={handleChange} name="username" type="email" id="input-field" placeholder='Email' />
                    <input onChange={handleChange} name="password" type="password" id="input-field" placeholder='Password' />
                    <input onClick={handleClick} className='submit' type="submit" />
                </div>
            </form>
        </div>
    )
}

export default Login