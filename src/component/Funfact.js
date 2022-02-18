import React from 'react';

function Funfact() {
  return (
    <div className='pt-20'>
      <div className='section-heading'>Fun Fact</div>
      <div className='leading-7'>
        <p>
          - My MBTI is <span className='font-bold tracking-wide'>ISTJ</span>{' '}
          from
          <a href='https://www.16personalities.com/istj-personality' className='text-blue-500'>
            {' '}
            16personalities.com
          </a>
        </p>
        <p>- I love coffee and café</p>
        <p>- A Mac user 💻</p>
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
