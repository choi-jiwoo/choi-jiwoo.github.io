import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./component/NavigationBar";
import Footer from "./component/Footer";
import Home from "./page/Home";
// import Project from './page/Project';

function App() {
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <Router>
      <div className="App flex flex-col">
        <div className="sticky-nav border-b border-slate-600">
          <NavigationBar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cv.pdf" exact />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
