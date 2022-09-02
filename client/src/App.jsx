import TopBar from './topbar';
import Home from './home';
import Single from './single';
import Write from './write';
import Settings from './Settings';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
function App () {
    const user = false;
    return (
        <Router>
        <TopBar/>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/register'>
                    {user ? <Home/> :<Register />}
                </Route>
                <Route path='/login'>
                    {user ? <Home/> :<Login />}
                </Route>
                <Route path='/write'>
                {user ? <Write/> :<Register />}
                </Route>
                <Route path='/settings'>
                {user ? <Settings/> :<Register />}
                </Route>
                <Route path='/post/:postId'>
                    <Single />
                </Route>

            </Switch>
        </Router>
    );
} 
export default App;