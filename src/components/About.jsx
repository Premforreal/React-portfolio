import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl text-left pr-8 pl-2 sm:px-0">
            I am an undergraduate student from NIT Warangal, India. <br/>
            I am a full stack web developer with keen understanding of MongoDB, Express, ReactJs, NodeJs, <br/>
             HTML, CSS and JavaScript.
        </p>

        <br />

        <p className="text-xl text-left pr-8 pl-2 sm:px-0">
          My interests also lie in Python programming and Data Science.
          I am always keen to explore any new technologies.
          Other than coding my interests lie in Books, photoshop, and cooking.
        </p>
      </div>
    </div>
  );
};

export default About;
