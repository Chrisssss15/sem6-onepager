import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import miniLogo from "../assets/mini-logo.svg";

import img1 from "../assets/conceptTimeline1.png";
import img2 from "../assets/conceptTimeline2.png";
import img3 from "../assets/conceptTimeline3.png";

const statementCards = [
  {
    label: "Richtlijn 1",
    title:
      "Kinderen weten vaak wel wat goed of fout is, maar vinden het lastig om daar ook naar te handelen wanneer ze echt in zo’n situatie zitten.",
    toelichting:
      "Kinderen kiezen vaak het juiste antwoord, maar kunnen moeilijk uitleggen waarom. Daarnaast verandert hun gedrag afhankelijk van context (bijv. alleen vs. in groep).",
  },
  {
    label: "Richtlijn 2",
    title:
      "Kinderen klikken vaak vanuit nieuwsgierigheid of gewoonte, zonder echt na te denken.",
    toelichting:
      "Kinderen handelen niet impulsief, maar denken bewust na en herkennen risico’s door eerdere voorlichting.",
  },
  {
    label: "Richtlijn 3",
    title:
      "Gevoel speelt een grote rol in keuzes (druk, nieuwsgierigheid, angst).",
    toelichting:
      "Gedrag wordt sterk beïnvloed door gevoel en vertrouwen, vooral in contact met bekenden.",
  },
];

const timelineItems = [
  {
    title: "Het concept",
    text: "Op basis van onze aannames ontwikkelden we Case Crackers: een interactief bordspel waarin kinderen samen digitale incidenten oplossen. Het concept helpt kinderen om veilig online gedrag toe te passen door situaties actief te analyseren en te bespreken, in plaats van alleen uitleg te krijgen. Tegelijk stimuleert het spel samenwerking en het gesprek over online veiligheid, ook met ouders.",
    imagePosition: "right" as const,
    image: img1,
  },
  {
    title: "Hoe het werkt",
    text: "Kinderen vormen een team en krijgen een case, zoals: “Wat is er gebeurd met Bart?”. Tijdens het spel verzamelen ze hints, trekken ze kanskaarten en analyseren ze clues zoals chats, links en screenshots. Samen bespreken ze wat er misging en welke keuzes beter waren. Het spel is niet alleen op te lossen, waardoor overleg, twijfel en samenwerking centraal staan.",
    imagePosition: "left" as const,
    image: img2,
  },
  {
    title: "De case van Bart",
    text: "In deze case ontdekken kinderen hoe Bart via een “win €1000”-advertentie op een link klikt en zijn gegevens invult, waarna hij wordt opgelicht. Door de situatie stap voor stap te reconstrueren, zien kinderen zelf waar het fout ging en welke signalen ze hadden kunnen herkennen.",
    imagePosition: "right" as const,
    image: img3,
  },
];

const SprintThreeSection = () => {
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
  return (
    <section id="sprint-3" className="py-15 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Intro tekst */}
        <p className="text-center text-lg md:text-xl max-w-3xl mx-auto mb-20 font-light leading-relaxed">
          In sprint 3 hebben we onze focus aangescherpt en een nieuwe
          ontwerpvraag geformuleerd. Op basis van eerder onderzoek bleek online
          veiligheid, en met name de rol van ouders, een belangrijk
          uitgangspunt. Vanuit deze vernieuwde richting hebben we aannames
          opgesteld, deze getest en vervolgens een prototype ontwikkeld en
          geëvalueerd.{" "}
        </p>
        {/* 
        <p className="text-center text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-16">
          In sprint 3 hebben we onze focus aangescherpt en een nieuwe
          ontwerpvraag geformuleerd. Op basis van eerder onderzoek bleek online
          veiligheid, en met name de rol van ouders, een belangrijk
          uitgangspunt. Vanuit deze vernieuwde richting hebben we aannames
          opgesteld, deze getest en vervolgens een prototype ontwikkeld en
          geëvalueerd.
        </p> */}

        {/* Decoratief icoon */}
        <div className="flex justify-center mb-8">
          <img src={miniLogo} alt="Decoratie" className="w-10 h-10 " />
        </div>

        {/* Ontwerpvraag label */}
        <p className="text-center text-sm font-medium tracking-wide text-muted-foreground mb-6">
          Ontwerpvraag
        </p>

        {/* Ontwerpvraag */}
        <blockquote className="text-center text-2xl md:text-3xl font-serif leading-snug max-w-3xl mx-auto">
          "Hoe kunnen we kinderen van 9–13 jaar in Rotterdam helpen om veilig
          online keuzes te maken, zoals wat ze delen, met wie ze praten en hoe
          ze reageren op verdachte situaties, met ondersteuning van ouders?"
        </blockquote>
      </div>

      {/* ================= AANNAMENS ================= */}
      <div className="mt-28 md:mt-32">
        <h3 className="text-4xl md:text-5xl font-serif italic text-center mb-12">
          Aannamens
        </h3>

        <p className="text-center text-base md:text-lg max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            Bij de aangescherpte richting hoorden ook nieuwe aannames. Deze hebben we getest met probes, waarin kinderen reageerden op herkenbare online situaties, zoals een bericht van een onbekende, een vriend die om een wachtwoord vraagt of een verdachte link.{" "}
        </p>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 md:gap-10 overflow-x-auto px-4 sm:px-8 md:px-[10vw] pb-8 snap-x snap-mandatory scrollbar-hide"
          >
            {statementCards.map((card) => (
              <div
                key={card.title}
                className="snap-center shrink-0 w-[85vw] sm:w-[70vw] md:w-[60vw] lg:max-w-[650px] min-h-[220px] bg-[#967B76] rounded-2xl shadow-md p-6 md:p-10 flex flex-col justify-center"
              >
                <h4 className="text-lg font-semibold mb-4 text-white">
                  {card.title}
                </h4>

                <p className="text-sm text-white leading-relaxed">
                  <span className="font-semibold text-white">
                    Resultaat: <br></br>
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


 {/* Timeline */}
        <div className="relative max-w-4xl mx-auto px-4">
          {/* Vertical dashed line */}
          <div className=" lg-6 md:pl-0 absolute left-1/2 top-20 -bottom-20 w-px border-l-2 border-dashed border-primary-foreground/40 -translate-x-1/2" />
          {timelineItems.map((item, index) => (
            <div key={index} className="relative mb-24 last:mb-16">
              {/* Timeline icon */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-14 z-10 w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                <img src={miniLogo} alt="" className="w-10 h-7 " />
              </div>

              <div
                className={`flex flex-col md:flex-row items-center gap-8 pt-15 ${
                  item.imagePosition === "left" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Text card */}
                <div className="flex-1 ">
                  <h3
                    className={`text-3xl md:text-4xl font-serif italic mb-4 ${
                      item.imagePosition === "left" ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {item.title}
                  </h3>
                  <div className="bg-[#292122] text-white border border-primary-foreground/20 rounded-lg p-5">
                    <p className="text-sm leading-relaxed text-primary-foreground/80 whitespace-pre-line">
                      {item.text}
                    </p>
                  </div>
                </div>

                {/* Image placeholder */}
                {/* <div className="flex-1">
                  <div className="rounded-lg overflow-hidden shadow-lg aspect-[4/3] bg-muted/20 flex items-center justify-center">
                    <span className="text-primary-foreground/30 text-sm">
                      Afbeelding
                    </span>
                  </div>
                </div> */}
                {/* img card */}
                <div className="flex-1">
                  <div className="rounded-lg overflow-hidden aspect-[4/3] pt-18">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-3xl h-auto object-cover "
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bottom icon */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-20 z-10 w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
            <img src={miniLogo} alt="" className="w-7 h-7 " />
          </div>
        </div>
    </section>
  );
};

export default SprintThreeSection;
