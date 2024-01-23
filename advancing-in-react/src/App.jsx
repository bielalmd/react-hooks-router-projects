import './App.css';
import Sky from './assets/sky.jpg'
import ManageData from './components/ManageData';
function App() {
  return (
    <div className='App'>
      <h1>The new Section, the third</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem com pôr do sol e arvores" />
      </div>
      {/* Imagem em src */}
      <div>
        <img src={Sky} width="720" height="450" alt="Ceu escuro com lua no meio" />
      </div>
      <ManageData/>
    </div>
  );
}

export default App;
