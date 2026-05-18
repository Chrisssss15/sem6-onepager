import React from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
};

export default function Accordion({
  title,
  children,
  isOpen,
  onToggle,
}: AccordionProps) {
  return (
    <div
      className={`transition-colors duration-500 ${
        isOpen ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      {/* HEADER */}
      <button
        onClick={onToggle}
        className={`w-full flex flex-col items-center justify-center transition-all duration-300 ${
          isOpen ? "py-16" : "py-[48px]"
        }`}
      >
        <div className="flex items-center gap-4">
          <h2 className="text-5xl md:text-6xl italic font-serif">
            {title}
          </h2>

          {/* Chevron */}
          <span
            className={`text-xl transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
      </button>

      {/* ✅ ENIGE DIVIDER (clean & stabiel) */}
        <div className="flex justify-center">
        <div
            className="h-[1px] w-[80%] max-w-[800px]"
            style={{
            backgroundColor: isOpen ? "#000000" : "#ffffff00",
            opacity: isOpen ? 0.2 : 0.3,
            }}
        />
        </div>

      {/* CONTENT */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[12000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-20">{children}</div>
      </div>
    </div>
  );
}