import React from "react";
import { Link } from "react-router-dom";

import "../styles/base.sass";

import rssIcon from "../icons/rss.svg";

const Base = ({ children }) => {
  return (
    <div className="base">
      <div className="top">
        <div className="center">
          <h1 className="my-name">Giorgi Rakviashvili's Webpage</h1>
          <div className="links">
            <nav>
              <ul>
                <li>
                  <Link to="/" className="link" reload>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="link" reload>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/links" className="link" reload>
                    Links
                  </Link>
                </li>
                <li>
                  <Link to="/archive" className="link" reload>
                    Archive
                  </Link>
                </li>
              </ul>
            </nav>
            <Link to="#" className="to" replace>
              <img src={rssIcon} alt="rss" className="rss-icon" />
            </Link>
          </div>
        </div>
      </div>
      <main className="child">{children}</main>
      <div className="bottom">
        <h2>
          <Link to="/" className="link" replace>
            https://giorgir.xyz
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Base;
