import React from 'react';
import Profile from '../component/Profile';
import About from '../component/About';
import Timeline from '../component/Timeline';
import Education from '../component/Education';
import Quotes from '../component/Quotes';
import Funfact from '../component/Funfact';
import Project from '../component/Project';

function Home() {
  return (
    <>
      <Profile />
      <Quotes />
      <About />
      <Education />
      <Funfact />
      <Timeline />
      <Project />
    </>
  );
}

export default Home;
