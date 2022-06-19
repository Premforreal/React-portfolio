import React from "react";
import todolist from "../assets/portfolio/todolist.png";
import Drumkitwebapp from "../assets/portfolio/drumkit.png";
import Realestatepriceprediction from "../assets/portfolio/ML.png";
import Calculator from "../assets/portfolio/calculator.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: todolist,
      title : 'ToDoList App',
      
      demo : 'https://quiet-ravine-25541.herokuapp.com/',
      code : 'https://github.com/Premforreal/ToDoList',
      description : 'A simple to-do list web app developed using NODE JS, EXPRESS, Mongoose as the back-end with addition of MongoDB as database.Front-end of the project is made using Html , Css and Javascript.It provides simple UI to interact and perform basic operations like add or delete particular to-do and has option to mark as completed.'
    },
    {
      id: 2,
      src: Realestatepriceprediction,
      title : 'Real estate price prediction',
      
      demo : 'https://github.com/Premforreal/Real-Estate-Home-Price-Prediction',
      code : 'https://github.com/Premforreal/Real-Estate-Home-Price-Prediction',
      description : 'Developed a Linear Regression model using Machine Learning to predict the price of a house based on several factors such as location, no. of BHK etc. The accuracy of model was measured using K-fold cross validation and is compared against other models using GridSearchCV.'
    },
    {
      id: 3,
      src: Drumkitwebapp,
      title : 'Drumkit web app',
      demo : 'https://premforreal.github.io/Drumkit-web-app/',
      code : 'https://github.com/Premforreal/Drumkit-web-app',
      description : 'A front-end web app made using Javascript, Html and Css. It has different keys in the keyboard representing a certain musical instrument.When any of the key is clicked corresponding drum sound effect, & shows a visual key as feedback for the user.'
    },
    {
      id: 4,
      src: Calculator,
      title : 'Calculator web app',
      demo : 'https://premforreal.github.io/VanillaJavascriptcalculator/',
      code : 'https://github.com/Premforreal/VanillaJavascriptcalculator',
      description : 'This calculator is written in HTML,CSS JavaScript with some ES6 practices. It does all the basic arithmetic operations like addition,subtraction, multiplication and division'
    },
  
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen  pt-20  "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, title , description,demo,code, }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />

              <p className="mt-2 text-2xl text-center font-bold text-sky-200">{title}</p>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-2 px-2 sm:px-12 ">
                    <p className="mt-4 text-md text-justify ">{description}</p>
              </div >
                   
              

              <div className="flex items-center justify-center">
              
                <a href={demo} target="_blank" rel="noreferrer">
                  <button  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 text-sky-300 font-semibold text-xl">
                    Demo
                  </button>
                </a>
                
                <a href={code} target="_blank" rel="noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110 text-sky-300 font-semibold text-xl">
                    Code
                  </button>
                </a>
              
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
