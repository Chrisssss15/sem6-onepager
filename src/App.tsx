import './App.css'
import { Navigation } from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutUsSection from "./components/aboutUs";
import TeamValuesSection from "./components/teamValues";
import Sprint0Section from "./components/sprint-0";




function App() {
  return (
    <>
      <div className="font-sans">
        <Navigation />
        <HeroSection />
        <AboutUsSection />
        <TeamValuesSection />
        <Sprint0Section />
      </div>
    </>
  );
}

export default App;




