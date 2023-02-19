import React from 'react';

function Funfact() {
  return (
    <div className='pt-20'>
      <div className='section-heading'>Fun Facts</div>
      <div className='leading-7'>
        <p>
          -&nbsp;
          <a href='https://www.16personalities.com/' className='text-blue-500'>
            Personality test
          </a>
          &nbsp;result says I'm an&nbsp;
          <a
            href='https://www.16personalities.com/istj-personality'
            className='text-lg font-bold tracking-wider'
          >
            ISTJ
          </a>
          type of person.&nbsp;
        </p>
        <p>- I love going to a café to work, study, read, clear up my mind</p>
        <p>- Using Apple products mostly</p>
        <p className='indent-4'>- MacBook Pro, 2017 💻</p>
        <p className='indent-4'>- iphone 12 Pro 📱</p>
        <p>- Traveled places:</p>
      </div>
      <div className='flag flex flex-wrap gap-2 pl-3'>
        <p>
          <span>🇵🇭</span> Philippines
        </p>
        <p>
          <span>🇭🇰</span> Hong Kong
        </p>
        <p>
          <span>🇲🇴</span> Macau
        </p>
        <p>
          <span>🇸🇬</span> Singapore
        </p>
        <p>
          <span>🇲🇾</span> Malaysia
        </p>
      </div>
    </div>
  );
}

export default Funfact;
