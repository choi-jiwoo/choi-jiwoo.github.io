import React from 'react';

function Education() {
  return (
    <div className='pt-20'>
      <div className='section-heading'>Education</div>
      <div>
        <div className='flex justify-between'>
          <div className='text-xl font-bold'>Yonsei University</div>
          <div>September 2022 ~ Present</div>
        </div>
        <div className='pl-4 leading-7 pb-4'>
          <p className='italic'>
            - Master of Science in Industrial Engineering (Expected August 2024)
          </p>
        </div>
        <div className='flex justify-between'>
          <div className='text-xl font-bold'>Ajou University</div>
          <div>March 2019 ~ August 2022</div>
        </div>
        <div className='pl-4 leading-7 pb-4'>
          <p className='italic'>
            - Bachelor of Business Administration in E-Business
          </p>
          <p>- GPA: 4.1 / 4.5</p>
        </div>
        <div className='flex justify-between'>
          <div className='text-xl font-bold'>University of San Carlos</div>
          <div>June 2013 ~ March 2016</div>
        </div>
        <div className='pl-4 leading-7 pb-4'>
          <p>
            - Completed 93 credits towards a B.S in Information and
            Communications Technology
          </p>
        </div>
      </div>
    </div>
  );
}

export default Education;
