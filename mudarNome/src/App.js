import './CSS/Reset.css';

import { BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import Header from './components/Header';

//Pages
import Home from './routes/pages/Home';
import Loja from './routes/pages/Loja';
import Contato from './routes/pages/Contato';

function App() {
  return (
          <div className="App">
              <BrowserRouter>

              <Header />

    <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Loja" element={<Loja />} />
                <Route path="/contato" element={<Contato />} />
    </Routes>

</BrowserRouter>
</div>
);
}

export default App;