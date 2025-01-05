import React from 'react';

const About = () => {
  return (
    <div
      className="bg-hero-simple md:bg-hero-about bg-cover bg-no-repeat min-h-screen w-full pt-10 pb-2"
      id="about"
    >
      <div className="mx-4 md:mx-[58%] w-full md:w-[500px] m-4 md:m-16 mb-16 md:mb-56">
        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center md:text-left">About Me</h1>
        <div className="w-40 md:w-80 h-2 bg-sky-600 mb-10 mx-auto md:mx-0"></div>
        <p className="mb-10 text-center md:text-left">
          I am a third-year B.Tech student specializing in Computer Science
          and Engineering. Passionate about web development, I have honed my
          skills as a MERN stack developer. My expertise lies in building
          responsive and efficient web applications using MongoDB, Express.js,
          React.js, and Node.js.<br></br>
          <br /> I am eager to leverage my technical skills and academic
          knowledge to contribute to innovative projects and grow as a
          professional in the tech industry. Looking forward to connecting
          with like-minded professionals and exploring exciting opportunities
          in the field of web development.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-5 text-center md:text-left">Hobbies & Interest</h2>
        <div className="flex flex-wrap justify-center md:justify-start">
          <button className="border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black mb-3 mx-2">
            PLAYING CRICKET
          </button>
          <button className="border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black mb-3 mx-2">
            WATCHING CRICKET
          </button>
          <button className="border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black mb-3 mx-2">
            TRAVELLING
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;