import './App.css';
import { Routes, Route} from "react-router-dom"
import Control from './Control';
import Runner from './Runner';
import Actual from './Actual';
import Anuncio from './Anuncio';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" Component={Actual}/>
        <Route path="Runner"  Component={Runner} />
        <Route path="Control" Component={Control} />
        <Route path="Anuncio" Component={Anuncio} />
      </Routes>
    </div>
  );
}

export default App;
