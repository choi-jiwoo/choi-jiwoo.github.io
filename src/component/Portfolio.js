import React from 'react';

function Portfolio({ list }) {
  return (
    <div className='py-4 pl-2'>
      {list.map((item) => (
        <div className='pt-2 pb-4'>
          <a className='font-bold text-xl' href={item.url}>
            {item.name}
          </a>
          <p className='indent-5 pt-2'>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
