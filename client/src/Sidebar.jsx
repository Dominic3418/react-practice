import './sidebar.css'
const Sidebar = () => {
    return ( 
        <div className="sidebar">
            <div className='sidebarItem'>
                <div className='sidebarTitle'> ABOUT ME </div>
                <img src={require("./Images/man.jpg")} />
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam voluptatem provident 
                    totam cumque corporis blanditiis itaque? Debitis consequuntur, alias non, sint ipsam
                    ratione, ab numquam eligendi obcaecati corrupti velit libero.
                </p>
            </div>
            <div className='sidebarItem'>
                <div className='sidebarTitle'>CATEGORIES</div>
                <ul className='sidebarListItem'>
                    <li className='sidebarListItem'>Life</li>
                    <li className='sidebarListItem'>Music</li>
                    <li className='sidebarListItem'>Sports</li>
                    <li className='sidebarListItem'>Entertainment</li>
                    <li className='sidebarListItem'>Business</li>
                    <li className='sidebarListItem'>Travel</li>
                </ul>
            </div>
            <div className='sidebarItem'>
                <div className='sidebarTitle'>FOLLOW US</div>
                <div className='sidebarSocial'>
                <i className="sidebarIcon uil uil-facebook-f"></i> 
                <i className="sidebarIcon uil uil-instagram"></i> 
                <i className="sidebarIcon uil uil-twitter"></i>
                </div>
            </div>
        </div>
     );
}
 
export default Sidebar;