import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import EuMesmo from './components/EuMesmo';

function App() {

  const name = 'Gumercindo'

  return (
    <div className="App">
      <SayMyName nome="George" />
      <SayMyName nome="Michael" />
      <SayMyName nome={name} />
      <Pessoa
      nome="George"
      idade="33"
      profissao="Programador"
      foto="https://via.placeholder.com/150"
      />
      <EuMesmo />
      
    </div>
  )
}

export default App;
