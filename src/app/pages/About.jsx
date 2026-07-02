"use client";

export default function About() {
  const techs = [
    {
      label: "React",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      label: "Next.js",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    },
    {
      label: "Python",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    },
    {
      label: "React Native",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      label: "n8n",
      src: "https://avatars.githubusercontent.com/u/45487711",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6">
      <div className="border-2 bg-white/70 text-black w-full max-w-6xl mx-auto rounded overflow-hidden shadow-md my-6" id="about">
        {/* Header */}
        <h1 className="text-lg md:text-xl font-bold bg-blue-900 text-white px-4 py-2">
          Admin info
        </h1>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 p-4 sm:p-6 lg:p-8">
          
          {/* Profile Card */}
          <div className="w-full rounded border border-black/10 bg-white/50 p-4 sm:p-6 flex flex-col items-center">
            <img
              src="/her.png"
              alt="hero image"
              className="
                w-28 h-28
                sm:w-36 sm:h-36
                md:w-44 md:h-44
                lg:w-48 lg:h-48
                object-cover
                rounded
                shadow-inner
                mb-4
              "
            />

            <div className="w-full text-left">
              <h2 className="text-base sm:text-lg lg:text-xl font-medium py-2 break-words">
                Admin : Mohamed Arsath
              </h2>

              <hr className="border-black/20" />

              <h2 className="text-base sm:text-lg lg:text-xl font-medium py-2">
                Location : India-IN
              </h2>

              <hr className="border-black/20" />

              <h2 className="text-base sm:text-lg lg:text-xl font-medium py-2">
                IP(D.o.b) : 03.12.2003
              </h2>

              <hr className="border-black/20" />
            </div>
          </div>

          {/* About Section */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-800">
              <p>
                I'm a full-stack web developer skilled in building robust
                front-end and back-end solutions, with a strong passion for UI
                and UX design.
              </p>

              <p>
                I love transforming ideas into seamless, high-performing web
                applications that work flawlessly across all devices, creating
                engaging digital experiences that connect users and technology.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mt-8">
              {techs.map(({ label, src }) => (
                <button
                  key={label}
                  className="
                    flex items-center gap-2
                    px-3 py-2
                    sm:px-4
                    text-xs sm:text-sm
                    font-bold
                    text-black
                    bg-[#c0c0c0]
                    border-2
                    border-t-white
                    border-l-white
                    border-r-gray-700
                    border-b-gray-700
                    shadow-[1px_1px_0_0_rgba(0,0,0,1)]
                    hover:bg-[#d4d4d4]
                    transition-colors
                    min-w-fit
                    focus:outline-none
                    focus-visible:relative
                    focus-visible:after:absolute
                    focus-visible:after:inset-1
                    focus-visible:after:border
                    focus-visible:after:border-dashed
                    focus-visible:after:border-black
                  "
                >
                  <img
                    src={src}
                    alt={label}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain flex-shrink-0"
                  />

                  <span className="whitespace-nowrap">{label}</span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}