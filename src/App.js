import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Footer from './component/Footer';
import Cv from './page/Cv';
import Home from './page/Home';
import Project from './page/Project';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
        <Routes>
          <Route path='/choijiwoo' exact element={<Home />} />
          <Route path='/choijiwoo/cv' exact element={<Cv cv={'./cv.pdf'} />} />
          <Route path='/choijiwoo/project' exact element={<Project />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
