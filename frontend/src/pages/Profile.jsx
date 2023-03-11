import axios from 'axios';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { login } from '../redux/apiClint';

function Profile() {

    const user = useSelector((state) => state?.user?.currentUser)

    const [file, setFile] = useState("");
    const [data, setData] = useState({});
    const [per, setPerc] = useState(null);

    const [password, setPassword] = useState("");
    const [inputs, setInputs] = useState({
        username: user.username,
        gmail: user.gmail,
        addrees: user.addrees,
        city: user.city,
        phone: user.phone,
    });
    console.log(inputs);
    useEffect(() => {
        const uploadFile = () => {
            const name = new Date().getTime() + file.name;

            console.log(name);
            const storageRef = ref(storage, file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log("Upload is " + progress + "% done");
                    setPerc(progress);
                    switch (snapshot.state) {
                        case "paused":
                            console.log("Upload is paused");
                            break;
                        case "running":
                            console.log("Upload is running");
                            break;
                        default:
                            break;
                    }
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setData((prev) => ({ ...prev, img: downloadURL }));
                    });
                }
            );
        };
        file && uploadFile();
    }, [file]);

    // console.log(data.img);

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        if (password) {
            try {
                await axios.put(
                    "http://localhost:8800/api/user/",
                    { ...inputs, password },
                    { withCredentials: true },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                login(dispatch, (inputs));
                setData({ ...data, img: inputs.img }); // update the image URL in state
            } catch (err) {
                console.log(err);
            }
        }
        if (data) {
            try {
                await axios.put(
                    "http://localhost:8800/api/user/",
                    { ...inputs, photo: data.img },
                    { withCredentials: true },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                login(dispatch, (inputs));
                setData({ ...data, img: inputs.img }); // update the image URL in state
            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await axios.put(
                    "http://localhost:8800/api/user/",
                    inputs,
                    { withCredentials: true },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                setData({ ...data, img: inputs.img }); // update the image URL in state
            } catch (err) {
                console.log(err);
            }

        }
    };

    useEffect(() => {
        if (data.img) {
            navigate("/profile");
        }
    }, [data.img]);



    return (
        <div className='profile'>
            <div className="column">
                <div className="row information">
                    <div className="column info">
                        <h3>name: {user.username}</h3>
                        <h3>gmail: {user.gmail}</h3>
                        <input
                            type="file"
                            id="file"
                            onChange={(e) => setFile(e.target.files[0])}
                            className="custom-file-input"
                        />
                    </div>
                    <img src={
                        file
                            ? URL.createObjectURL(file)
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    } width="140px" height="140px" alt="" />
                </div>
                <h2>Setting</h2>
                <form className="setting">
                    <input onChange={handleChange} name="username" type="text" className="item-setting" value={inputs.username} />
                    <input onChange={handleChange} name="gmail" type="text" className="item-setting" value={inputs.gmail} />
                    <input onChange={handleChange} name="addrees" type="text" className="item-setting" value={inputs.addrees} />
                    <input onChange={handleChange} name="city" type="text" className="item-setting" value={inputs.city} />
                    <input onChange={handleChange} name="phone" type="namber" className="item-setting" value={inputs.phone} />
                </form>
                <button onClick={() => handleSubmit()}>Edit</button>
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="item-setting" placeholder='enter your new password' />
            </div>
        </div>
    )
}

export default Profile