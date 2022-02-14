import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Cv from './page/Cv';
import Home from './page/Home';
import Project from './page/Project';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/choijiwoo' exact element={<Home />} />
          <Route path='/choijiwoo/cv' exact element={<Cv />} />
          <Route path='/choijiwoo/project' exact element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
