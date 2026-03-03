import './App.css'
import { Navigation } from "./components/navBar";
import HeroSection from "./components/heroSection";
import AboutUsSection from "./components/aboutUs";



function App() {
  return (
    <>
      <div className="font-sans">
        <Navigation />
        <HeroSection />
        <AboutUsSection />
      </div>
    </>
  );
}

export default App;




