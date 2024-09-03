import React from "react";
import Portfolio from "./Portfolio";
import projects from "../asset/projects.json";

function Project() {
  const capstoneProjectLen = 2;
  const personalProjectLen = projects.length - capstoneProjectLen;
  const personalProject = projects.slice(0, personalProjectLen);
  const capstoneProject = projects.slice(personalProjectLen, projects.length);

  return (
    <div className="pt-10">
      <div className="section-heading">
        Projects<span className="blue-theme">.</span>
      </div>
      <div className="my-10 text-center">
        <p className="font-bold text-3xl">Capstone Project</p>
        <p className="italic text-base">Oct 2021 ~ Dec 2021</p>
      </div>
      <div className="desc-container">
        <p className="content-desc indent-5">
          The project aims to provide people information on where to go when
          they are planning to involve in a{" "}
          <span className="font-bold italic">Sustainable Tourism</span>. As
          climate change became the biggest issue, the bad effects caused by
          overtourism in the traveling country also aroused. But there was not
          enough information on how a traveler can involve in the Sustainable
          Tourism.
        </p>
        <p className="content-desc indent-5 mt-2">
          In the project, our team narrowed the region to Jeju island since we
          saw negative effects caused by overtourism like rising rents and
          environmental pollutions in the region.
        </p>
      </div>
      <Portfolio list={capstoneProject} />
      <hr className="mt-16" />
      <div className="font-bold text-3xl my-10 text-center">Toy Projects</div>
      <div className="desc-container">
        <p className="content-desc indent-5">
          Projects done personally for fun 😁
        </p>
      </div>
      <Portfolio list={personalProject} />
    </div>
  );
}

export default Project;
