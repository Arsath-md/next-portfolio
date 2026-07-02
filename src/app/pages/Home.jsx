"use client";

import { TypeAnimation } from "react-type-animation";
import TechTicker from "../components/Tech";
import About from "./About";
import Skill from "./skills";
import Projects from "./Projects";
import Forms from "../components/Form";

export default function Homes() {
  return (
    <div className="bg-matrix-grid bg-black min-h-screen text-slate-200 font-mono" id="home">
      
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto flex justify-center">
          
          <div className="w-full max-w-3xl border-2 border-slate-700 bg-black/90 rounded-lg overflow-hidden shadow-2xl shadow-green-900/20">
            
            {/* Terminal Header */}
            <div className="bg-slate-900 border-b-2 border-slate-700 px-4 py-3">
              <h1 className="text-xs sm:text-sm md:text-base text-slate-400 break-all">
                Terminal C:/User/Arsath-portfolio{">"}
              </h1>
            </div>

            {/* Terminal Body */}
            <div className="p-5 sm:p-8 md:p-10 flex flex-col items-center text-center">

              {/* Profile Image */}
              <img
                src="/her.png"
                alt="hero image"
                className="
                  w-28 h-28
                  sm:w-36 sm:h-36
                  md:w-44 md:h-44
                  lg:w-48 lg:h-48
                  object-cover
                  rounded-full
                  border-2 border-[#00ff41]
                  p-1
                  shadow-[0_0_15px_rgba(0,255,65,0.3)]
                "
              />

              {/* Name */}
              <h1
                className="
                  mt-5
                  font-extrabold
                  text-white
                  leading-tight
                  text-[clamp(2rem,6vw,4rem)]
                "
              >
                Mohamed Arsath
              </h1>

              {/* Animated Role */}
              <div className="h-12 flex items-center justify-center mt-2 w-full">
                <TypeAnimation
                  sequence={[
                    "> Full Stack Developer",
                    3000,
                    "> Front-End Designer",
                    3000,
                    "> Backend Architect",
                    3000,
                    "> AI Automator",
                    3000,
                  ]}
                  speed={25}
                  repeat={Infinity}
                  className="
                    text-[#00ff41]
                    font-bold
                    text-sm
                    sm:text-lg
                    md:text-xl
                    lg:text-2xl
                    break-words
                  "
                />
              </div>

              {/* Description */}
              <div className="w-full max-w-2xl mt-6 border-y border-slate-800 py-5 text-left">
                <div className="space-y-4 text-sm sm:text-base text-slate-400">
                  <p className="flex gap-3">
                    <span className="text-[#00ff41] font-bold shrink-0">
                      ➜
                    </span>
                    <span>
                      Full-stack web developer passionate about backend
                      architecture, scalable systems, and modern web
                      technologies.
                    </span>
                  </p>

                  <p className="flex gap-3">
                    <span className="text-[#00ff41] font-bold shrink-0">
                      ➜
                    </span>
                    <span>
                      I craft responsive front-end experiences while building
                      secure and high-performance backend solutions.
                    </span>
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">

                <button
                  className="
                    w-full sm:w-auto
                    border-2 border-[#00ff41]
                    text-[#00ff41]
                    px-6 py-3
                    rounded
                    text-sm font-bold
                    hover:bg-[#00ff41]/10
                    active:bg-[#00ff41]
                    active:text-black
                    transition-all
                    shadow-[0_0_10px_rgba(0,255,65,0.15)]
                  "
                >
                  <a href="#about">                  {">"} npm run Portfolio
</a>
                </button>

                <button
                  className="
                    w-full sm:w-auto
                    border-2 border-slate-500
                    text-slate-300
                    px-6 py-3
                    rounded
                    text-sm font-bold
                    hover:bg-slate-800
                    active:bg-green-500
                    active:text-black
                    active:border-green-500
                    transition-all
                  "
                  >
                    <a href="/resume.pdf" download > {">"} npm i Resume</a>
                </button>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="space-y-16 lg:space-y-24">
          <TechTicker />
          <About />
          <Skill />
          <Projects />
          <Forms />
        </div>
      </section>

    </div>
  );
}