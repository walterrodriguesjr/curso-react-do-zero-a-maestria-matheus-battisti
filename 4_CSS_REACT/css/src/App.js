import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15;

  const redTitle = true;

  return (
    <div className="App">

      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de componente */}
      <MyComponent/>

      {/* CSS inline */}
      <p style={{color: "blue", padding: "25px", borderTop: "2px solid red"}}>Este elemento foi estilizado de forma inline</p>

      {/* CSS inline dinâmico */}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"})}>CSS dinâmico</h2>

      {/* classes dinâmicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter classe dinâmica</h2>

      {/* CSS modules */}
      <Title/>

    </div>
  );
}

export default App;
