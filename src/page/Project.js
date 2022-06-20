import React from 'react';
import Portfolio from '../component/Portfolio';
import projects from '../asset/projects.json';

function Project() {
  const capstoneProjectLen = 2;
  const personalProjectLen = projects.length - capstoneProjectLen;
  const personalProject = projects.slice(0, personalProjectLen);
  const capstoneProject = projects.slice(personalProjectLen, projects.length);

  return (
    <div className='project'>
      <div className='font-bold text-3xl mt-8'>Personal Projects</div>
      <p className='indent-5 mt-2'>Projects done personally.</p>
      <hr className='mt-4' />
      <Portfolio list={personalProject} />
      <div className='font-bold text-3xl mt-8'>Capstone Project</div>
      <p className='indent-5 mt-2'>
        The project aims to provide people information on where to go when they
        are planning to involve in a Sustainable Tourism. As climate change
        became the biggest issue, the bad effects caused by overtourism in the
        traveling country also aroused. But there was not enough information on
        how a traveler can involve in the sustainable tourism.
      </p>
      <p className='indent-5 mt-2'>
        In the project, our team narrowed the region to Jejudo since we saw
        negative effects caused by overtourism like rising rents and
        environmental pollutions in the region.
      </p>
      <hr className='mt-4' />
      <Portfolio list={capstoneProject} />
    </div>
  );
}

export default Project;
