import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Notestate from './Components/Notestate';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Alert from './Components/Alert';
import { useState } from 'react';
import MyAccount from './Components/MyAccount';
import MyInfo from './Components/MyInfo';
function App() {
  const [alert, setAlert] = useState(null)

  const showAlert=(type,message)=>{
    setAlert({type,message})
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }
  return (
    <Router>
    <MyInfo showAlert={showAlert}>
    <Notestate showAlert={showAlert} >
      
        <Navbar showAlert={showAlert} />
        <Alert alert={alert}/>
        <Routes>
          <Route element={<MyAccount />} path='/myaccount' />
          <Route element={<Home showAlert={showAlert}/>} path='/' />
          <Route element={<Login showAlert={showAlert}/>} path='/login' />
          <Route element={<SignUp showAlert={showAlert}/>} path='/signup' />

        </Routes>
     
    </Notestate>
    </MyInfo>
    </Router>
  );
}

export default App;
