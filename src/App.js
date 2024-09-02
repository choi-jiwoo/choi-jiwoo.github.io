import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Footer from './component/Footer';
import Home from './page/Home';
import Project from './page/Project';
import ScrollToTop from './scrollToTop';
import NotFound from './page/NotFound';

function App() {
  return (
    <Router>
      <div className='App flex flex-col'>
        <div className='sticky-nav border-b border-slate-600'>
          <NavigationBar />
        </div>
        <div className='content'>
          <ScrollToTop />
          <Routes>
            <Route path='/choijiwoo' exact element={<Home />} />
            <Route path='/choijiwoo/cv.pdf' exact />
            <Route path='/choijiwoo/project' exact element={<Project />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
