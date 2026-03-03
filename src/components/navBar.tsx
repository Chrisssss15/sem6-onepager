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
      className="w-full"
      style={{ background: "var(--Color-Cream, #FFF)" }}
      role="navigation"
      aria-label="Main navigation"
    >
<div className="w-full flex items-center justify-between px-6 py-6">        
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
              <button
                className={`text-black hover:opacity-70 transition-opacity ${
                  activeSprintIndex === index ? "font-bold" : ""
                }`}
                onClick={() => setActiveSprintIndex(index)}
                aria-current={activeSprintIndex === index ? "page" : undefined}
                type="button"
              >
                {sprint.label}
              </button>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
};