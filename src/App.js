import './App.css';
import { Title } from "./components/Title";
import { CardBands } from "./components/CardBands";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title>Meu Primeiro Projeto React do Zero</Title>
        <CardBands />
      </header>
    </div>
  );
}

export default App;
