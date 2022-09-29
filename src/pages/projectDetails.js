import React, { useLayoutEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

import Base from "./base";
import "../styles/project_details.sass";

import EngineeringProject from "../js/engineeringProjects";

const ProjectDetails = () => {
  let { projectId } = useParams();
  let pathName = useLocation();

  const [n, setN] = useState(0);
  const [currentImageN, setCurrentImageN] = useState(0);
  const [title, setTitle] = useState("none");
  const [switchP, setSwitchP] = useState({
    previous: { title: "None", link: "#" },
    next: { title: "None", link: "#" },
  });

  useLayoutEffect(() => {
    console.log("id:", projectId);
    EngineeringProject.forEach((el, n) => {
      if (el.id === projectId) {
        setSwitchP({
          previous:
            n !== 0
              ? {
                  title: EngineeringProject[n - 1].title,
                  link: EngineeringProject[n - 1].id,
                }
              : { title: "None", link: EngineeringProject[n].id },
          next:
            n !== EngineeringProject.length - 1
              ? {
                  title: EngineeringProject[n + 1].title,
                  link: EngineeringProject[n + 1].id,
                }
              : { title: "None", link: EngineeringProject[n].id },
        });
        setN(n);
        setTitle(el.title);
      }
    });
  }, [pathName]);

  return (
    <Base>
      <div className="frame2">
        <div className="tituli">
          <h2 className="name">
            <span className="number">{n + 1}</span>
            {title}
          </h2>
        </div>

        <div className="projectData">
          <div className="imgFrame">
            <div className="numbers">
              {EngineeringProject[n].images.map((el, n) => {
                if (currentImageN === n)
                  return <div className="number active">{n + 1}</div>;
                return <div className="number">{n + 1}</div>;
              })}
            </div>
            <img
              src={EngineeringProject[n].images[currentImageN]}
              alt="picture"
              className="img"
            />
          </div>
          <h3>Download Full Documentation (ka)</h3>
        </div>

        <div className="controls">
          <Link
            className="button previous"
            to={`/project/${switchP.previous.link}`}
            replace
          >
            <h4>Previous:</h4>
            <h4>{switchP.previous.title}</h4>
          </Link>
          <Link
            className="button next"
            to={`/project/${switchP.next.link}`}
            replace
          >
            <h4>Next:</h4>
            <h4>{switchP.next.title}</h4>
          </Link>
        </div>
      </div>
    </Base>
  );
};

export default ProjectDetails;
