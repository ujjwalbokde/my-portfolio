import React from 'react';

const Hero = () => {
  return (
    <div className=" bg-no-repeat w-full" id="home">
      <div className="w-full md:w-[500px] m-4 md:m-16 mb-16 md:mb-56 mx-auto md:mx-[7%]">
        <h5 className="italic text-sky-500 mb-1 text-center md:text-left">Hello !!!</h5>
        <h1 className="text-3xl md:text-5xl font-bold mb-7 text-center md:text-left">I'm Ujjwal Bokde</h1>
        <div className="flex flex-wrap justify-center md:justify-start mb-8">
          <div className="bg-sky-400 text-black italic w-max px-2 mx-1 mb-2 md:mb-0">
            FULL STACK WEB DEVELOPER
          </div>
          <div className="bg-sky-400 text-black italic w-max px-2 mx-1">
            DATA STRUCTURE
          </div>
        </div>
        <div className="mb-6 flex flex-wrap justify-center md:justify-start">
          <a
            type="button"
            target="_blank"
            href="https://www.linkedin.com/in/ujjwal-bokde-3577a625a/"
            className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex"
          >
            <img src="linkedin.png" className="w-5 h-5" alt="" />
            <span className="mx-1 font-semibold">Linkedin</span>
          </a>
          <a
            type="button"
            target="_blank"
            href="https://github.com/ujjwalbokde"
            className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex"
          >
            <img src="github.png" className="w-5 h-5" alt="" />
            <span className="mx-1 font-semibold">GitHub</span>
          </a>
          <button
            type="button"
            onClick={() => window.open("/resume.pdf", "_blank")}
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex"
          >
            <img
              src="downloading.png"
              className="w-5 h-5"
              alt="Resume Icon"
            />
            <span className="mx-1 font-semibold">Resume</span>
          </button>
        </div>
        <p className="text-center md:text-left ">
          I am a Computer Science student with a passion for coding, specializing in the MERN stack and Next.js. I enjoy solving problems and building web applications that blend creativity with technical expertise. As the Secretary of the Engineering India YCCE club, I have led initiatives and events that promote learning, innovation, and social welfare. I am always eager to collaborate on impactful projects and continuously expand my skill set.
        </p>
      </div>
    </div>
  );
};

export default Hero;