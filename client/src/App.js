import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RaiseDoubt from './pages/RaiseDoubt';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path = "/" element={<Home/>}/>
            <Route  path= "login" element= {<Login/>}/>
            <Route path = "signup" element = {<Signup/>}/>
            <Route path = "raisedoubt" element = {<RaiseDoubt/>}/>
       </Routes>
    </div>
  );
}

export default App;
