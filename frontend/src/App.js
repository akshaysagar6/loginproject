import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Loginsignup from './Components/Assets/LoginSignup/Loginsignup';
import Login from './Components/Assets/LoginSignup/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Assets/LoginSignup/home';
import Home1 from './Components/Assets/LoginSignup/home2';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home1/>}></Route>
        <Route path='/signup' element={<Loginsignup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
