import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Footer from './component/Footer';
import Home from './page/Home';
import Project from './page/Project';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar />
        <div className='content'>
          <Routes>
            <Route path='/choijiwoo' exact element={<Home />} />
            <Route path='/choijiwoo/cv.pdf' exact />
            <Route path='/choijiwoo/project' exact element={<Project />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
