import React from "react";

function About() {
  return (
    <div className="pt-10">
      <div className="section-heading">
        About<span className="blue-theme">.</span>
      </div>
      <div className="leading-relaxed pt-3">
        {/* <div className='flex'>
          <p className='pr-4'>-</p>
          <p>
            Currently studying for a Master's degree in Industrial Engineering
            in <span className='italic'>Yonsei University</span> under{' '}
            <a
              href='https://www.systemintelligencelab.website/'
              className='text-blue-500'
            >
              Systems Intelligence Laboratory
            </a>
            .
          </p>
        </div> */}
        <div className="flex">
          <p className="pr-4">-</p>
          <p>
            Interested in tech industry generally, ML/DL, Data Science, and how
            technology and data can bring about change.
          </p>
        </div>
        <div className="flex">
          <p className="pr-4">-</p>
          <p>Interested in leveraging AI to drive business value.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
