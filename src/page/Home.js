import React from 'react';
import Profile from '../component/Profile';
import About from '../component/About';

function Home() {
  return (
    <div className='container-xl'>
      <Profile />
      <div className='mx-48'>
        <About />
      </div>
    </div>
  );
}

export default Home;
