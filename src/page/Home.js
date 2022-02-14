import React from 'react';
import Profile from '../component/Profile';
import About from '../component/About';
import Timeline from '../component/Timeline';
import Footer from '../component/Footer';
import Education from '../component/Education';

function Home() {
  return (
    <>
      <Profile />
      <About />
      <Education />
      <Timeline />
      <Footer />
    </>
  );
}

export default Home;
