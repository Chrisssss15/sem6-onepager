import miniLogo from "../assets/mini-logo.svg";
import boardImage from "../assets/case-crackers-board.png";
import startPhones from "../assets/start-phones.png";
import teamPhones from "../assets/team-phones.png";
import answersPhones from "../assets/answers-phones.png";
import solutionPhones from "../assets/solution-phones.png";
import reflectionPhone from "../assets/reflection-phone.png";

type TimelineItem = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  imagePosition: "left" | "right";
  imageClassName?: string;
};

const timelineItems: TimelineItem[] = [
  {
    title: "Start van het spel",
    text: "De app start met een introductiescherm waarin gebruikers het spel kunnen openen en gebruik kunnen maken van een duidelijke login- en startflow. Daarna komen spelers op het homescherm terecht, waar zij direct het spel kunnen starten, uitleg kunnen bekijken of zelf een eigen case kunnen maken. De schermen zijn ontworpen in dezelfde speelse en herkenbare stijl als het bordspel, zodat er één consistente spelervaring ontstaat.",
    image: startPhones,
    imageAlt: "Mobiele schermen voor de start van Case Crackers",
    imagePosition: "right",
  },
  {
    title: "Teams & case kiezen",
    text: "Binnen de app kunnen spelers eerst hun team samenstellen door teamnamen en avatars toe te voegen. Hierdoor krijgt ieder team een eigen identiteit en wordt samenwerking meteen het startpunt gestimuleerd. Vervolgens kunnen spelers een case kiezen door een slachtoffer te selecteren uit verschillende scenario's. Op deze manier sluit ieder spel vanuit een herkenbare en interactieve situatie aan waarbij bij online veiligheid een digitale instap krijgt.",
    image: teamPhones,
    imageAlt: "Mobiele schermen voor teams en case kiezen",
    imagePosition: "left",
  },
  {
    title: "Antwoorden & hints",
    text: "Tijdens het spel kunnen teams in de app hun antwoord indienen door te kiezen voor wat zij volgens hen fout vinden aan een bepaalde situatie. De app geeft vervolgens direct feedback, zodat ze leren of hun keuze wel of niet bij de juiste hints en inzichten past. Wanneer spelers interactieve kaarten raken die helpen bij het oplossen van de case, kunnen ze ook hints en bewijzen verzamelen. Iedere hint verschijnt op een eigen kaart en helpt de spelers om patronen te herkennen, signalen te beoordelen en stap voor stap dichter bij de oplossing van de case te komen.",
    image: answersPhones,
    imageAlt: "Mobiele schermen voor antwoorden en hints",
    imagePosition: "right",
  },
  {
    title: "Oplossing uitgelegd",
    text: "Wanneer een team de case goed raadt, laat de app stap voor stap zien wat er is gebeurd. Zo begrijpen spelers niet alleen dát het antwoord goed is, maar ook waarom de situatie onveilig was en welke signalen zij hadden kunnen herkennen.",
    image: solutionPhones,
    imageAlt: "Mobiele schermen waarin de oplossing wordt uitgelegd",
    imagePosition: "left",
  },
  {
    title: "Reflectie & gesprek",
    text: "Na het oplossen van een case stimuleert de app spelers om samen te reflecteren op de situatie. Door vragen zoals ‘Wat zou jij anders doen?’ worden kinderen uitgenodigd om met elkaar en met volwassenen in gesprek te gaan over online keuzes, veiligheid en grenzen. Hierdoor draait het spel niet alleen om winnen, maar ook om bewustwording en gezamenlijke reflectie.",
    image: reflectionPhone,
    imageAlt: "Mobiel reflectiescherm van Case Crackers",
    imagePosition: "right",
    imageClassName: "max-h-[300px]",
  },
];

const SprintFourSection = () => {
  return (
    <section
      id="sprint-4-content"
      className="px-4 py-14 md:px-8 md:py-20 text-[#292122]"
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-base md:text-lg max-w-3xl mx-auto mb-20 font-light leading-relaxed">
          In sprint 4 hebben we het concept verder uitgewerkt tot een concreter
          en samenhangend eindproduct. Het bordspel werd verder ontwikkeld,
          inclusief de huisstijl, spelregels en cases. Daarnaast hebben we de
          digitale ondersteuning van het spel uitgewerkt in de vorm van een
          appconcept, waarbij de eerste schermen en flow zijn ontworpen en de
          ontwikkeling van de app is gestart. Op basis van onderzoek en testen
          hebben we bovendien besloten om de rol van ouders te verbreden naar
          volwassenen, zodat het spel toegankelijker wordt voor verschillende
          sociale situaties en begeleiders.
        </p>

        <div className="flex justify-center mb-8">
          <img src={miniLogo} alt="Decoratie" className="w-10 h-10" />
        </div>

        <p className="text-center text-sm font-medium tracking-wide text-[#292122]/70 mb-6">
          Ontwerpvraag
        </p>

        <blockquote className="text-center text-2xl md:text-3xl font-serif leading-snug max-w-3xl mx-auto">
          “Hoe kunnen we kinderen van 9–13 jaar in Rotterdam helpen om veilig
          online keuzes te maken, zoals wat ze delen, met wie ze praten en hoe
          ze reageren op verdachte situaties, met ondersteuning van volwassenen?”
        </blockquote>
      </div>

      <div className="max-w-5xl mx-auto mt-24 md:mt-32">
        <h3 className="text-4xl md:text-5xl font-serif italic text-center mb-10">
          Aannames
        </h3>

        <div className="flex justify-center mb-8">
          <img
            src={boardImage}
            alt="Case Crackers bordspel ontwerp"
            className="w-full max-w-[760px] rounded-sm shadow-sm"
          />
        </div>

        <p className="text-center text-sm md:text-base max-w-3xl mx-auto mb-20 font-light leading-relaxed">
          Voor de nieuwe huisstijl van het bordspel hebben we gekozen voor een
          speelse en opvallende vormgeving die aansluit bij de doelgroep van
          9–13 jaar. Door het gebruik van felle kleuren, grote iconen en een
          detective-achtige sfeer voelt het spel toegankelijk, spannend en
          interactief aan.
        </p>

        <p className="text-center text-sm md:text-base max-w-3xl mx-auto font-light leading-relaxed">
          Naast het fysieke bordspel hebben we ook een ondersteunende app
          ontwikkeld. De app helpt spelers tijdens het spel met onderdelen zoals
          teamselectie, cases starten en antwoorden indienen. Hierbij blijft het
          bordspel centraal staan en ondersteunt de app vooral de spelervaring,
          zonder de sociale interactie van het fysieke spel over te nemen.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto mt-24 md:mt-32 px-0 md:px-4">
        <div className="hidden md:block absolute left-1/2 top-0 bottom-8 w-px border-l-2 border-dashed border-[#292122]/35 -translate-x-1/2" />

        {timelineItems.map((item) => (
          <div key={item.title} className="relative mb-16 md:mb-20 last:mb-0">
            <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-white items-center justify-center">
              <img src={miniLogo} alt="" className="w-10 h-10" />
            </div>

            <div
              className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                item.imagePosition === "left"
                  ? "md:[&>*:first-child]:order-2"
                  : ""
              }`}
            >
              <div>
                <h3 className="text-3xl md:text-4xl font-serif italic mb-5">
                  {item.title}
                </h3>

                <div className="bg-[#292122] text-white rounded-lg shadow-md p-5 md:p-6">
                  <p className="text-sm md:text-[15px] leading-relaxed text-white/85">
                    {item.text}
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className={`w-full max-w-[340px] object-contain drop-shadow-sm ${
                    item.imageClassName ?? ""
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

        <div className="max-w-[720px] mx-auto mt-20 md:mt-28 mb-16 md:mb-20 text-center px-4">
        <h3 className="font-serif italic font-medium text-[#292122] text-3xl md:text-[42px] leading-tight mb-6">
            App development & testing
        </h3>

        <p className="font-normal text-black text-sm md:text-[17px] leading-[1.75]">
            De app bevindt zich momenteel in development. In sprint 5 willen we de
            digitale component verder testen binnen de praktijk om te onderzoeken hoe
            de app de spelervaring ondersteunt en hoe kinderen en volwassenen de
            combinatie van het fysieke bordspel en de digitale elementen ervaren.
        </p>
        </div>
    </section>
  );
};

export default SprintFourSection;