import React from 'react';

function Funfact() {
  return (
    <div className='pt-10'>
      <div className='section-heading'>Fun Facts</div>
      <div className='leading-7 pt-3'>
        <div className='flex'>
          <p className='pr-4'>-</p>
          <p>
            <a href='https://www.16personalities.com/' className='text-blue-500'>
              Personality test (MBTI)
            </a>
            &nbsp;result says I'm an&nbsp;
            <a
              href='https://www.16personalities.com/istj-personality'
              className='text-lg font-bold tracking-wider'
              >
              ISTJ
            </a>
            &nbsp;type of person&nbsp;
          </p>
        </div>
        <div className='flex'>
          <p className='pr-4'>-</p>
          <p>
          I love going café for working, studying, reading, and clearing up my mind
          </p>
        </div>
        <div className='flex'>
          <p className='pr-4'>-</p>
          <p>
          Using Apple products mostly
          </p>
        </div>
        <div className='flex'>
          <p className='pr-4 indent-4'>-</p>
          <p>
          💻 MacBook Air 13 (M3)
          </p>
        </div>
        <div className='flex'>
          <p className='pr-4 indent-4'>-</p>
          <p>
          📱 Iphone 12 Pro
          </p>
        </div>
        <div className='flex'>
          <p className='pr-4'>-</p>
          <p>
          Traveled places:
          </p>
        </div>
      </div>
      <div className='flag flex flex-wrap gap-2 pl-3'>
        <p>
          <span>🇵🇭</span>
        </p>
        <p>
          <span>🇭🇰</span>
        </p>
        <p>
          <span>🇲🇴</span>
        </p>
        <p>
          <span>🇸🇬</span>
        </p>
        <p>
          <span>🇲🇾</span>
        </p>
      </div>
    </div>
  );
}

export default Funfact;
