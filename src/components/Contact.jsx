import React from "react";
const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact Me
          </p>
          <p className="py-4 text-left pr-8 pl-2 sm:px-0">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center ">
          <form
            action="https://getform.io/f/476750c0-2f46-4800-8d72-d244c79540c9"
            method="POST"
            className=" flex flex-col  md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="3"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-4 py-2 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
