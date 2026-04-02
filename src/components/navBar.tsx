import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

export const Navigation = () => {
  const [activeSprintIndex, setActiveSprintIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sprints = [
    { id: 0, label: "Sprint 0" },
    { id: 1, label: "Sprint 1" },
    { id: 2, label: "Sprint 2" },
  ];

  const handleLinkClick = (index: number) => {
    setActiveSprintIndex(index);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 🔥 ANIMATED LIQUID FILTER */}
      <svg style={{ display: "none" }}>
        <filter id="glass-distortion">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.006 0.006"
            numOctaves="3"
            seed="8"
            result="turbulence"
          >
            {/* 🌊 liquid movement */}
            <animate
              attributeName="baseFrequency"
              dur="8s"
              values="0.006 0.006; 0.008 0.008; 0.006 0.006"
              repeatCount="indefinite"
            />
          </feTurbulence>

          <feGaussianBlur in="turbulence" stdDeviation="2" result="softMap" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="softMap"
            scale="55"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <nav
        className="w-full sticky top-0 z-50 shadow-sm liquidGlass-wrapper"
        role="navigation"
        aria-label="Main navigation"
      >
        {/* GLASS LAYERS */}
        <div className="liquidGlass-effect"></div>
        <div className="liquidGlass-tint"></div>
        <div className="liquidGlass-shine"></div>

        {/* CONTENT */}
        <div className="relative z-10 w-full flex items-center justify-between px-6 py-8 lg:px-16 lg:py-12">
          {/* Logo */}
          <a href="/2025_2026/idp_ds_t8/" aria-label="Home" className="z-50">
            <img
              className="w-32 md:w-40 h-auto"
              alt="Appa logo"
              src={logo}
            />
          </a>

          {/* Mobile button */}
          <button
            className="lg:hidden z-50 text-black p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Menu */}
          <ul
            className={`
            lg:flex lg:gap-10 lg:static lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none lg:w-auto lg:h-auto
            
            ${isMenuOpen ? "flex" : "hidden"}
            flex-col gap-6 absolute top-0 left-0 w-full h-screen bg-white items-center justify-center text-xl
            transition-all duration-300 ease-in-out
          `}
          >
            {sprints.map((sprint, index) => (
              <li key={sprint.id} className="w-full text-center lg:w-auto">
                <a
                  href={`#sprint-${sprint.id}`}
                  className={`nav-link text-black block py-2 px-3 ${
                    activeSprintIndex === index ? "font-bold" : ""
                  }`}
                  onClick={() => handleLinkClick(index)}
                >
                  {sprint.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* 🎨 STYLES */}
      <style>{`
        .liquidGlass-wrapper {
          position: relative;
          overflow: hidden;
          background: transparent;
          border-bottom: 1px solid rgba(0,0,0,0.05);
          min-height: 100px;
        }

        .liquidGlass-effect {
          position: absolute;
          inset: 0;
          z-index: 0;

          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);

          filter: url(#glass-distortion);
        }

        .liquidGlass-tint {
          position: absolute;
          inset: 0;
          z-index: 1;

          background: linear-gradient(
            to bottom,
            rgba(255,255,255,0.2),
            rgba(255,255,255,0.08)
          );
        }

        .liquidGlass-shine {
          position: absolute;
          inset: 0;
          z-index: 2;

          box-shadow: inset 0 1px 0 rgba(255,255,255,0.3);
        }

        /* 🔥 hover effect */
        .nav-link {
          position: relative;
          border-radius: 10px;
          transition: all 0.25s ease;
        }

        .nav-link:hover {
          transform: translateY(-2px) scale(1.03);
          background: rgba(255,255,255,0.2);
          box-shadow: 
            0 4px 10px rgba(0,0,0,0.08),
            inset 0 1px 0 rgba(255,255,255,0.4);
        }

        .nav-link:active {
          transform: scale(0.98);
        }
      `}</style>
    </>
  );
};