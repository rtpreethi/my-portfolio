// import React from "react";
// import workImg from "../assets/workImg.jpg"; // Example
// import vehicleTracking from "../assets/vehicleTracking.jpg";
// import microservice from "../assets/microservice.jpg";

// const Work = () => {
//   const projects = [
//     {
//       img: workImg,
//       title: "React JS Application",
//       demo: "/",
//       info: "/",
//     },
//     {
//       img: vehicleTracking,
//       title: "Vehicle Tracking Application",
//       demo: "/",
//       info: "/",
//     },
//     {
//       img: microservice,
//       title: "Microservices Stream Processing",
//       demo: null,
//       info: "/",
//     },
//   ];

//   return (
//     <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
//       <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
//         {/* Header */}
//         <div className="pb-8">
//           <p className="text-4xl font-bold inline border-b-4 border-yellow-300">
//             Projects
//           </p>
//           <p className="py-6 text-gray-400">Some of my recent work</p>
//         </div>

//         {/* Grid Container */}
//         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {projects.map(({ img, title, demo, info }, index) => (
//             <div
//               key={index}
//               className="relative group rounded-lg shadow-lg shadow-[#040c16] overflow-hidden transition-transform duration-500 hover:scale-105"
//             >
//               {/* Background Image */}
//               <img
//                 src={img}
//                 alt={title}
//                 className="object-cover w-full h-64 md:h-72 opacity-80 group-hover:opacity-40 transition-opacity duration-300"
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent to-[#0a192f]/90">
//                 <h2 className="text-xl font-bold text-yellow-300 mb-4 text-center">
//                   {title}
//                 </h2>
//                 <div className="flex space-x-4">
//                   {demo && (
//                     <a href={demo} target="_blank" rel="noopener noreferrer">
//                       <button className="px-4 py-2 bg-yellow-300 text-[#0a192f] font-semibold rounded-md hover:bg-yellow-400 transition-all duration-300">
//                         Preview
//                       </button>
//                     </a>
//                   )}
//                   <a href={info} target="_blank" rel="noopener noreferrer">
//                     <button className="px-4 py-2 border-2 border-yellow-300 text-yellow-300 font-semibold rounded-md hover:bg-yellow-300 hover:text-[#0a192f] transition-all duration-300">
//                       Info
//                     </button>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* Know More link below grid */}
//           <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"></div>

//           {/* Know More link below all projects */}
//           <div className="col-span-full flex justify-end mt-4">
//             <a
//               href="/projects"
//               className="text-yellow-300 hover:text-yellow-400 font-semibold underline pr-4"
//             >
//               Know More →
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Work;


import React, { useState } from "react";
import workImg from "../assets/workImg.jpg";
import vehicleTracking from "../assets/vehicleTracking.jpg";
import microservice from "../assets/microservice.jpg";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      img: workImg,
      title: "React JS Application",
      demo: "/",
      info: "This is a React JS project built with modern hooks, routing, and state management.",
    },
    {
      img: vehicleTracking,
      title: "Vehicle Tracking Application",
      demo: "/",
      info: "Vehicle Tracking App using GPS and mapping APIs to track fleet movement in real-time.",
    },
    {
      img: microservice,
      title: "Microservices Stream Processing",
      demo: null, // No Preview button
      info: "Microservices project that processes streaming data with Kafka and Spring Boot.",
    },
  ];

  return (
    <div name="work" className="w-full md:h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Header */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-yellow-300">
            Projects
          </p>
          <p className="py-6 text-gray-400">Some of my recent work</p>
        </div>

        {/* Grid Container */}
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map(({ img, title, demo, info }, index) => (
            <div
              key={index}
              className={`relative group rounded-lg shadow-lg shadow-[#040c16] overflow-hidden transition-transform duration-500 hover:scale-105`}>
              <img
                src={img}
                alt={title}
                className="object-cover w-full h-72 opacity-80 group-hover:opacity-40 transition-opacity duration-300"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-transparent to-[#0a192f]/90">
                <h2 className="text-xl font-bold text-yellow-300 mb-4 text-center">
                  {title}
                </h2>
                <div className="flex space-x-4">
                  {demo && (
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                      <button className="px-4 py-2 bg-yellow-300 text-[#0a192f] font-semibold rounded-md hover:bg-yellow-400 transition-all duration-300">
                        Preview
                      </button>
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedProject({ title, info })}
                    className="px-4 py-2 border-2 border-yellow-300 text-yellow-300 font-semibold rounded-md hover:bg-yellow-300 hover:text-[#0a192f] transition-all duration-300"
                  >
                    Info
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Know More link below all projects */}
          <div className="col-span-full flex justify-end mt-4">
            <a
              href="/projects"
              className="text-yellow-300 hover:text-yellow-400 font-semibold underline pr-4"
            >
              Know More →
            </a>
          </div>
        </div>
      </div>

      {/* Modal for Info */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="bg-[#0a192f] text-gray-300 rounded-lg max-w-lg w-full p-6 relative">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">{selectedProject.title}</h2>
            <p className="mb-6">{selectedProject.info}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 text-gray-300 hover:text-yellow-300 text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
