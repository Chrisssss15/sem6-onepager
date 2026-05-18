// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // Importeer icoontjes voor mobiel
// import logo from "../assets/logo.svg";

// // Dit onthoudt op welke Sprint je hebt geklikt (om die tekst dikgedrukt te maken)
// export const Navigation = () => {
//   const [activeSprintIndex, setActiveSprintIndex] = useState<number | null>(
//     null,
//   );
//   // Dit is de schakelaar voor het mobiele menu: true is OPEN, false is DICHT
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State voor mobiel menu

//   // De lijst met linkjes die in het menu komen te staan
//   const sprints = [
//     { id: 0, label: "Sprint 0" },
//     { id: 1, label: "Sprint 1" },
//     { id: 2, label: "Sprint 2" },
//     { id: 3, label: "Sprint 3" },
//     // { id: 4, label: "Sprint 4" },
//     // { id: 5, label: "Sprint 5" },
//   ];

//   // Wat er gebeurt als je op een menu-item klikt:
//   const handleLinkClick = (index: number) => {
//     setActiveSprintIndex(index); // De geklikte sprint wordt 'actief' (dikgedrukt)
//     setIsMenuOpen(false); // Sluit menu na klik op mobiel
//   };

//   return (
//     <nav
//       className="w-full top-0 z-50 shadow-sm"
//       style={{ background: "var(--Color-Cream, #FFF)" }}
//       role="navigation"
//       aria-label="Main navigation"
//     >
//       <div className="w-full flex items-center justify-between px-6 py-6 lg:px-16">
//         {/* Logo */}
//         <a href="/2025_2026/idp_ds_t8/" aria-label="Home" className="z-50">
//           <img
//             className="w-32 md:w-40 h-auto" // Iets kleiner op heel smalle schermen
//             alt="Appa logo"
//             src={logo}
//           />
//         </a>

//         {/* Mobiele Hamburger Knop */}
//         <button
//           className="lg:hidden z-50 text-black p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Menu (Desktop & Mobiel) */}
//         <ul
//           className={`
//           /* Desktop styling (ongewijzigd) */
//           lg:flex lg:gap-10 lg:static lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none lg:w-auto lg:h-auto
          
//           /* Mobiele styling (verborgen tenzij open) */
//           ${isMenuOpen ? "flex" : "hidden"}
//           flex-col gap-6 absolute top-0 left-0 w-full h-screen bg-white items-center justify-center text-xl
//           transition-all duration-300 ease-in-out
//         `}
//         >
//           {sprints.map((sprint, index) => (
//             <li key={sprint.id} className="w-full text-center lg:w-auto">
//               <a
//                 href={`#sprint-${sprint.id}`}
//                 className={`text-black hover:opacity-70 transition-opacity block py-2 ${
//                   activeSprintIndex === index ? "font-bold" : ""
//                 }`}
//                 onClick={() => handleLinkClick(index)}
//               >
//                 {sprint.label}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };



// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import logo from "../assets/logo.svg";

// export const Navigation = () => {
//   const [activeSprintIndex, setActiveSprintIndex] = useState<number | null>(
//     null,
//   );
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const sprints = [
//     { id: 0, label: "Sprint 0" },
//     { id: 1, label: "Sprint 1" },
//     { id: 2, label: "Sprint 2" },
//     { id: 3, label: "Sprint 3" },
//   ];

//   // 🔥 NIEUWE scroll functie
//   const handleLinkClick = (index: number, id: number) => {
//     setActiveSprintIndex(index);
//     setIsMenuOpen(false);

//     const element = document.getElementById(`sprint-${id}`);
//     const navbarHeight = 80; // pas aan als je navbar hoger/lager is

//     if (element) {
//       const y =
//         element.getBoundingClientRect().top +
//         window.scrollY -
//         navbarHeight;

//       window.scrollTo({
//         top: y,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <nav
//       className="w-full top-0 z-50 shadow-sm"
//       style={{ background: "var(--Color-Cream, #FFF)" }}
//       role="navigation"
//       aria-label="Main navigation"
//     >
//       <div className="w-full flex items-center justify-between px-6 py-6 lg:px-16">
//         {/* Logo */}
//         <a href="/2025_2026/idp_ds_t8/" aria-label="Home" className="z-50">
//           <img
//             className="w-32 md:w-40 h-auto"
//             alt="Appa logo"
//             src={logo}
//           />
//         </a>

//         {/* Mobile menu button */}
//         <button
//           className="lg:hidden z-50 text-black p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>

//         {/* Menu */}
//         <ul
//           className={`
//           lg:flex lg:gap-10 lg:static lg:flex-row lg:bg-transparent lg:p-0 lg:shadow-none lg:w-auto lg:h-auto
//           ${isMenuOpen ? "flex" : "hidden"}
//           flex-col gap-6 absolute top-0 left-0 w-full h-screen bg-white items-center justify-center text-xl
//           transition-all duration-300 ease-in-out
//         `}
//         >
//           {sprints.map((sprint, index) => (
//             <li key={sprint.id} className="w-full text-center lg:w-auto">
//               <button
//                 className={`text-black hover:opacity-70 transition-opacity block py-2 ${
//                   activeSprintIndex === index ? "font-bold" : ""
//                 }`}
//                 onClick={() => handleLinkClick(index, sprint.id)}
//               >
//                 {sprint.label}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.svg";

type NavigationProps = {
  onSprintClick: (index: number) => void;
};

export const Navigation = ({ onSprintClick }: NavigationProps) => {
  const [activeSprintIndex, setActiveSprintIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sprints = [
    { id: 0, label: "Sprint 0" },
    { id: 1, label: "Sprint 1" },
    { id: 2, label: "Sprint 2" },
    { id: 3, label: "Sprint 3" },
    { id: 4, label: "Sprint 4" },
  ];

  // 🔥 voorkom scroll op body als menu open is
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleLinkClick = (index: number, id: number) => {
    setActiveSprintIndex(index);
    setIsMenuOpen(false);

    onSprintClick(index);

    const element = document.getElementById(`sprint-${id}`);
    const navbarHeight = 80;

    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-full fixed top-0 z-50 bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-6 lg:px-16">
        
        {/* Logo */}
        <a href="/" className="z-50">
          <img className="w-32 md:w-40" src={logo} alt="logo" />
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden lg:flex gap-10">
          {sprints.map((sprint, index) => (
            <li key={sprint.id}>
              <button
                className={`${
                  activeSprintIndex === index ? "font-bold" : ""
                }`}
                onClick={() => handleLinkClick(index, sprint.id)}
              >
                {sprint.label}
              </button>
            </li>
          ))}
        </ul>

        {/* 🔥 Mobile overlay menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {sprints.map((sprint, index) => (
            <button
              key={sprint.id}
              className={`${
                activeSprintIndex === index ? "font-bold" : ""
              }`}
              onClick={() => handleLinkClick(index, sprint.id)}
            >
              {sprint.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};