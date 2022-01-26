import React from 'react';
import profile from '../asset/profile.jpg';

function Profile() {
  return (
    <div className='flex flex-col items-center'>
      <div className='pt-24 pb-6'>
        <img className='w-64 rounded-full' src={profile} alt='profile_image' />
      </div>
      <div className='font-bold'>Choi Ji Woo</div>
      <div className='text-2xl'>🇰🇷</div>
      <a className='text-blue-500' href='tel:01033634087'>
        +82) 010-3363-4087
      </a>
      <a className='text-blue-500' href='mailto:cho2.jiwoo@gmail.com'>
        cho2.jiwoo@gmail.com
      </a>
      <div className='flex gap-1 pt-2'>
        <a href='https://www.linkedin.com/in/choijiwoo/'>
          <img
            src='https://img.shields.io/badge/LinkedIn-2867B2?logo=linkedin&logoColor=ffffff'
            alt='LinkedIn'
          />
        </a>
        <a href='https://github.com/choi-jiwoo'>
          <img
            src='https://img.shields.io/badge/Github-ffffff?logo=github&logoColor=black'
            alt='Github'
          />
        </a>
        <a href='https://dev.to/choijiwoo'>
          <img
            src='https://img.shields.io/badge/dev.to-ffffff?logo=dev.to&logoColor=black'
            alt='dev.to'
          />
        </a>

        <a href='https://www.instagram.com/cho2_ji/'>
          <img
            src='https://img.shields.io/badge/Instagram-ff00ff?logo=instagram&logoColor=ffffff'
            alt='Instagram'
          />
        </a>
        <a href='https://twitter.com/cho2_ji'>
          <img
            src='https://img.shields.io/badge/Twitter-1DA1F2?logo=twitter&logoColor=ffffff'
            alt='Twitter'
          />
        </a>
      </div>
    </div>
  );
}

export default Profile;
