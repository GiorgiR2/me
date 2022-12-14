import React, { useState } from "react";

import "./webProjects.sass";

import projects from "../../js/projects";

const Main = () => {
  const [currentProjectN, setCurrentProjectN] = useState(0);
  const [loaded, setLoad] = useState(false);

  return (
    <div className="projects">
      <h2 className="main-title">Web Projects_</h2>
      <div className="projectDisplay">
        <div className="interactiveWindow">
          <div className="tools">
            <div className="vr-center">
              <h2>Tools</h2>
              <nav>
                <ul>
                  {projects[currentProjectN].used.map((el) => (
                    <li>{el}</li>
                  ))}
                </ul>
              </nav>
              <div className="github">
                <a
                  href={projects[currentProjectN].link}
                  target="_blank"
                  rel="noreferrer"
                >
                  open in github
                </a>
                {projects[currentProjectN].liveView ? (
                  <a
                    href={projects[currentProjectN].liveView}
                    target="_blank"
                    rel="noreferrer"
                  >
                    live demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          <div className="visible">
            <h2 className="projectName">{projects[currentProjectN].title}</h2>
            <img
              src={projects[currentProjectN].image[0]}
              alt={projects[currentProjectN].image[1]}
              onLoad={() => {
                setLoad(true);
              }}
            />
            {!loaded && <h1 className="loading">loading...</h1>}
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
              <div
                className="cube"
                onClick={() => {
                  setCurrentProjectN(n);
                  setLoad(false);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
