import React from 'react';
import ProjectImg from './ProjectImg';
import Image from './Image';

function Portfolio({ list }) {
  const imgs = [
    Image('financialdatapy'),
    Image('naverplacescraper'),
    Image('musinsaranking'),
    Image('frontend'),
    Image('backend'),
  ];

  return (
    <div className='py-4 pl-2'>
      {list.map((item) => (
        <div className='pt-2 pb-4'>
          <a className='font-bold text-xl' href={item.url}>
            {item.name}
          </a>
          <p className='italic'>{item.stack}</p>
          <p className='indent-5 pt-2'>{item.description}</p>
          <p className='indent-5 pt-2'>{item.whatidid}</p>
          <ProjectImg imgs={imgs[item.id]} />
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
