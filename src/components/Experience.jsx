import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import mongodb from "../assets/mongodb.png";
import Express from "../assets/express.png";
import Python from "../assets/Python.png";
import nodejs from "../assets/node.png";

const Experience = () => {
  const techs = [
    {
      
      id: 1,
      src: Python,
      title: "Python",
      style: "shadow-yellow-300",
      
    },
    {
      id: 5,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
      
    },
    {
      id: 6,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
      
    },
    
    {
      id: 7,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
     
      
    },
    
    {
      id: 2,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
      
    },
    {
      id: 3,
      src: Express,
      title: "Express",
      style: "shadow-gray-400",
      
    },
    {
      id: 8,
      src: reactImage,
      title: "React",
      style: "shadow-sky-600",
    },
    {
      id: 4,
      src: nodejs,
      title: "Node.js",
      style: "shadow-lime-400",
      
    },
  
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full h-screen  sm:pt-96"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 px-12 sm:px-0">I have a good experience of below technologies and languages.</p>
        </div>

        <div className="w-full  grid grid-cols-2 md:grid-cols-4 gap-8 text-center py-1 px-12 sm:px-12">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-10 mx-auto" />
              <p className="mt-4">{title}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
