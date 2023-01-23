import  FirstComponent  from "../src/components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import Events from './components/Events';
import Challenge from './components/Challenge';
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Fundamentos React</h1>
     <div>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <Challenge />
     </div>
    </div>
  );
}

export default App;

