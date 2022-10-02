import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Projects from "./pages/projects";
import ProjectDetails from "./pages/projectDetails";
import Links from "./pages/links";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/links" element={<Links />} />
        <Route path="/archive" element={<div>no data...</div>} />
        <Route path="/rss" element={<div>no rss</div>} />
      </Routes>
    </Router>
  );
}

export default App;
