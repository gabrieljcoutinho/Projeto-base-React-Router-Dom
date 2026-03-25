import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Loja from './pages/Loja';
import Contato from './pages/Contato';
import './reset.css';

function App() {
  return (
    <Router>
      <div className="App-Container">
        <nav className="Nav-Radical">
          <ul className="Nav-List">
            <li><Link className="Nav-Link" to="/">HOME</Link></li>
            <li><Link className="Nav-Link" to="/loja">LOJA</Link></li>
            <li><Link className="Nav-Link" to="/contato">CONTATO</Link></li>
          </ul>
        </nav>

        <main className="Main-Content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;