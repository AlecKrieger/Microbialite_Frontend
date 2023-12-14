import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Data from './pages/Data';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
            <Routes>
              <Route exact path="/" element={<Home/>}>
                
              </Route>
              <Route path="/Data/*" element={<Data/>}>
                
              </Route>
            </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
