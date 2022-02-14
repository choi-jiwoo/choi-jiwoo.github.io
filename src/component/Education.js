import React from 'react';

function Education() {
  return (
    <div className='pt-20'>
      <div className='font-extrabold text-4xl pb-3'>Education</div>
      <div>
        <div className='flex justify-between'>
          <div className='text-xl font-bold'>Ajou University</div>
          <div>2019~present</div>
        </div>
        <div className='pl-4 leading-7'>
          <p>- Department of E-business</p>
          <p className='italic'>
            - Bachelor of Business Administration in E-Business (Expected August
            2022)
          </p>
          <p>- GPA: 4.1 / 4.5</p>
        </div>
        <div className='flex justify-between pt-4'>
          <div className='text-xl font-bold'>University of San Carlos</div>
          <div>2013~2016</div>
        </div>
        <div className='pl-4 leading-7'>
          <p>- Department of Computer, Information Sciences and Mathematics</p>
          <p className='italic'>
            - Bachelor of Science in Information and Communication Technology
            (unfinished)
          </p>
          <p>- GPA: xx.x% / 100%</p>
        </div>
      </div>
    </div>
  );
}

export default Education;
