import React from 'react';
import Profile from '../component/Profile';
import About from '../component/About';
import Timeline from '../component/Timeline';
import Education from '../component/Education';
import Quotes from '../component/Quotes';
import Funfact from '../component/Funfact';

function Home() {
  return (
    <>
      <Profile />
      <Quotes />
      <About />
      <Education />
      <Funfact />
      <Timeline />
    </>
  );
}

export default Home;
