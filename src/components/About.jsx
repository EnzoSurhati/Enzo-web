import React from "react";
import Html from "../assets/Html.png";
import Css from "../assets/CSS.png";
import Javascript from "../assets/JS.png";
import ReactLogo from "../assets/React.png";
import ReduxLogo from "../assets/Redux.png";
import Tailwind from "../assets/Tailwind Css.png";
import Bootstrap from "../assets/Bootstrap.png";
import Nodejs from "../assets/Nodejs.png";
import Express from "../assets/Express.png";
import NextJs from "../assets/NextJs.png";
import Liquid from "../assets/Liquid.png";

const About = () => {
  return (
    <div className="relative" id="about">
      <div className="bg-gray-100 py-12">
        <div className="max-w-7x1 max-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-major text-green-900 mb-2">
              About Me
            </h2>
            <p className="text-lg font-major text-gray-600 font-bold">
              Skilled and passionate Software Developer with a knack for building dynamic,
              user-friendly applications from the ground up, with a skill in creating seamless
              digital experiences by combining creativity with efficiency
            </p>
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
              <h3 className="text-2xl font-major text-green-900 mb-2">My Journey</h3>
                <p className="text-lg font-major text-gray-600 mt-4 leading-relaxed font-bold">
                  I began studying software few years ago by learning Java, but in the process
                  realized that I'm more of a designer who envisions projects differently. So I have
                  decided to go with Web Development.
                </p>
              </div>
              <div className="border border-red-200 rounded-lg md:p-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300">
                <h3 className="text-2xl font-major text-red-900">Skills</h3>
                <div className="flex items-center justify-center flex-wrap gap-3">
                  <div className="border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Html} alt="" className="w-8" />
                    <span className="font-semibold">HTML</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Css} alt="" className="w-8" />
                    <span className="font-semibold">CSS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Javascript} alt="" className="w-10" />
                    <span className="font-semibold">Javascript</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Liquid} alt="" className="w-10" />
                    <span className="font-semibold">Liquid</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReactLogo} alt="" className="w-8 rounded-full" />
                    <span className="font-semibold">React</span>
                  </div>
                  <div className="border border-red-300 flex items-center w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={ReduxLogo} alt="" className="w-8" />
                    <span className="font-semibold">Redux</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Tailwind} alt="" className="w-10 rounded-full" />
                    <span className="font-semibold">Tailwind Css</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Bootstrap} alt="" className="w-8" />
                    <span className="font-semibold">Bootstrap</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Nodejs} alt="" className="w-8" />
                    <span className="font-semibold">Node JS</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={Express} alt="" className="w-8" />
                    <span className="font-semibold">Express Js</span>
                  </div>
                  <div className="border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300">
                    <img src={NextJs} alt="" className="w-10" />
                    <span className="font-semibold">Next Js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
