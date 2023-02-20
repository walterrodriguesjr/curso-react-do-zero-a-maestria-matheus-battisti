
import './App.css';
import MyForm from './components/MyForm';
import Teste from './components/Teste';

function App() {
  return (
    <div className="App">
      <h2>forms</h2>
      {/* <MyForm /> */}
      <MyForm user={{name: "Josias", email: "josias@gmail.com", bio: "Sou policial", role: "admin"}}/>
      <Teste/>
    </div>
  );
}

export default App;
