import React from 'react';
import Portfolio from '../component/Portfolio';
import projects from '../asset/projects.json';

function Project() {
  const personalProject = projects.slice(0, 3);
  const capstoneProject = projects.slice(3, 5);

  return (
    <div className='project'>
    </div>
  );
}

export default Project;
