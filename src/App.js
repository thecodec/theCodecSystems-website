// import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home.jsx'
import Contact from './Pages/Contact/Contact.jsx';
import About from './Pages/About/About.jsx';
import Recallo from './Components/Landings/Products/Recallo/Recallo.jsx';
import Sivvar from './Components/Landings/Products/Sivvar/Sivvar';
import RecalloLite from './Components/Landings/Products/RecalloLite/RecalloLite.jsx';
import Intellio from './Components/Landings/Products/Intellio/Intellio.jsx';
import Verivo from './Components/Landings/Products/Verivo/Verivo.jsx';


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
              <Route path="/recallo" element={<Recallo />} />
              <Route path="/sivvar" element={<Sivvar />} />
              <Route path="/recallolite" element={<RecalloLite />} />
              <Route path="/intellio" element={<Intellio />} />
              <Route path="/verivo" element={<Verivo />} />
        </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;
