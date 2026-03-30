import "./App.css";
import { Navigation } from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutUsSection from "./components/aboutUs";
import TeamValuesSection from "./components/teamValues";
import Sprint0Section from "./components/sprint-0";
import Sprint1Section from "./components/sprint-1";
import Sprint2Section from "./components/sprint-2";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-sans bg-white">
      
      {/* Navbar altijd bovenaan */}
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

        <section className="min-h-screen">
          <Sprint0Section />
        </section>

        <section className="min-h-screen">
          <Sprint1Section />
        </section>

        <section className="min-h-screen">
          <Sprint2Section />
        </section>

        <footer className="min-h-[40vh]">
          <Footer />
        </footer>

      </main>
    </div>
  );
}

export default App;
