import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Cv from './page/Cv';
import Home from './page/Home';
import Project from './page/Project';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/my-website' exact element={<Home />} />
          <Route path='/my-website/cv' exact element={<Cv />} />
          <Route path='/my-website/project' exact element={<Project />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
