import React from 'react';
import Profile from '../component/Profile';
import About from '../component/About';
import Timeline from '../component/Timeline';

function Home() {
  return (
    <div className='container-xl'>
      <Profile />
      <div className='mx-36'>
        <About />
        <Timeline />
      </div>
    </div>
  );
}

export default Home;
