import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from "./components/Route/Home";
import Service from "./components/Route/Service";
import Contatti from "./components/Route/Contatti";
import Error from "./components/Route/Error";
function App() {
  return (
    <Router>
      <div>
        <Routes>

          <Route path='/sinisky' exact element={<Home />}></Route>
          <Route path='/sinisky/Service' exact element={<Service />}></Route>
          <Route path='/sinisky/Contatti' exact element={<Contatti />}></Route>
       
          <Route path='*' element={<Error />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
