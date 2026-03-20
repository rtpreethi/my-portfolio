import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import profilePic from "../assets/IMG_3415.JPG";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#0a192f] flex items-center justify-center"
    >
      {/* Inner container */}
      <div className="max-w-[1200px] w-full px-8 flex flex-col-reverse md:flex-row items-center justify-between">
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-[rgba(216,219,22,0.99)] leading-snug">
            Hi! <br />
            I'm Preethi Ramkumar,
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-[#8892b0] leading-relaxed mt-2">
            Software Developer.
          </h2>

          <p className="text-[#8892b0] py-4 max-w-[600px]">
           I’m a Java full-stack developer passionate about building reliable, scalable enterprise applications that improve efficiency without unnecessary complexity.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-400 hover:border-yellow-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowCircleRight className="ml-3" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex justify-center items-center mb-6 md:mb-0 md:mt-0">
          <img
            src={profilePic}
            alt="Preethi Ramkumar"
            className="w-40 h-40 md:w-72 md:h-72 rounded-full object-cover border-4 border-yellow-400 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
