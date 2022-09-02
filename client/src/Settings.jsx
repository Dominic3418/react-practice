import './settings.css';
import Sidebar from './Sidebar';
const Settings = () => {
    return ( 
        <div className='Settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className='settingsForm'>
                    <label>Profile Picture</label>
                    <div className='settingsPP'>
                        <img src={require('./Images/profile.jpg')} />
                    <label htmlFor='fileInput'>
                        <i className='settingsPPIcon far fa-user-circle'></i>
                    </label>
                    <input type='file' id='fileInput' style={{display:'none'}}/>
                    </div>
                    <label>Username</label>
                    <input type='text' placeholder='Username' />
                    <label>Email</label>
                    <input type='text' placeholder='Email' />
                    <label>Password</label>
                    <input type='password' placeholder='Password'/>
                    <button className='settingsSubmit'>SUBMIT</button>
                </form>
            </div>
                <Sidebar/>
        </div>
     );
}
 
export default Settings;