import React from "react";
import { Link } from "react-router-dom";

import Base from "./base";
import WebProjects from "./frames/webProjects";

import "../styles/main.sass";

import engineeringProjects from "../js/engineeringProjects";

const Main = () => {
  return (
    <Base>
      <div className="main">
        <div className="introduction">
          <h2 className="main-title">Introduction</h2>
          <h3>
            some stupid text about me...
            <br />
            <br />
            Basic info: 20 years old male.
            <br />
            Status: Electrical engineering student (3rd year).
            <br />
            <br />
            Github:{" "}
            <a
              href="https://github.com/GiorgiR2"
              target="_blank"
              rel="noreferrer"
            >
              https://github.com/GiorgiR2
            </a>
            <br />
            And my email: grakv2020@agruni.edu.ge
          </h3>
        </div>

        <WebProjects />

        <div className="tools-i-use">
          <h2 className="main-title">Technical Skills</h2>

          <h2 className="cat-title">Languages / Frameworks:</h2>
          <nav>
            <ul>
              <li>JS/TS</li>
              <li>React/Redux</li>
              <li>RestApi</li>
              <li>MongoDB</li>
              <li>Node</li>
            </ul>
          </nav>

          <h2 className="cat-title">Tools / Software:</h2>
          <nav>
            <ul>
              <li>Linux (void, i3 wm)</li>
              <li>NeoVim + tmux</li>
              <li>Figma</li>
              <li>Git</li>
            </ul>
          </nav>

          <h2 className="cat-title">Other skills:</h2>
          <nav>
            <ul>
              {/*<li>Atmega Microcontroller Programming - C/Assembly</li>*/}
              <li>Analog and Digital circuits</li>
              {/*<li>Engineering Graphics (drawing, autocad)</li>*/}
              <li>C++</li>
              <li>...etc</li>
            </ul>
          </nav>

          <h2 className="cat-title">Engineering Projects</h2>
          <nav className="engineeringProjects">
            <ul>
              {engineeringProjects.map((el, n) => (
                <li>
                  <Link to={el.link} className="to" reload>
                    Project #{n + 1} - {el.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </Base>
  );
};

export default Main;
