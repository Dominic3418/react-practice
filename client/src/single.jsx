import './single.css';
import Sidebar from './Sidebar';
import Singlepost from './singlepost';
const Single = () => {
    return ( 
        <div className='Single'>
            <Singlepost/>
            <Sidebar />
        </div>
     );
}
 
export default Single;