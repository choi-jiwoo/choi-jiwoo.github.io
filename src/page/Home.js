import React from 'react';
import Profile from '../component/Profile';
import About from '../component/About';
import Timeline from '../component/Timeline';
import Footer from '../component/Footer';

function Home() {
  return (
    <div className='container-xl'>
      <Profile />
      <div className='mx-36'>
        <About />
        <Timeline />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
