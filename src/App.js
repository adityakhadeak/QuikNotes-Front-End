import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './Components/Navbar';
import About from './Components/About';
import Home from './Components/Home';
import Notestate from './Components/Notestate';
function App() {
  return (
    <Notestate>
    <Router>
      <>
      <Navbar />

      <Routes>
        <Route element={<About />} path='/about' />
        <Route element={<Home />} path='/home' />
      </Routes>

    </>
    </Router>
    </Notestate>
  );
}

export default App;
