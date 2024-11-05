import React from "react";

function Education() {
  return (
    <div className="pt-10">
      <div className="section-heading">
        Education<span className="blue-theme">.</span>
      </div>
      <div className="pt-3">
        <div className="flex flex-wrap justify-between">
          <div className="flex-none text-xl font-bold">Yonsei University</div>
          <div>September 2022 ~ August 2024</div>
        </div>
        <div className="pl-4 leading-7 pb-4">
          <div className="flex">
            <p className="pr-4">-</p>
            <p className="italic">
              Master of Science in Industrial Engineering
            </p>
          </div>
          <div className="flex">
            <p className="pr-4">-</p>
            <p>GPA: 4.07 / 4.5</p>
          </div>
          <div className="flex">
            <p className="pr-4">-</p>
            <p>
              Thesis: "Anomaly Detection and Localization Using Few-Shot
              Vision-Language Model Prompt Tuning"
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="basis-4/6 text-xl font-bold">Ajou University</div>
          <div>March 2019 ~ August 2022</div>
        </div>
        <div className="pl-4 leading-7 pb-4">
          <div className="flex">
            <p className="pr-4">-</p>
            <p className="italic">
              Bachelor of Business Administration in E-Business
            </p>
          </div>
          <div className="flex">
            <p className="pr-4">-</p>
            <p>GPA: 4.1 / 4.5</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="flex-none text-xl font-bold">
            University of San Carlos
          </div>
          <div>June 2013 ~ March 2016</div>
        </div>
        <div className="pl-4 leading-7 pb-4">
          <div className="flex">
            <p className="pr-4">-</p>
            <p>
              Completed 93 credits towards a B.S in Information and
              Communications Technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
