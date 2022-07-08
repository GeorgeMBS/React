import React from 'react'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Empresa from './components/pages/Empresa'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

function App() {

  return (
    <Router>
        <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/empresa" element={<Empresa/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
        <Footer />
    </Router>
    
  );
}

export default App;