import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

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
    </div>
  )
}

export default App;
