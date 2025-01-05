import React from "react";
const UG = () => {
  return (
    <>
      <div className="w-[70%] my-16 mx-auto shadow rounded-lg border-[3px] border-gray-500 flex flex-col md:flex-row p-6 gap-6 md:p-12">
        <img
          className="object-fill md:w-2/4 md:h-auto shadow-lg rounded-lg md:rounded-l-lg"
          src="/ug_web.jpg"
          alt="library"
        />
        <div className="flex flex-col justify-between p-4 leading-normal md:w-2/3">
          <h5 className="mb-5 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Ujjwal Graphics - A Buisness Website
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Created a business website to showcase graphic design services, featuring secure login, product categorization,
and a modern user interface for customers to explore services. 
            <br />
            <br />
            <b>Technologies Used : </b>
            <br />
            <b>Frontend:</b> Next Js, Tailwind CSS <br />
            <b>Backend: </b>Node.js, Express.js <br />
            <b>Database:</b> MongoDB <br />
          </p>
          <div className="flex mt-3">
          <a href="https://ujjwal-graphics.vercel.app/" target="_blank" type="button" class="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Vist Website</a>
          <a href="https://github.com/ujjwalbokde/Ujjwal-Graphics_Website" target="_blank" type="button" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">GitHub Code</a>
        </div>
        </div>
      </div>
    </>
  );
};

export default UG;
