import React from 'react';
import profile from '../asset/profile.jpg';

function Profile() {
  return (
    <div className='flex flex-col items-center'>
      <div className='pt-20 pb-6'>
        <img className='w-64 rounded-full' src={profile} alt='profile_image' />
      </div>
      <div className='font-bold'>Choi Ji Woo</div>
      <div className='text-2xl'>🇰🇷</div>
      <a className='text-blue-500' href='tel:01033634087'>
        010-3363-4087
      </a>
      <a className='text-blue-500' href='mailto:cho2.jiwoo@gmail.com'>
        cho2.jiwoo@gmail.com
      </a>
      <div className='flex gap-1 pt-2'>
        <a href='https://www.linkedin.com/in/ji-woo-choi/'>
          <img
            src='https://img.shields.io/badge/LinkedIn-white?logo=linkedin&logoColor=2867B2'
            alt='LinkedIn'
          />
        </a>
        <a href='https://github.com/choi-jiwoo'>
          <img
            src='https://img.shields.io/badge/Github-white?logo=github&logoColor=black'
            alt='Github'
          />
        </a>
        <a href='https://velog.io/@choi-jiwoo'>
          <img
            src='https://img.shields.io/badge/velog-white?logo=velog&logoColor=%2320C997'
            alt='Velog'
          />
        </a>
        <a href='https://www.instagram.com/cho2_ji/'>
          <img
            src='https://img.shields.io/badge/Instagram-white?logo=instagram&logoColor=E4405F'
            alt='Instagram'
          />
        </a>
      </div>
    </div>
  );
}

export default Profile;
