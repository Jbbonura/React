import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Welcome from './views/Welcome';
import Repeat from './views/Repeat';
import Colors from './views/Colors';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="home" element={<Welcome />}/>
          <Route path=":repeatMe" element={<Repeat />}/>
          <Route path=":repeatMe/:textColor/:backColor" element={<Colors />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
