import './App.css';
import Navbar from "../src/components/Navbar/Navbar.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home';
import Footer from './components/Footer/Footer';
import Menu from './components/Pages/Menu';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>

    </div>
  );
}

export default App;
