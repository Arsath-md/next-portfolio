const IconItem = ({ src, label }) => (
  <div className="flex flex-col items-center justify-center mx-4 sm:mx-6 md:mx-8 lg:mx-10 group shrink-0">
    <img
      src={src}
      alt={label}
      className="
        h-10
        sm:h-12
        md:h-14
        lg:h-16
        w-auto
        object-contain
        transition-all
        duration-300
        group-hover:scale-110
        group-hover:-translate-y-1
      "
    />

    <span
      className="
        mt-2
        text-[10px]
        sm:text-xs
        uppercase
        tracking-wider
        text-[#00ff41]
        opacity-0
        group-hover:opacity-100
        transition-opacity
        duration-300
        whitespace-nowrap
      "
    >
      {label}
    </span>
  </div>
);

export default function TechTicker() {
  const icons = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
      label: "HTML5",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
      label: "CSS3",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
      label: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      label: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
      label: "React Native",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg",
      label: "Next.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg",
      label: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg",
      label: "Express",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      label: "Tailwind",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain-wordmark.svg",
      label: "Python",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      label: "GitHub",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
      label: "Figma",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
      label: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg",
      label: "MongoDB",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      label: "MySQL",
    },
    {
      src: "https://n8n.io/favicon.ico",
      label: "n8n",
    },
  ];

  return (
    <section className="w-full overflow-hidden py-6 sm:py-8">
      <div
        className="
          overflow-hidden
          [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
          [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]
        "
      >
        <div className="flex w-max animate-scroll-left items-center">
          {[...icons, ...icons].map((icon, index) => (
            <IconItem key={`${icon.label}-${index}`} {...icon} />
          ))}
        </div>
      </div>
    </section>
  );
}