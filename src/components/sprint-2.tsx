import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import crazy8Img from "../assets/crazy-8.png";

// prototype images
import prototypeDisplay from "../assets/prototype/prototype-mockup.png";
import prototype1 from "../assets/prototype/prototype-1.png";
import prototype2 from "../assets/prototype/prototype-2.png";
import prototype3 from "../assets/prototype/prototype-3.png";
import prototype4 from "../assets/prototype/prototype-4.png";
import prototype5 from "../assets/prototype/prototype-5.png";
import prototype6 from "../assets/prototype/prototype-6.png";

// persona images
import UserPersona1 from "../assets/UserPersona/UserPersona-1.png";
import UserPersona2 from "../assets/UserPersona/UserPersona-2.png";
import UserPersona3 from "../assets/UserPersona/UserPersona-3.png";
import UserPersona4 from "../assets/UserPersona/UserPersona-4.png";

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

const interviewTopics = [
  {
    label: "Triggers & automatisch gedrag",
    fieldresearch: `Uit het fieldresearch blijkt dat schermgebruik bij kinderen vaak automatisch en zonder nadenken gebeurt. Vooral momenten van verveling, na school, meldingen en overgangsmomenten (zoals van school naar thuis) zorgen ervoor dat kinderen direct naar hun telefoon grijpen. Ook tijdens huiswerk en bij vermoeidheid wordt de telefoon snel gebruikt als afleiding.`,
    content:
      "Dit gedrag is sterk gewoontegedreven: zelfs zonder meldingen blijven kinderen hun telefoon pakken. Zodra er een leeg moment ontstaat of ze “niks te doen hebben”, wordt de telefoon automatisch gepakt. Daarbij ontbreken duidelijke stopmomenten, waardoor gebruik vanzelf doorloopt en kinderen vaak het tijdsbesef verliezen tijdens scrollen of gamen. Ook dagelijkse routines en wachtmomenten, zoals in de ochtend of onderweg, versterken dit patroon.",
    kerninzicht: `Kerninzicht: schermgebruik is geen bewuste keuze, maar een automatische reflex op leegte en momenten zonder structuur.`,
  },
  {
    label: "Vastzitten in gebruik",
    fieldresearch: `Uit het fieldresearch blijkt dat kinderen niet alleen hun telefoon gebruiken, maar er ook echt in vast blijven zitten. Het gebruik is sterk gewoontegedreven (“gewoon automatisch”) en kinderen hebben moeite met stoppen (“nog één potje”, “blijven hangen”). Platforms zoals TikTok, YouTube en Instagram spelen hierop in door middel van korte, snelle beloningen, eindeloze feeds en autoplay, waardoor kinderen continu gestimuleerd worden om door te blijven kijken.`,
    content:
      "Scrollen wordt vaak ervaren als ontspanning en afleiding, maar leidt er tegelijkertijd toe dat kinderen langer online blijven dan gepland en zonder doel blijven hangen. Online activiteiten zijn laagdrempelig, direct beschikbaar en continu belonend, waardoor ze moeilijk te onderbreken zijn. Daarnaast zien we dat scrollen soms ook wordt gebruikt als vermijding (bijvoorbeeld ondanks veel berichten of taken), en dat gebruik vooral als “te veel” wordt ervaren wanneer er langdurig passief wordt geconsumeerd.",
    kerninzicht: `Kerninzicht: kinderen gebruiken hun telefoon niet alleen, maar raken erin vast door sterke gewoontes en continue beloningsmechanismen.`,
  },
  {
    label: "Bewustzijn vs gedrag",
    fieldresearch: `Het fieldresearch laat zien dat kinderen zich vaak bewust zijn van hun schermgebruik, maar moeite hebben om dit gedrag daadwerkelijk te veranderen. Ze geven aan dat ze te lang op hun telefoon zitten en soms spijt ervaren, maar hebben tegelijkertijd weinig controle over hun gedrag. Zelfregulatie ontbreekt grotendeels en stopmomenten worden zelden actief genomen.`,
    content:
      "Er is een duidelijke tegenstrijdigheid zichtbaar: kinderen willen minder schermtijd, maar vinden het tegelijkertijd leuk en blijven toch online. Ook missen ze offline activiteiten, zonder hier daadwerkelijk actie op te ondernemen. Bewustzijn ontstaat vaak door externe factoren, zoals ouders die aangeven dat het “te veel” is, en wordt soms pas achteraf gevoeld (bijvoorbeeld aan het einde van de dag). Daarnaast spelen lichamelijke signalen zoals hoofdpijn, vermoeidheid en prikkelbaarheid een rol in dit besef.",
    kerninzicht: `Kerninzicht: er is wel bewustzijn, maar dit vertaalt zich niet naar gedrag — er zit een duidelijke kloof tussen wat kinderen willen en wat ze daadwerkelijk doen.`,
  },

  {
    label: "Motivatie",
    fieldresearch: `Uit het fieldresearch blijkt dat online activiteiten vrijwel altijd winnen van offline alternatieven, omdat ze makkelijker, sneller leuk en altijd beschikbaar zijn. Kinderen gebruiken hun telefoon voor entertainment (video’s, games), maar ook voor sociaal contact via apps zoals Snapchat en WhatsApp. Gamen geeft een gevoel van competitie en succes, terwijl scrollen weinig moeite kost en geen denkwerk vereist.`,
    content:
      "Offline activiteiten daarentegen vragen meer energie en initiatief, waardoor kinderen sneller kiezen voor de “lichtere” optie: hun telefoon. Dit wordt versterkt doordat kinderen vaak aangeven dat ze niet weten wat ze anders moeten doen of het gevoel hebben dat ze “alles al gedaan hebben”. Bij oudere jongeren speelt ook uitstelgedrag een rol, waarbij online gebruik wordt ingezet om taken te vermijden. Daarnaast voelt functioneel gebruik (zoals muziek of school) minder problematisch, waardoor schermtijd makkelijker wordt gerechtvaardigd.",
    kerninzicht: `Kerninzicht: online wint omdat het de snelste en makkelijkste manier is om plezier, afleiding of sociale interactie te krijgen.`,
  },

  {
    label: "Ouders & controle",
    fieldresearch: `Het fieldresearch laat zien dat ouders een belangrijke rol spelen in het reguleren van schermgebruik via regels, limieten en controle. Denk hierbij aan afspraken zoals geen telefoon in de slaapkamer, tijdslimieten of het verbieden van bepaalde apps. Deze regels zorgen voor structuur, maar leiden vaak niet tot blijvende gedragsverandering.
Kinderen ervaren regels regelmatig als oneerlijk of beperkend en zoeken manieren om deze te omzeilen, wat kan leiden tot compensatiegedrag. Tegelijkertijd verschilt de aanpak per ouder: een strenge aanpak zorgt voor meer structuur, terwijl een lossere aanpak vaak leidt tot meer schermtijd. Ouders ervaren hierbij een hoge mate van verantwoordelijkheid en mentale belasting, wat soms resulteert in spanningen en discussies binnen het gezin.`,
    content:
      "Naarmate kinderen ouder worden, verschuift de controle meer naar het kind zelf en neemt de invloed van ouders af, terwijl school soms een grotere rol speelt. Zowel ouders als kinderen geven aan behoefte te hebben aan minder controle en meer zelfstandigheid en samenwerking.",
    kerninzicht: `Kerninzicht: ouders houden de balans deels in stand, maar lossen het probleem niet structureel op en ervaren daarbij zelf ook druk.`,
  },

  {
    label: "Sociale & omgevingsinvloed",
    fieldresearch: `Uit het fieldresearch blijkt dat schermgedrag sterk wordt beïnvloed door de sociale omgeving van kinderen. Vrienden spelen hierin een grote rol: omdat “iedereen op z’n telefoon zit”, wordt online zijn de norm. Sociale functies zoals Snapchat (streaks), WhatsApp en samen gamen versterken dit gedrag en zorgen ervoor dat online aanwezigheid belangrijk voelt om erbij te horen.`,
    content:
      "Daarnaast zorgt sociale vergelijking (“zij mogen meer”) voor weerstand tegen regels, en kan FOMO een rol spelen in het blijven checken van de telefoon. Opvallend is dat offline gedrag minder aantrekkelijk wordt wanneer anderen online zijn, terwijl samen offline activiteiten juist een sterke motivator vormen. Ook het type vriendengroep maakt verschil: kinderen met meer offline actieve vrienden vertonen zelf ook meer offline gedrag. Structuur vanuit school of activiteiten (zoals een telefoonverbod) kan hierbij helpen en leidt vaak tot meer sociale interactie in het echt.",
    kerninzicht: `Kerninzicht: schermgedrag is niet individueel, maar wordt sterk gevormd door sociale normen en de omgeving van het kind.`,
  },

  {
    label: "Wat werkt niet vs wat werkt wel",
    fieldresearch: `Het fieldresearch laat zien dat veel bestaande oplossingen onvoldoende effectief zijn. Maatregelen zoals schermtijdlimieten, blokkades en strikte regels worden vaak genegeerd, omzeild of zorgen voor weerstand, vooral wanneer motivatie ontbreekt. Ook tools die controlerend of verplicht zijn, of veel data verzamelen, leiden tot wantrouwen en worden niet vrijwillig gebruikt. Alleen focussen op “minder schermtijd” blijkt daardoor niet voldoende voor blijvende gedragsverandering.`,
    content:
      "Wat wél werkt, zijn oplossingen die inspelen op motivatie en beleving. Leuke offline activiteiten, vooral samen met anderen, helpen om schermgebruik te verminderen. Structuur en planning zorgen voor minder lege momenten, waardoor triggers afnemen. Daarnaast werken positieve prikkels zoals beloningen, challenges met vrienden en het gebruik van schermtijd als beloning beter dan straffen of beperkingen. Ook het vergroten van bewustwording, zonder controlerend te zijn, draagt bij aan verandering.",
    kerninzicht: `Kerninzicht: gedrag verandert alleen wanneer kinderen zelf gemotiveerd zijn en er aantrekkelijke, sociale alternatieven beschikbaar zijn.`,
  },

  {
    label: "Impact op offline leven",
    fieldresearch: `Uit het fieldresearch blijkt dat schermgebruik een duidelijke impact heeft op het offline leven van kinderen. Activiteiten zoals buitenspelen, bewegen en creatieve bezigheden worden steeds vaker uitgesteld of vervangen door online gedrag. Hoewel sommige kinderen aangeven weinig negatieve impact te ervaren, geeft een groot deel aan offline activiteiten juist te missen, zonder hier actie op te ondernemen.`,
    content:
      "Daarnaast zijn er zichtbare effecten op dagelijks functioneren, zoals minder huiswerk maken, slechter slapen (bijvoorbeeld door telefoongebruik in bed) en minder fysiek contact met anderen. Ook basisbehoeften en gewoontes, zoals lezen, drinken of bewust zijn van de omgeving, komen onder druk te staan. Kinderen ervaren bovendien fysieke klachten zoals hoofdpijn, vermoeide ogen en vermoeidheid. Tegelijkertijd ontstaat er een duidelijk contrast: offline activiteiten zorgen juist voor rust, meer energie en een positiever gevoel, terwijl sporten en bewegen de behoefte aan schermgebruik direct verminderen.",
    kerninzicht: `Kerninzicht: schermgebruik verdringt het offline leven, terwijl de behoefte eraan nog steeds sterk aanwezig is.`,
  },
];

const useSlider = (length: number) => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev === length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return { index, next, prev };
};

const SprintTwoSection = () => {
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

  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

    const [fadePersona, setFadePersona] = useState(false);
    const [fadePrototype, setFadePrototype] = useState(false);

  const personaSlides = [
    UserPersona1,
    UserPersona2,
    UserPersona3,
    UserPersona4,
  ];

const nextPersona = () => {
  setFadePersona(true);
  setTimeout(() => {
    personaSlider.next();
    setFadePersona(false);
  }, 150);
};

const prevPersona = () => {
  setFadePersona(true);
  setTimeout(() => {
    personaSlider.prev();
    setFadePersona(false);
  }, 150);
};
  const prototypeImages = [
    prototypeDisplay,
    prototype1,
    prototype2,
    prototype3,
    prototype4,
    prototype5,
    prototype6,
  ];
  const nextPrototype = () => {
  setFadePrototype(true);
  setTimeout(() => {
    prototypeSlider.next();
    setFadePrototype(false);
  }, 150);
};

const prevPrototype = () => {
  setFadePrototype(true);
  setTimeout(() => {
    prototypeSlider.prev();
    setFadePrototype(false);
  }, 150);
};

  // 🔥 sliders
  const personaSlider = useSlider(personaSlides.length);
  const prototypeSlider = useSlider(prototypeImages.length);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="sprint-2" className="py-20 px-4 bg-[#FFFDEB]">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-5xl md:text-7xl font-serif italic text-center mb-8">
          Sprint 2
        </h2>

        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-20 font-light leading-relaxed">
          In sprint 2 vertaalden we onze onderzoeksinzichten naar actie. Door
          middel van fieldresearch en een creatieve sessie formuleerden we
          ontwerprichtlijnen, waarmee we onze ontwerpvraag aanscherpten en
          ouders een ondersteunende rol gaven. Dit resulteerde in ontwerpvraag 3
          en de eerste stap richting een prototype.{" "}
        </p>

        <h3 className="text-4xl md:text-5xl font-serif italic text-center mt-28 md:mt-32 mx-auto mb-10">
          Creatieve sessie
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* <img src={crazy8Img} className="w-full rounded-md" /> */}

          <img
            src={crazy8Img}
            onClick={() => setActiveImage(crazy8Img)}
            className="w-full rounded-md cursor-zoom-in"
          />

          <p className="max-w-[615px] font-sans text-[13px] md:text-[18px] leading-[26px] md:leading-[39px] text-black">
            Tijdens een creatieve teamsessie hebben we de Crazy 8-methode
            gebruikt om snel veel ideeën te genereren. Door samen te stemmen en
            elkaar te inspireren, ontdekten we dat competitie (leaderboards),
            samenwerking (in groepjes) en gamification (punten en beloningen)
            sterk motiveren om schermtijd te verminderen. Ook zagen we kansen in
            ouderbetrokkenheid en een fysiek element. Later ontstonden ideeën
            zoals team challenges en gezamenlijke events, waarbij kinderen
            elkaar positief beïnvloeden en motiveren.{" "}
          </p>
        </div>
      </div>

      {/* ================= INTERVIEWS ================= */}
      <div className="mt-28 md:mt-32">
        <h3 className="text-4xl md:text-5xl font-serif italic text-center mb-6">
          Interviews met de doelgroep
        </h3>

        <p className="text-center text-base md:text-lg max-w-3xl mx-auto mb-10 font-light leading-relaxed">
          We spraken met kinderen (9–13 jaar), ouder en jongeren van 16+, om
          zowel huidig gedrag als reflectie op schermgebruik vanuit
          verschillende perspectieven te begrijpen.{" "}
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {interviewTopics.map((label, index) => (
            <button
              key={label.label}
              onClick={() => setActiveTopicIndex(index)}
              className={` px-6 md:px-8 py-3 md:py-4 rounded-[16px] flex items-center justify-center border border-black/70 text-[15px] md:text-[16px] font-medium whitespace-nowrap transition-all duration-200
                    ${
                      activeTopicIndex === index
                        ? "bg-black text-white/90 shadow-sm"
                        : "bg-transparent text-black/80 hover:bg-black/5"
                    }
                `}
            >
              {label.label}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="bg-[#292122] text-white rounded-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.12)] w-full max-w-[900px] mx-auto px-5 py-5 md:px-7 md:py-7 lg:px-10 lg:py-10">
          <p className="font-sans text-[15px] leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[30px] text-white/90">
            {interviewTopics[activeTopicIndex].fieldresearch}
          </p>

          <p className="mt-5 md:mt-6 font-sans text-[15px] leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[30px] text-white/90">
            {interviewTopics[activeTopicIndex].content}
          </p>

          <p className="mt-6 md:mt-8 font-sans font-semibold text-[15px] leading-[24px] md:text-[16px] md:leading-[26px] lg:text-[18px] lg:leading-[30px]">
            Kerninzicht:{" "}
            {interviewTopics[activeTopicIndex].kerninzicht.replace(
              "Kerninzicht: ",
              "",
            )}
          </p>
        </div>
      </div>

      {/* ================= PERSONA ================= */}
      <div className="mt-28 md:mt-32 text-center">
        <h3 className="text-4xl md:text-5xl font-serif italic mb-6">
          Persona's
        </h3>

        <p className=" max-w-[800px] mx-auto text-center font-sans text-[15px] md:text-[17px] lg:text-[18px] leading-[26px] md:leading-[28px] lg:leading-[30px] text-black/70 mb-6">
          We hebben zowel een user persona als meerdere non-human persona’s
          ontwikkeld. De user persona geeft inzicht in het gedrag, de behoeften
          en uitdagingen van de doelgroep. De non-human persona’s (zoals de
          smartphone, social media en offline leven) helpen ons om ook de
          invloed van de omgeving en systemen beter te begrijpen. Samen geven ze
          een compleet beeld van het probleem en vormen ze de basis voor ons
          ontwerp.
        </p>

        {/* slider image */}
        <div className="relative mb-8 flex justify-center">
          {/* <img
            src={personaSlides[personaSlider.index]}
            alt={`Persona ${personaSlider.index + 1}`}
            className="w-full max-w-[500px] mx-auto rounded-lg"
          /> */}
        <img
        src={personaSlides[personaSlider.index]}
        className={`
            w-full max-w-[500px] mx-auto rounded-lg
            transition-opacity duration-200
            ${fadePersona ? "opacity-0" : "opacity-100"}
        `}
        />
        </div>

        {/* arrows */}
        <div className="flex justify-center gap-4 mb-20">
          <button
            onClick={prevPersona}
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            ←
          </button>

          <button
            onClick={nextPersona}            
            className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
          >
            →
          </button>
        </div>
      </div>

      {/* ================= ONTWERPRICHTLIJNEN ================= */}
      <div className="mt-28 md:mt-32">
        <h3 className="text-4xl md:text-5xl font-serif italic text-center mb-12">
          Ontwerprichtlijnen
        </h3>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto px-4 sm:px-8 md:px-[10vw] pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {statementCards.map((card) => (
              <div
                key={card.title}
                className="snap-center shrink-0 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:max-w-[650px] min-h-[220px] bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col justify-center"
              >
                <h4 className="text-lg font-semibold mb-4 text-black">
                  {card.title}
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed">
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

      {/* ================= ONTWERPVRAAG ================= */}
      <div className="mt-28 md:mt-32 text-center">
        <p className="text-sm uppercase mb-4">Ontwerpvraag</p>
        <blockquote className="max-w-[900px] mx-auto text-center font-serif italic font-normal text-[22px] md:text-[28px] lg:text-[36px] leading-[1.4] text-black/90">
          ”Hoe kunnen we Rotterdamse kinderen van 9–13 jaar helpen controle te
          krijgen op hun online gedrag, terwijl ouders hen ondersteunen in het
          ontwikkelen van een dagelijkse routine met aantrekkelijke offline
          alternatieven?”
        </blockquote>
      </div>

      {/* ================= PROTOTYPE ================= */}
      <div className="max-w-6xl mx-auto mt-28 md:mt-32">
        <h2 className="text-center text-5xl md:text-6xl font-serif italic mb-16">
          Prototype
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          <div className="w-full md:w-1/2 flex flex-col items-center">
            {/* image */}
            <img
            src={prototypeImages[prototypeSlider.index]}
            className={`
                h-[50vh] rounded-[2rem]
                transition-opacity duration-200
                ${fadePrototype ? "opacity-0" : "opacity-100"}
            `}
            />

            {/* arrows */}
            <div className="flex justify-center gap-6 mt-4 md:hidden">
              <button onClick={prevPrototype}>←</button>
              <button onClick={nextPrototype}>→</button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <p className="max-w-[615px] font-sans text-[15px] md:text-[20px] leading-[28px] md:leading-[41px] text-black">
              Op basis van de ontwerprichtlijnen hebben we een prototype
              ontwikkeld om een duidelijker beeld te krijgen van een mogelijk
              product. Met dit prototype onderzoeken we of de gekozen functies
              en aannames aansluiten bij onze doelgroep. Bijvoorbeeld: motiveert
              het vergelijken van prestaties tot minder schermtijd? Werkt
              competitie direct stimulerend? Motiveert samenwerken sterker dan
              alleen werken? En draagt gamification meer bij dan geen
              beloning?{" "}
            </p>
          </div>
        </div>

        {/* arrows */}
        <div className="hidden md:flex justify-center gap-10 mt-6">
          <button onClick={prevPrototype}>
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button onClick={nextPrototype}>
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 text-white text-2xl z-50"
            >
              ✕
            </button>

            {/* image */}
            {/* <img
                src={activeImage}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            /> */}
            <img
              src={activeImage}
              className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-5xl h-auto max-h-[80vh] md:max-h-[85vh] lg:max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default SprintTwoSection;
