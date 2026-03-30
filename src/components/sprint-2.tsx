import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import miniLogo from "../assets/mini-logo.svg";
import crazy8Img from "../assets/crazy-8.png";

// {image prototype}
import prototype1 from "../assets/prototype/prototype-1.png";
import prototype2 from "../assets/prototype/prototype-2.png";
import prototype3 from "../assets/prototype/prototype-3.png";
import prototype4 from "../assets/prototype/prototype-4.png";
import prototype5 from "../assets/prototype/prototype-5.png";
import prototype6 from "../assets/prototype/prototype-6.png";



const statementCards = [
  {
    label: "Richtlijn 1",
    title:
      "Het product moet een gezonde balans tussen online en offline activiteiten stimuleren, met focus op bewustwording in plaats van beperking.",
    toelichting:
      "Jongeren gebruiken media voor ontspanning en verbinding, dus het gaat om bewust gebruik — niet om beperken.",
  },
  {
    label: "Richtlijn 2",
    title:
      "Het product moet inzicht geven in het online gedrag van kinderen en de invloed van digitale platforms zichtbaar maken.",
    toelichting:
      "Jongeren missen vaak inzicht in schermtijd en beïnvloeding door algoritmes; bewustwording is nodig voor controle.",
  },
  {
    label: "Richtlijn 3",
    title:
      "Het product moet motivatie stimuleren met spelelementen zoals punten, leaderboard, levels en beloning.",
    toelichting:
      "Gamification sluit aan bij hun leefwereld en verhoogt motivatie en betrokkenheid.",
  },
  {
    label: "Richtlijn 4",
    title:
      "Het product moet sociale interactie en groepsinvloed gebruiken om positief gedrag te stimuleren.",
    toelichting:
      "Sociale interactie en groepsdruk sturen gedrag; positieve sociale elementen versterken gewenst gedrag.",
  },
  {
    label: "Richtlijn 5",
    title:
      "Het product moet ouders betrekken als ondersteunende begeleiders zonder volledige controle.",
    toelichting:
      "Ouders helpen bij beter digitaal gedrag, maar autonomie blijft belangrijk; begeleiding werkt beter dan controle.",
  },
  {
    label: "Richtlijn 6",
    title:
      "Het product moet bijdragen aan digitale veiligheid en weerbaarheid van kinderen.",
    toelichting:
      "Jongeren ervaren online risico’s; ondersteuning helpt hen veiliger en weerbaarder online te zijn.",
  },
];

const SprintTwoSection = () => {

const prototypeScrollRef = useRef<HTMLDivElement>(null);

const scrollRef = useRef<HTMLDivElement>(null);

const scroll = (direction: "left" | "right") => {
  if (scrollRef.current) {
    const amount = 500;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }
};

const scrollPrototype = (direction: "left" | "right") => {
  if (prototypeScrollRef.current) {
    const amount = 320;
    prototypeScrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  }
};

const prototypeImages = [
  prototype1,
  prototype2,
  prototype3,
  prototype4,
  prototype5,
  prototype6,
];


  return (
    <section className="py-20 px-4 bg-[#FFFDEB]">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-serif italic text-center text-foreground mb-8">
          Sprint 2
        </h2>

        {/* Intro text */}
        <p className="text-center text-foreground text-lg md:text-xl max-w-3xl mx-auto mb-20 font-light leading-relaxed">
          Op basis van onze onderzoeksinzichten zijn we in sprint 2 een
          duidelijke richting voor het prototype gaan verkennen. Vanuit een
          creatieve sessie hebben we ontwerprichtlijnen opgesteld, waaruit
          een eerste prototype is ontstaan.
        </p>

        {/* Divider logo */}
        <div className="flex justify-center mb-16">
          <img src={miniLogo} alt="" className="w-6 h-6" />
        </div>

        {/* Creatieve sessie */}
        <h3 className="text-4xl md:text-5xl font-serif italic text-center text-foreground mb-16">
          Creatieve sessie
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left - Full image */}
          <div>
            <img
              src={crazy8Img}
              alt="Crazy 8's en Concept overzicht"
              className="w-full rounded-md"
            />
          </div>

          {/* Right - Text */}
          <div className="flex items-center">
            <p className="text-foreground text-base md:text-lg font-light leading-relaxed">
              Tijdens een creatieve teamsessie hebben we de Crazy 8-methode
              gebruikt om snel veel ideeën te genereren. Door samen te stemmen
              en elkaar te inspireren, ontdekten we dat competitie
              (leaderboards), samenwerking (in groepjes) en gamification
              (punten en beloningen) sterk motiveren om schermtijd te
              verminderen. Ook zagen we kansen in ouderbetrokkenheid en een
              fysiek element. Later ontstonden ideeën zoals team challenges en
              gezamenlijke events, waarbij kinderen elkaar positief beïnvloeden
              en motiveren.
            </p>
          </div>
        </div>
      </div>



{/* Ontwerprichtlijnen */}
<div className="mt-24">
  <h3 className="text-4xl md:text-5xl font-serif italic text-center text-foreground mb-12">
    Ontwerprichtlijnen
  </h3>

<div className="relative">
  <div
    ref={scrollRef}
    className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto px-4 sm:px-8 md:px-[10vw] pb-8 snap-x snap-mandatory scrollbar-hide
    "
  >
      {statementCards.map((card) => (
<div
  key={card.title}
  className="snap-center shrink-0 
  w-[85vw] sm:w-[70vw] md:w-[60vw] lg:max-w-[650px]
  min-h-[220px] md:min-h-[260px] lg:h-[20vw]
  bg-white rounded-2xl shadow-md 
  p-6 sm:p-8 md:p-10 
  flex flex-col justify-center"
>
  <h4 className="text-lg sm:text-xl font-semibold mb-4 max-w-[90%] leading-snug text-black">
    {card.title}
  </h4>

  <p className="text-sm sm:text-base text-gray-600 max-w-[90%] leading-relaxed">
    <span className="font-semibold text-[#292122]">
      Onderbouwing:
    </span>{" "}
    {card.toelichting}
  </p>
</div>
      ))}
    </div>

    {/* Navigation arrows */}
    <div className="flex justify-end gap-4 px-6 mt-4">
      <button
        onClick={() => scroll("left")}
        className="text-gray-500 hover:text-black transition"
      >
        <ChevronLeft className="w-7 h-7" />
      </button>

      <button
        onClick={() => scroll("right")}
        className="text-gray-500 hover:text-black transition"
      >
        <ChevronRight className="w-7 h-7" />
      </button>
    </div>
  </div>
</div>



{/* {prototype} */}
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <h2 className="text-center text-5xl md:text-6xl font-serif italic text-[#1A1A1A] mb-16">
          Prototype
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          {/* Image */}
<div className="flex justify-center w-full md:w-1/2">
  <div className="w-full">
    <div
      ref={prototypeScrollRef}
      className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
    >
      {prototypeImages.map((img, i) => (
        <div
          key={i}
          className="snap-center shrink-0 flex justify-center w-full"
        >
          <img
            src={img}
            alt={`Prototype ${i + 1}`}
            className="w-[260px] sm:w-[300px] md:w-[340px] lg:w-[380px] rounded-[2rem] shadow-xl border border-black/10"
          />
        </div>
      ))}
    </div>

    {/* arrows onder image */}
    <div className="flex justify-center gap-10 mt-6">
      <button
        onClick={() => scrollPrototype("left")}
        className="text-gray-500 hover:text-black transition"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        onClick={() => scrollPrototype("right")}
        className="text-gray-500 hover:text-black transition"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  </div>
</div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <p className="text-[#2B2B2B] text-base sm:text-lg leading-relaxed font-light">
              Op basis van de ontwerprichtlijnen hebben we een prototype ontwikkeld om een duidelijker beeld te krijgen van een mogelijk product. Met dit prototype onderzoeken we of de gekozen functies en aannames aansluiten bij onze doelgroep. Bijvoorbeeld: motiveert het vergelijken van prestaties tot minder schermtijd? Werkt competitie direct stimulerend? Motiveert samenwerken sterker dan alleen werken? En draagt gamification meer bij dan geen beloning?
            </p>
          </div>
        </div>

        {/* Arrows
        <div className="flex justify-center gap-10 mt-16">
          <button className="text-gray-500 hover:text-black transition">
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button className="text-gray-500 hover:text-black transition">
            <ChevronRight className="w-8 h-8" />
          </button>
        </div> */}

      </div>

    </section>
  );
};

export default SprintTwoSection;
