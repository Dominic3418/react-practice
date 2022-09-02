import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <div className='login'>
            <span className='loginTitle'>Login</span>
            <form className='loginForm'>
                <label>Email</label>
                <input type='text' className='loginInput' placeholder='Enter your email....' />
                <label>Password</label>
                <input type='password' className='loginInput' placeholder='Enter your password....' />
                <button className='loginButton'>Login</button>
            </form>
            <div className='RegisterSection'>
            <label>Dont have an account?<br/>
            click the button below to register.
            </label>
            <button className='loginRegisterButton'><Link className='link' to='/register'>Register</Link></button>
            </div>
        </div>
     );
}
 
export default Login;