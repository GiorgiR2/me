import React, { useState } from "react";

import "./webP.sass";

import projects from "../../js/projects";

const Main = () => {
  const [currentProjectN, setCurrentProjectN] = useState(0);

  return (
    <div className="projects">
      <h2 className="main-title">Web Projects_</h2>
      <div className="projectDisplay">
        <div className="interactiveWindow">
          <div className="tools">
            <h2>Tools</h2>
            <ul>
              {projects[currentProjectN].used.map((tool) => (
                <li>{tool}</li>
              ))}
            </ul>
            <a
              href={projects[currentProjectN].link}
              target="_blank"
              rel="noreferrer"
            >
              open in github
            </a>
          </div>

          <div className="visible">
            <h2 className="projectName">{projects[currentProjectN].title}</h2>
            <img src={projects[currentProjectN].image} alt="none" />
          </div>
        </div>

        <div className="switch">
          {projects.map((el, n) => {
            if (n === currentProjectN)
              return (
                <div
                  className="cube active"
                  onClick={() => setCurrentProjectN(n)}
                ></div>
              );
            return (
              <div className="cube" onClick={() => setCurrentProjectN(n)}></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
