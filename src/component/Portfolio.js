import React from 'react';

function Portfolio({ list }) {
  return (
    <>
      {list.map((item) => (
        <div className='pt-4 pb-8 border-b'>
          <a className='font-bold text-lg' href={item.url}>
            {item.name}
          </a>
          <p>description</p>
        </div>
      ))}
    </>
  );
}

export default Portfolio;
