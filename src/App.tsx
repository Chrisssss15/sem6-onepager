import './App.css'
import { Navigation } from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutUsSection from "./components/aboutUs";
import TeamValues from "./components/teamValues";



function App() {
  return (
    <>
      <div className="font-sans">
        <Navigation />
        <HeroSection />
        <AboutUsSection />
        <TeamValues />
      </div>
    </>
  );
}

export default App;




