"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const links = [
    { name: "/Home", href: "/" },
    { name: "/About", href: "#about" },
    { name: "/Skills", href: "#skills" },
    { name: "/Projects", href: "#project" },
    { name: "/Contact", href: "#contact" },
  ];

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#00ff41]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="h-16 flex items-center justify-between">
            <h1 className="text-[#00ff41] font-bold text-sm sm:text-lg">
              SYSTEM://arsath&gt;
            </h1>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-10">
              <ul className="flex items-center gap-8">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-[#00ff41] transition-colors "
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="flex gap-5 text-slate-400">
                <button
                  onClick={() =>
                    openLink(
                      "https://www.linkedin.com/in/mohamed-arsath-m"
                    )
                  }
                >
                  <FaLinkedin
                    size={22}
                    className="hover:text-blue-500 transition-colors"
                  />
                </button>

                <button
                  onClick={() =>
                    openLink("https://github.com/Arsath-md")
                  }
                >
                  <FaGithub
                    size={22}
                    className="hover:text-[#00ff41] transition-colors"
                  />
                </button>

                <button
                  onClick={() =>
                    openLink("https://instagram.com/vippi31")
                  }
                >
                  <FaInstagram
                    size={22}
                    className="hover:text-pink-500 transition-colors"
                  />
                </button>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex items-center justify-center h-10 w-10 border border-[#00ff41]/30 rounded text-[#00ff41]"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-black z-50">
            <div className="flex flex-col h-full px-6 py-8">
              <ul className="flex flex-col gap-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block text-xl border-b border-[#00ff41]/10 pb-3 hover:text-[#00ff41]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex justify-center gap-8">
                <button
                  onClick={() =>
                    openLink(
                      "https://www.linkedin.com/in/mohamed-arsath-m"
                    )
                  }
                >
                  <FaLinkedin
                    size={28}
                    className="text-slate-400 hover:text-blue-500"
                  />
                </button>

                <button
                  onClick={() =>
                    openLink("https://github.com/Arsath-md")
                  }
                >
                  <FaGithub
                    size={28}
                    className="text-slate-400 hover:text-[#00ff41]"
                  />
                </button>

                <button
                  onClick={() =>
                    openLink("https://instagram.com/your_username")
                  }
                >
                  <FaInstagram
                    size={28}
                    className="text-slate-400 hover:text-pink-500"
                  />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className="h-16" />
    </>
  );
}