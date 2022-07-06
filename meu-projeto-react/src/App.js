import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'




function App() {

  return (
    <Router>
        <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/empresa'>empresa</Link>
            </li>
            <li>
              <Link to='/contato'>Contato</Link>
            </li>
        </ul>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/empresa" element={<Empresa/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </Router>
  );
}

export default App;