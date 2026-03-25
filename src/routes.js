import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Loja from './pages/Loja';
import Contato from './pages/Contato';

const AppRoutes = () => {
  return (
    <div className="App-Container">
      <nav className="Nav-Radical">
        <ul className="Nav-List">
          <li className="Nav-Item">
            <Link className="Nav-Link" data-text="HOME" to="/">HOME</Link>
          </li>
          <li className="Nav-Item">
            <Link className="Nav-Link" data-text="LOJA" to="/loja">LOJA</Link>
          </li>
          <li className="Nav-Item">
            <Link className="Nav-Link" data-text="CONTATO" to="/contato">CONTATO</Link>
          </li>
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
  );
};

export default AppRoutes;