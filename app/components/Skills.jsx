import React from 'react'

const Skills = () => {
  return (
    <div className="bg-hero-simple bg-cover bg-no-repeat min-h-screen w-full pt-24 pb-16 element" name="skills">
    <div className="w-full max-w-screen-lg my-16 m-16 mx-[15%]">
      <h1 className="text-5xl font-bold mb-5 text-center">Skills</h1>
      <div className="flex justify-center mb-16">
        <div className="w-80 h-2 bg-sky-600"></div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="html.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="html"
          />
          HTML
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="css.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="css"
          />
          CSS
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="javascript.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="javascript"
          />
          JAVASCRIPT
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="react.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="react"
          />
          REACT
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="nextJs.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="next"
          />
          NEXT JS
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="tailwind.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="tailwind"
          />
          TAILWIND
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="node.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="node"
          />
          NODE JS
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="express.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="express"
          />
          EXPRESS JS
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="DB.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="mongodb"
          />
          MONGODB
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="bootstrap.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="bootstrap"
          />
          BOOTSTRAP
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="java.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="java"
          />
          JAVA
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="C.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="c"
          />
          C LANGUAGE
        </div>
        <div className="text-center rounded-lg border border-gray-900 p-6 flex flex-col justify-center items-center">
          <img
            src="python.png"
            className="w-24 mb-2 hover:w-[104px] hover:duration-200"
            alt="python"
          />
          PYTHON
        </div>
      </div>
    </div>
  </div>
  )
}

export default Skills