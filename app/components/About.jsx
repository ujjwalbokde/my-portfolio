import React from 'react'

const About = () => {
  return (
    <div className="bg-hero-about bg-cover bg-no-repeat min-h-screen w-full pt-10 pb-2 " id="about">
        <div className="mx-[58%] w-[500px] m-16 mb-56">
          <h1 className="text-5xl font-bold mb-5">About Me</h1>
          <div className="w-80 h-2 bg-sky-600 mb-10"></div>
          <p className="mb-10">
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
          <h2 className="text-3xl font-boldm mb-5">Hobbies & Interest</h2>

          <button className=" border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black mb-3 mx-3">
            PLAYING CRICKET
          </button>
          <button className=" border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black">
            WATCHING CRICKET
          </button>
          <button className=" border p-3 rounded-full hover:bg-sky-500 hover:text-black hover:border-black mx-3">
            TRAVELLING
          </button>
        </div>
      </div>
  )
}

export default About