import React from 'react';
import Portfolio from '../component/Portfolio';
import projects from '../asset/projects.json';

function Project() {
  const personalProject = projects.slice(0, 3);
  const capstoneProject = projects.slice(3, 5);

  return (
    <div className='project'>
      <div className='pb-2 font-bold text-2xl'>Personal Project</div>
      <p className='indent-5'>Projects done personally.</p>
      <Portfolio list={personalProject} />
      <div className='pb-2 font-bold text-2xl'>Capstone Project</div>
      <p className='indent-5'>
        The project aims to provide people information on where to go when they
        are planning to involve in a Sustainable Tourism. As climate change
        became the biggest issue, the bad effects caused by overtourism in the
        traveling country also aroused. But there was not enough information on
        how a traveler can involve in the sustainable tourism.
      </p>
      <p className='indent-5'>
        In the project, our team narrowed the region to Jejudo since we saw
        negative effects caused by overtourism like rising rents and
        environmental pollutions in the region.
      </p>
      <Portfolio list={capstoneProject} />
    </div>
  );
}

export default Project;
