import './index.css';
import { Link } from 'react-router-dom';

const TopBar = () => {
  const user = false;  
  return ( 
        <div className='top'>
            <div className="topleft">
                <a href="#"><i className="topIcon uil uil-facebook-f"></i></a> 
                <a href=""><i className="topIcon uil uil-instagram"></i></a> 
                <a href=""><i className="topIcon uil uil-twitter"></i></a>
                
            </div>
            <div className="topcenter">
              <ul className="topList">
                <li className="topListItem"><Link className='link' to='/'>HOME</Link></li>
                <li className="topListItem"><Link className='link'>CONTACT</Link></li>
                <li className="topListItem"><Link className='link'>ABOUT</Link></li>
                <li className="topListItem"><Link className='link' to='/write'>WRITE</Link></li>
                <li className="topListItem">
                  {user && 'LOGOUT'}
                </li>
              </ul>
            </div>
            <div className="topright">
                {
                  user ?  (
                    <img className="topImage" 
                    src={require("./Images/profile.jpg")} />
                  ) : (
                    <ul className='topList'>
                      <li className='topListItem'>
                    <Link className='link' to='/login'>LOGIN</Link>
                    </li>
                    <li className='topListItem'>
                    <Link className='link' to='/register'>REGISTER</Link>
                    </li>
                    </ul>
                  )
                }
                <i className="topSearchIcon uil uil-search"></i>

            </div>
        </div>
        
    
     );
}
 
export default TopBar;