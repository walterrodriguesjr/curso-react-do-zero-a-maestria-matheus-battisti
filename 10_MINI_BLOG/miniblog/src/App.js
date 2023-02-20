import './App.css';

/* componentes da biblioteca react-router-dom */
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

/* componentes de pages */
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

        <div className='container'>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/login' element={<Login />} />
            <Route path='/Register' element={<Register />} />
          </Routes>

        </div>

        <Footer />

      </ BrowserRouter>
    </div>
  );
}

export default App;
