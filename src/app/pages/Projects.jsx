"use client";

import { ToastContainer,toast } from "react-toastify";
import { project_data } from "../../../public/projects";

export default function Projects() {
  // Classic 90s Windows font stack
  const retroFontClass = "font-['MS_Sans_Serif','Microsoft_Sans_Serif',Tahoma,sans-serif] antialiased [font-smooth:never]";
  

  return (
    <>
      {/* Container with retro font rule applied */}
      <div className={`border-2 bg-white/70 text-black w-full max-w-5xl mx-auto rounded shadow-sm my-6 overflow-hidden ${retroFontClass}`} id="project">
      <ToastContainer/>
        <h1 className="text-lg md:text-xl bg-blue-900 text-white px-4 py-2 font-bold select-none" >
          Projects 
        </h1>
          
        {/* Parent container is now OUTSIDE the map, allowing children to sit in a row */}
        <section className="flex flex-nowrap flex-row gap-6 p-4 sm:p-6 bg-slate-100/50 overflow-x-auto w-full">
          
          {project_data.map((vals, keys) => (
            /* Project Card Component */
            <div key={keys} className="flex flex-col w-[350px] max-w-full shrink-0 border-2 justify-between items-center bg-[#c0c0c0] p-2 shadow-[inset_-1px_-1px_0_0_#404040,inset_1px_1px_0_0_#fff]">
              <div className="w-full flex justify-center bg-black/5 p-1 border border-black/10 rounded-sm mb-3">
                <img 
                  src={vals.p_img}
                  className="w-full max-w-sm h-auto aspect-video object-cover border border-slate-700 shadow-sm" 
                  alt="Project Preview" 
                />
              </div>

              <div className="text-center p-2 w-full space-y-2 flex-grow">
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide">{vals.p_name}</h2>
                <p className="text-xs text-slate-800 max-w-md mx-auto leading-relaxed">
                  {vals.p_desc}
                </p>
              </div>

              {/* Responsive tech badges wrapper */}
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 p-2 w-full justify-items-center mt-4 border-t border-black/10 pt-4">
                {vals?.techs?.map((labels, src) => (
                  <button
                    key={src}
                    className="
                      flex items-center justify-center gap-1.5 w-full
                      px-2 py-1 text-[10px] sm:text-xs text-black bg-[#c0c0c0] outline-none font-bold relative truncate
                      border-t-2 border-l-2 border-b-2 border-r-2
                      border-t-white border-l-white border-b-gray-700 border-r-gray-700
                      active:border-t-gray-700 active:border-l-gray-700 active:border-b-white active:border-r-white
                      focus-visible:after:content-[''] focus-visible:after:absolute focus-visible:after:inset-1
                      focus-visible:after:border focus-visible:after:border-dashed focus-visible:after:border-black
                    "
                  >
                    <img src={labels.src} alt={labels.label} className="h-3.5 w-3.5 object-contain flex-shrink-0" />
                    <span className="truncate">{labels.label}</span>
                  </button>
                ))}
              </div>

              {/* CTA  */}
              <div className="flex flex-col sm:flex-row gap-3 w-full mt-5">
                <button
                  className="
                    flex-1 bg-black text-[#00ff41] font-bold px-4 py-2.5 border border-[#00ff41]
                    hover:bg-[#00ff41] hover:text-black transition-all duration-200 shadow-[0_0_10px_rgba(0,255,65,0.3)]" >
                  {vals.live ? <a href={vals.live} target="_blank" rel="noopener noreferrer">{"</>"} View live</a>:<a onClick={()=>{toast.warn("website not live")}} >{"</>"} View live</a>}
                </button>

                <button
                  className="
                    flex-1 bg-black text-[#00ff41] font-bold px-4 py-2.5 border border-[#00ff41]
                    hover:bg-[#00ff41] hover:text-black transition-all duration-200 shadow-[0_0_10px_rgba(0,255,65,0.3)]
                  "
                >
                  <a href={vals.git}>{"</>"} View Github</a>
                </button>
              </div>
            </div>
          ))}

        </section>
      </div>
    </>
  );
}