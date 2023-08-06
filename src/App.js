import './App.css';
import { Routes, Route} from "react-router-dom"
import Control from './Control';
import Runner from './Runner';
import Actual from './Actual';
import Anuncio from './Anuncio';
import Formulario from './Formulario'; 
import Registro from './Registro';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Actual}/>
        <Route path="Runner"  Component={Runner} />
        <Route path="Formulario" Component={Formulario}/>
        <Route path="Anuncio" Component={Anuncio} />
        <Route path="Control" Component={Control} />
        <Route path="Registro" Component={Registro}/>
      </Routes>
    </div>
  );
}

export default App;
