import React, { useState, useEffect } from 'react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Weather Detector',
      description: 'A real-time app that detects and displays current weather conditions based on location.',
      image: '/weather.jpg',
      link: '/weather',
    },
    {
      id: 2,
      title: 'Library Management System',
      description: 'Login-based system for issuing and returning books with real-time tracking.',
      image: '/library.png',
      link: '/libraryMS',
    },
    {
      id: 3,
      title: 'Ujjwal Graphics - A Business Website',
      description: 'Created a business website to showcase graphic design services, featuring secure login, product categorization, and a modern user interface for customers to explore services.',
      image: '/ug_web.jpg',
      link: '/ujjwal-graphics',
    },
    {
      id: 4,
      title: 'Wandarlust',
      description: 'A platform to explore travel destinations with unique stays and real-time weather updates.',
      image: '/wandarlust.png',
      link: '/wandarlust',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic sliding logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [projects.length]);

  return (
    <div className="bg-hero-simple bg-cover bg-no-repeat min-h-screen w-full pt-20 md:pt-44 pb-20 md:pb-44 element" name="projects">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-5 text-center">Projects</h1>
        <div className="flex justify-center mb-8 md:mb-16">
          <div className="w-40 md:w-80 h-1 md:h-2 bg-sky-600"></div>
        </div>
        {/* Slider Container */}
        <div className="relative w-full max-w-6xl mx-auto h-[500px] overflow-visible">
          <div className="flex items-center justify-center h-full">
            {projects.map((project, index) => {
              const distance = Math.abs(index - currentSlide); // Distance from the current slide
              let scale = 1;
              let opacity = 1;
              let zIndex = 0;

              if (distance === 0) {
                // Middle slide
                scale = 1.2;
                opacity = 1;
                zIndex = 10;
              } else if (distance === 1) {
                // Adjacent slides
                scale = 0.9;
                opacity = 0.7;
                zIndex = 5;
              } else {
                // Other slides
                scale = 0.8;
                opacity = 0.3;
                zIndex = 0;
              }

              return (
                <div
                  key={project.id}
                  className="absolute transition-all duration-500 ease-in-out"
                  style={{
                    transform: `translateX(${(index - currentSlide) * 120}%) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    width: '300px', // Fixed width for each slide
                  }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href={project.link}>
                      <img className="rounded-t-lg w-full h-48 object-cover" src={project.image} alt={project.title} />
                    </a>
                    <div className="p-5">
                      <a href={project.link}>
                        <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                          {project.title}
                        </h5>
                      </a>
                      <p className="mb-3 text-sm md:text-base font-normal text-gray-700 dark:text-gray-400">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Show Details
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;