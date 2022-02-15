import React from 'react';
import Portfolio from '../component/Portfolio';

function Project() {
  const projects = [
    {
      name: 'financialdatapy',
      url: 'https://github.com/choi-jiwoo/financialdatapy',
    },
    {
      name: 'naverplacescraper',
      url: 'https://github.com/choi-jiwoo/naver-place-scraper',
    },
    {
      name: 'musinsa-ranking',
      url: 'https://github.com/choi-jiwoo/musinsa-ranking',
    },
    {
      name: 'capstone project - React',
      url: 'https://github.com/choi-jiwoo/capstone-project-react',
    },
    {
      name: 'capstone project - Django',
      url: 'https://github.com/choi-jiwoo/capstone-project-django',
    },
  ];

  return (
    <div className='project'>
      <Portfolio list={projects} />
    </div>
  );
}

export default Project;
