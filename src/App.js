import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Registration from './pages/Registration';
import Login from './pages/Login';

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/registr' component={Registration}/>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
