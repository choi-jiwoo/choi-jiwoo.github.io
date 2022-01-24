import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Cv from './page/Cv';
import Home from './page/Home';
import Portfolio from './page/Portfolio';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/my-website' exact element={<Home />} />
          <Route path='/cv' exact element={<Cv />} />
          <Route path='/portfolio' exact element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
