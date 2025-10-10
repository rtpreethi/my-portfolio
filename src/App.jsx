// import About from "./components/About";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
// import Work from "./components/Work";
// import Contact from "./components/Contact";

// export default function App() {
//   return (
//     <>
//     <Navbar />
//     <Home /> 
//     <About /> 
//     <Skills />
//     <Work />
//     <Contact />
//     </>
//   )
// }


import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails"; // New page

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Pages with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Skills />
              <Work />
              <Contact />
            </>
          }
        />

        {/* Project Details page WITHOUT Navbar */}
        <Route path="/projects" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}