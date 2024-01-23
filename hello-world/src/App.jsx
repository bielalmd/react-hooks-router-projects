// Components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpression';

// Styles
import './App.css';
import Events from './components/Events';
import MyComponent from './components/MyComponent';
import Challange from './components/Challange';


function App() {
  return (
    <div className="App">
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent/>
      <Events/>
      <Challange/>
    </div>
  );
}

export default App;
