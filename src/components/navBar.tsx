import { useState } from "react";
import logo from "../assets/logo.svg";

export const Navigation = () => {
  const [activeSprintIndex, setActiveSprintIndex] = useState<number | null>(null);

  const sprints = [
    { id: 0, label: "Sprint 0" },
    { id: 1, label: "Sprint 1" },
    { id: 2, label: "Sprint 2" },
    { id: 3, label: "Sprint 3" },
    { id: 4, label: "Sprint 4" },
    { id: 5, label: "Sprint 5" },
  ];

  return (
    <nav
      // sticky top-0 zorgt dat hij blijft plakken
      // z-50 zorgt dat hij boven de 'sticky' secties (z-10 t/m z-40) uit de App.tsx blijft
      className="w-full sticky top-0 z-50 shadow-sm"
      style={{ background: "var(--Color-Cream, #FFF)" }}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="w-full flex items-center justify-between px-6 py-6 lg:px-16">        
        {/* Logo */}
        <a href="/" aria-label="Home">
          <img
            className="w-40 h-auto"
            alt="Appa logo"
            src={logo}
          />
        </a>

        {/* Menu */}
        <ul className="flex gap-10">
          {sprints.map((sprint, index) => (
            <li key={sprint.id}>
              <a
                href={`#sprint-${sprint.id}`}
                className={`text-black hover:opacity-70 transition-opacity ${
                  activeSprintIndex === index ? "font-bold" : ""
                }`}
                onClick={() => setActiveSprintIndex(index)}
              >
                {sprint.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};