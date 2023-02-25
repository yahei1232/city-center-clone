function Profile() {
    return (
        <div className='profile'>
            <div className="column">
                <div className="row information">
                    <div className="column info">
                        <h3>name: yahya</h3>
                        <h3>gmail: yahya@gmail.com</h3>
                        <input
                            type="file"
                            id="file"
                            className="custom-file-input"
                        />
                    </div>
                    <img src={"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} width="140px" height="140px" alt="" />
                </div>
                <h2>Setting</h2>
                <form className="setting">
                    <input name="username" type="text" className="item-setting" />
                    <input name="gmail" type="text" className="item-setting" />
                    <input name="addrees" type="text" className="item-setting" />
                    <input name="city" type="text" className="item-setting" />
                    <input name="phone" type="namber" className="item-setting" />
                </form>
                <button>Edit</button>
                <input type="password" className="item-setting" placeholder='enter your new password' />
            </div>
        </div>
    )
}

export default Profile