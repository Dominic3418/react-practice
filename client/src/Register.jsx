import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
    return ( 
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm'>
                <label><b>Enter username</b></label>
                <input type='text' className='registerInput' placeholder='Enter Username....' />
                <label><b>Email</b></label>
                <input type='text' className='registerInput' placeholder='Enter your email....' />
                <label><b>Password</b></label>
                <input type='password' className='registerInput' placeholder='Enter password....' />
                <label><b>Confirm Password</b></label>
                <input type='password' className='registerInput' placeholder='Confirm password....' />
                <button className='registerButton'>Register</button>
            </form>
            <div className='loginSection'>
            <label>Already have an account?<br/>
            click the button below to Login.
            </label>
            <button className='loginRegisterButton'><Link className='link' to='/login'>Login</Link></button>
            </div>

        </div>
     );
}
 
export default Register;