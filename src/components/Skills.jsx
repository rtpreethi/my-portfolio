import React from "react";

import Java from "../assets/java.png";
import Spring from "../assets/Spring.png";
import SpringBoot from "../assets/SpringBoot.png";
import JavaScript from "../assets/javascript.png";
import Node from "../assets/node.png";
import GitHub from "../assets/github.png";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import ReactImg from "../assets/react.png";
import AWS from "../assets/aws.png";

const Skills = () => {
  return (
    <div className="bg-[#0a192f] text-gray-300 w-full h-screen" name="skills">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300">
            Skills
          </p>
          <p className="py-4">My tech stack includes</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Java} alt="Java icon" />
            <p className="py-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Spring} alt="Spring icon" />
            <p className="py-4">Spring</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={SpringBoot}
              alt="SpringBoot icon"
            />
            <p className="py-4">SpringBoot</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="Java icon" />
            <p className="py-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="py-4">Node</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="GitHub icon" />
            <p className="py-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Html} alt="Html icon" />
            <p className="py-4">Html</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Css} alt="Css icon" />
            <p className="py-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="py-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={AWS} alt="AWS icon" />
            <p className="py-4">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
