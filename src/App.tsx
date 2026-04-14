// import "./App.css";
// import { Navigation } from "./components/navBar";
// import HeroSection from "./components/heroSection";
// import AboutUsSection from "./components/aboutUs";
// import TeamValuesSection from "./components/teamValues";
// import Sprint0Section from "./components/sprint-0";
// import Sprint1Section from "./components/sprint-1";
// import Sprint2Section from "./components/sprint-2";
// import Sprint3Section from "./components/sprint-3";
// import Footer from "./components/footer";

// function App() {
//   return (
//     <div className="font-sans bg-white">
      
//       {/* Navbar altijd bovenaan */}
//       <div className="fixed top-0 left-0 w-full z-50">
//         <Navigation />
//       </div>

//       <main className="pt-[80px]">
//         <section className="min-h-screen">
//           <HeroSection />
//         </section>

//         <section className="min-h-screen">
//           <AboutUsSection />
//         </section>

//         <section className="min-h-screen">
//           <TeamValuesSection />
//         </section>

//         <section className="min-h-screen">
//           <Sprint0Section />
//         </section>

//         <section className="min-h-screen">
//           <Sprint1Section />
//         </section>

//         <section className="min-h-screen">
//           <Sprint2Section />
//         </section>

//         <section className="min-h-screen">
//           <Sprint3Section />
//         </section>

//         <footer className="min-h-[40vh]">
//           <Footer />
//         </footer>

//       </main>
//     </div>
//   );
// }

// export default App;



import "./App.css";
import { useState } from "react";
import { Navigation } from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutUsSection from "./components/aboutUs";
import TeamValuesSection from "./components/teamValues";
import Sprint0Section from "./components/sprint-0";
import Sprint1Section from "./components/sprint-1";
import Sprint2Section from "./components/sprint-2";
import Sprint3Section from "./components/sprint-3";
import Footer from "./components/footer";
import Accordion from "./components/accordion";

function App() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="font-sans bg-white">
      
      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navigation />
      </div>

      <main className="pt-[80px]">
        
        <section className="min-h-screen">
          <HeroSection />
        </section>

        <section className="min-h-screen">
          <AboutUsSection />
        </section>

        <section className="min-h-screen">
          <TeamValuesSection />
        </section>

        {/* 🔥 Accordions */}
        
        <Accordion
          title="Sprint 0"
          isOpen={openIndex === 0}
          onToggle={() =>
            setOpenIndex(openIndex === 0 ? null : 0)
          }
        >
          <Sprint0Section />
        </Accordion>

        <Accordion
          title="Sprint 1"
          isOpen={openIndex === 1}
          onToggle={() =>
            setOpenIndex(openIndex === 1 ? null : 1)
          }
        >
          <Sprint1Section />
        </Accordion>

        <Accordion
          title="Sprint 2"
          isOpen={openIndex === 2}
          onToggle={() =>
            setOpenIndex(openIndex === 2 ? null : 2)
          }
        >
          <Sprint2Section />
        </Accordion>

        <Accordion
          title="Sprint 3"
          isOpen={openIndex === 3}
          onToggle={() =>
            setOpenIndex(openIndex === 3 ? null : 3)
          }
        >
          <Sprint3Section />
        </Accordion>

        <footer className="min-h-[40vh]">
          <Footer />
        </footer>

      </main>
    </div>
  );
}

export default App;