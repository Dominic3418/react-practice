import './index.css'

const Header = () => {
    return ( 
        <div className="header">
            <div className='headerTitles'>
                <span className='headerTitlesSm'> React & Node </span>
                <span className='headerTitlesLg'> Blog </span>
            </div>
            <img className='headerImg' src={require("./Images/amazon.jpg")} alt="" />
        </div>
     );
}
 
export default Header;