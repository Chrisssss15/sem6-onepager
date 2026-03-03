import './App.css'
import { Navigation } from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutUsSection from "./components/aboutUs";
import TeamValuesSection from "./components/teamValues";
import Sprint0Section from "./components/sprint-0";




function App() {
  return (
    <div className="font-sans bg-[#FFFDEB]">
      <Navigation />
      
      {/* Elke sectie krijgt h-screen (of min-h-screen) en sticky top-0 */}
      <main className="relative">
        <section className="sticky top-0 h-screen z-10">
          <HeroSection />
        </section>

        <section className="sticky top-0 h-screen z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <AboutUsSection />
        </section>

        <section className="sticky top-0 h-screen z-30 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <TeamValuesSection />
        </section>

        <section className="sticky top-0 h-screen z-40 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
          <Sprint0Section />
        </section>
      </main>
    </div>
  );
}

export default App;




