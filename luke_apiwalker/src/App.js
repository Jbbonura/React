import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LukeForm from './components/LukeForm';
import People from './views/People';
import Planets from './views/Planets';

function App() {
  return (
    <div >
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<LukeForm />}>
              <Route path="/people/:searchID" element={<People />}/>
              <Route path="/planets/:searchID" element={<Planets />}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
