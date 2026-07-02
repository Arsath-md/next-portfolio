"use client";

export default function Skill() {
  return (
    <>
      <div className="w-full max-w-5xl mx-auto my-6 px-2 sm:px-4 font-mono" id="skills">
        {/* Responsive Terminal Line Header */}
        <h1 className="text-xl sm:text-2xl text-start text-white mb-4 tracking-wide px-1">
          C://users/Admin/Stacks:{"\u003E"}
        </h1>
        
        {/* Responsive Main Layout Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 bg-black/40 border border-slate-800 rounded-xl shadow-xl backdrop-blur-sm">

          {/* Web Development */}
          <div className="flex flex-col text-center border border-slate-800 bg-slate-900/50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-800 pb-2 text-teal-400">Web development</h2>
            <div className="grid grid-cols-3 gap-y-5 gap-x-3 place-items-center">
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">HTML</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">CSS</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">React</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-10 h-10 sm:w-12 sm:h-12 object-contain invert border border-slate-800 rounded p-1 bg-black/20 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Next.js</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Tailwind</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Bootstrap</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.simpleicons.org/express/ffffff" alt="Express.js" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Express.js</span>
              </div>
            </div>
          </div>

          {/* App Development */}
          <div className="flex flex-col text-center border border-slate-800 bg-slate-900/50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-800 pb-2 text-pink-400">App development</h2>
            <div className="grid grid-cols-3 gap-y-5 gap-x-3 place-items-center">
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React Native" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">React Native</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="Material UI" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Material UI</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.simpleicons.org/expo/ffffff" alt="Expo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Expo</span>
              </div>
            </div>
          </div>

          {/* Database */}
          <div className="flex flex-col text-center border border-slate-800 bg-slate-900/50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-800 pb-2 text-blue-400">Database</h2>
            <div className="grid grid-cols-3 gap-y-5 gap-x-3 place-items-center">
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">MongoDB</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">MySQL</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Redis</span>
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="flex flex-col text-center border border-slate-800 bg-slate-900/50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-800 pb-2 text-emerald-400">Programming Languages</h2>
            <div className="grid grid-cols-3 gap-y-5 gap-x-3 place-items-center">
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Python</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">JavaScript</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">C++</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">TypeScript</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Node.js</span>
              </div>
            </div>
          </div>

          {/* Design */}
          <div className="flex flex-col text-center border border-slate-800 bg-slate-900/50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-800 pb-2 text-violet-400">Design</h2>
            <div className="grid grid-cols-2 gap-y-5 gap-x-4 place-items-center">
              <div className="flex flex-col items-center gap-1.5 group w-full">
                <img src="https://img-c.udemycdn.com/course/480x270/6722491_4284.jpg" alt="Google Stitch" className="w-16 sm:w-20 h-auto rounded border border-slate-800 group-hover:scale-105 transition-transform object-cover aspect-video" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium text-center">Google Stitch</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group w-full">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" alt="Figma" className="w-10 h-10 sm:w-12 sm:h-12 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium text-center">Figma</span>
              </div>
            </div>
          </div>

          {/* AI Tools and Automation */}
          <div className="flex flex-col text-center border border-slate-800 bg-slate-900/50 p-4 rounded-xl shadow-inner">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-800 pb-2 text-amber-400">AI & Automation</h2>
            <div className="grid grid-cols-2 xs:grid-cols-4 sm:grid-cols-2 gap-4 place-items-center">
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/openai.svg" alt="ChatGPT" className="w-8 h-8 sm:w-10 sm:h-10 object-contain brightness-0 invert group-hover:rotate-90 transition-transform duration-300" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">ChatGPT</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Google-gemini-icon.svg/500px-Google-gemini-icon.svg.png" alt="Gemini" className="w-8 h-8 sm:w-10 sm:h-10 object-contain group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Gemini</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://unpkg.com/@lobehub/icons-static-png@latest/dark/claude.png" alt="Claude" className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-lg border border-slate-800 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Claude</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://unpkg.com/@lobehub/icons-static-png@latest/dark/n8n.png" alt="n8n" className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-lg border border-slate-800 group-hover:scale-110 transition-transform" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">n8n</span>
              </div>
            </div>
          </div>

          {/* Platforms */}
          <div className="flex flex-col text-center border border-slate-800 bg-slate-900/50 p-4 rounded-xl shadow-inner sm:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-bold mb-4 border-b border-slate-800 pb-2 text-indigo-400">Platforms & Deployment</h2>
            <div className="grid grid-cols-3 xs:grid-cols-6 gap-4 place-items-center">
              <div className="flex flex-col items-center gap-1.5 group">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#0078d4] transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 3.449L9.75 2.1v9.451H0V3.449zM0 12.55h9.75v9.451L0 20.651V12.55zm10.75-10.722L24 0v11.55H10.75V1.828zM24 12.55v11.45l-13.25-1.921V12.55H24z"/>
                </svg>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Windows</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" alt="Linux" className="w-10 h-10 sm:w-12 sm:h-12 object-contain transition-transform group-hover:scale-110" />
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Linux</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 22.525H0L12 1.475l12 21.05z"/>
                </svg>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Vercel</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#00C7B7]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.97 0L1.13 10.84a1.67 1.67 0 0 0 0 2.34L3.6 15.6l2.12-2.12c.1-.1.25-.1.35 0l2.58 2.58c.1.1.1.26 0 .36l-2.12 2.12 2.43 2.43a1.67 1.67 0 0 0 2.34 0l10.84-10.84a1.67 1.67 0 0 0 0-2.34L14.3 1.13a1.67 1.67 0 0 0-2.34 0zm0 4.14l6.57 6.57-2.1 2.1-4.47-4.47a.25.25 0 0 0-.35 0l-1.74 1.74-2.1-2.1 4.19-4.19a.25.25 0 0 0 0-.35l-.01-.01z"/>
                </svg>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Netlify</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-slate-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 16 12 12 8 16" />
                  <line x1="12" y1="12" x2="12" y2="21" />
                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                </svg>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Render</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 group">
                <svg className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="6" rx="2" ry="2" />
                  <rect x="2" y="16" width="20" height="6" rx="2" ry="2" />
                  <line x1="6" y1="5" x2="6.01" y2="5" />
                  <line x1="6" y1="19" x2="6.01" y2="19" />
                </svg>
                <span className="text-[11px] sm:text-xs text-gray-400 font-medium">Hostify</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}