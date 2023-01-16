import  FirstComponent  from "../src/components/FirstComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import './App.css';

function App() {
  return (
    <div className="App">
     <h1>Fundamentos React</h1>
     <div>
      <FirstComponent />
      <TemplateExpressions />
     </div>
    </div>
  );
}

export default App;

