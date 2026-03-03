import miniLogo from "../assets/mini-logo.svg";
import logoHero from "../assets/logo-hero.svg";
import chatRectangleBig from "../assets/chat-rectangle-big.svg";
import chatRectangleSmall from "../assets/chat-rectangle-small.svg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#FFFDEB] flex items-center overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left side - Chat bubbles */}
        <div className="flex flex-col gap-6 max-w-xl relative z-10">
          
          {/* Big chat bubble */}
          <div className="flex items-end gap-3">
            <img
              src={miniLogo}
              alt="Logo"
              className="w-9 h-9 flex-shrink-0 mb-1"
            />

            <div className="relative p-10 min-h-[220px] flex items-center">
              <img
                src={chatRectangleBig}
                alt=""
                className="absolute inset-0 w-full h-full object-contain -z-10"
              />

              <p className="text-foreground text-lg md:text-xl leading-relaxed font-light">
                Wij zijn een multidisciplinair team dat onderzoekt hoe jongeren
                bewuster online kunnen zijn en een gezondere online-offline
                balans kunnen vinden.
              </p>
            </div>
          </div>

          {/* Small chat bubble */}
          <div className="flex items-end gap-3">
            <img
              src={miniLogo}
              alt="Logo"
              className="w-9 h-9 flex-shrink-0 mb-1"
            />

            <div className="relative p-5 min-h-[120px] flex items-center">
              <img
                src={chatRectangleSmall}
                alt=""
                className="absolute inset-0 w-full h-full object-contain -z-10"
              />

              <p className="text-foreground text-lg md:text-xl leading-relaxed font-light">
                Sprint 0 is live, ontdek onze eerste inzichten!{" "}
                <span className="inline-block w-4 h-4 bg-foreground align-middle" />
              </p>
            </div>
          </div>

        </div>

        {/* Right side - Large logo */}
        <div className="flex-shrink-0">
          <img
            src={logoHero}
            alt="Logo"
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;