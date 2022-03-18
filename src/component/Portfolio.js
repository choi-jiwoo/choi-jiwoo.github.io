import React from 'react';
import ProjectImg from './ProjectImg';
import Image from './Image';

function Portfolio({ list }) {
  const imgs = [
    Image('financialdatapy'),
    Image('pyqtstockchart'),
    Image('naverplacescraper'),
    Image('musinsaranking'),
    Image('frontend'),
    Image('backend'),
  ];

  return (
    <div className=''>
      {list.map((item) => (
        <div className='mt-6' key={item.id}>
          <a className='projectName font-bold text-xl' href={item.url}>
            {item.name}
          </a>
          <p className='italic'>{item.stack}</p>
          <ProjectImg imgs={imgs[item.id]} />
          <p className='mt-2'>— {item.description}</p>
          <p className='mt-2'>— {item.whatidid}</p>
        </div>
      ))}
    </div>
  );
}

export default Portfolio;
