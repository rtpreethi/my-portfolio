import React from "react";
import Navbar from "./Navbar";

const ProjectDetails = () => {
  return (
    <div className="w-full min-h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-8">
        <div><a href="/" className="text-yellow-300 hover:text-yellow-400 leading-loose">
  ← Back to Home
</a></div>
        <h1 className="text-4xl font-bold mb-6">Project Summary</h1>

        {/* project details */}
        <div className="space-y-8">
          <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Insurance Package Policy</h2>
            <p>Consistent with BI’s product modernization business strategy customer solutions, competitive products and convenient process, the Application enables a modular product design coupled with competitive raising enhancements and a highly intuitive, responsive digital quoting experience with all customers. This application allows the customer to select three product type “package, property and liability”  </p>
            <h3>Responsibilities</h3>
            <ul className="list-disc list-inside">
              <li>Actively involved in analysis and development of LRM rules in Node JS and coding unit test cases for the rules.</li>
              <li>Validated APIs by Unit Testing, CIT testing using SoapUI/Postman Validation with XOM XML/JSON payloads.</li>
              <li>Handled GitLab CI/CD pipeline, code reviews, and defect resolution.</li>
              <li>Handled SQL operations in DB using Advanced Query Tool.</li>
              <li>Handled code reviews for peers and mentored team members.</li>
              <li>Interacted directly with clients and participated in Agile, PI Planning and Retrospectives.</li>
            </ul>
          <h4>Environments</h4>
          <p>: Visual Studio code, IBM Rule Designer, Advanced Query Tool, Osari, GitLab, GitHub, Node JS, JavaScript, UCD, Jenkins, BIDA, Spring Rest, SoapUI, Postman, Tortoise SVN, Crucible  </p>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Vehicle Tracking Application</h2>
            <p>Real-time vehicle tracking using GPS and mapping APIs.</p>
          </div>

          <div className="bg-[#112240] p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-2">Microservices Stream Processing</h2>
            <p>Stream processing with Kafka and Spring Boot microservices architecture.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
