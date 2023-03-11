import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from 'react';

export default function NewUser() {

    const [inputs, setInputs] = useState({
        username: "",
        gmail: "",
        password: "",
        addrees: "asd1",
        city: "",
        phone: "",
        isAdmin: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        console.log(e.target.name)
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/api/auth/register", inputs);
            navigate("/admin");
        } catch (err) {
            console.log("err");
            console.log(err);
        }
    };

    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form onSubmit={handleSubmit} className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input name="username" onChange={handleChange} type="text" placeholder="john" />
                </div>
                <div className="newUserItem">
                    <label>password</label>
                    <input name="password" onChange={handleChange} type="password" placeholder="password" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input name="gmail" onChange={handleChange} type="email" placeholder="john@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input name="phone" onChange={handleChange} type="text" placeholder="+1 123 456 78" />
                </div>
                <div className="newUserItem">
                    <label>city</label>
                    <input name="city" onChange={handleChange} type="text" placeholder="USA" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male" />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female" />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other" />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>isAdmin</label>
                    <select className="newUserSelect" name="isAdmin" onChange={handleChange}>
                        <option value="false">select</option>
                        <option value="true">true</option>
                        <option value="false">false</option>
                    </select>
                </div>
                <button className="newUserButton">Create</button>
            </form>
        </div>
    );
}