import './index.css';
import Header from './header';
import Posts from './Posts';
import Sidebar from './Sidebar';


const Home = () => {
    return ( 
        <>
        
        <Header/>
        <div className='home'>
            <Posts />
            
            <Sidebar />
            
        </div>
        </>
     );
}
 
export default Home;
