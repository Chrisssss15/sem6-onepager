import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import miniLogo from "../assets/mini-logo.svg";
import img1 from "../assets/deHuidigeSituatie-sprint1.svg";
import img2 from "../assets/doelgroep-sprint1.svg";
import img3 from "../assets/deGewensteSituatie-sprint1.svg";

const timelineItems = [
  {
    title: "De huidige situatie",
    text: "Jonge kinderen groeien op in een digitale omgeving waarin smartphones, social media en games een grote rol spelen in hun dagelijks leven. Door functies zoals algoritmes, autoplay en eindeloze feeds blijven zij vaak langer online dan zij van plan waren. Tegelijkertijd zijn kinderen zich nog weinig bewust van hoe digitale platformen hun gedrag beïnvloeden en hoe hun schermgebruik impact heeft op hun welzijn. Hierdoor kan het lastig zijn om grip te krijgen op een gezonde balans tussen online en offline leven.",
    imagePosition: "right" as const,
    image: img1,
  },
  {
    title: "Doelgroep",
    text: "Voor dit ontwerp richten we ons op Rotterdamse kinderen van 9–13 jaar. In deze leeftijdsfase krijgen veel kinderen hun eerste smartphone en beginnen zij intensiever gebruik te maken van de digitale wereld. Tegelijkertijd zijn zij nog volop bezig met het ontwikkelen van zelfregulatie en het begrijpen van de invloed van digitale media op hun gedrag. Hierdoor hebben zij ondersteuning nodig om bewuster om te gaan met hun schermgebruik en een gezonde digitale balans te ontwikkelen.",
    imagePosition: "left" as const,
    image: img2,
  },
  {
    title: "De gewenste situatie",
    text: "Jonge kinderen hebben meer inzicht in hun online gedrag en begrijpen beter hoe digitale media hun aandacht en tijd beïnvloeden. Zij ontwikkelen vaardigheden om bewuste keuzes te maken rondom schermgebruik en leren momenten te herkennen waarop zij online of juist offline willen zijn. Hierdoor ervaren zij meer grip op hun schermtijd en ontstaat er een gezondere balans tussen online activiteiten en offline bezigheden zoals spelen, sporten, sociale interactie en school, wat bijdraagt aan hun welzijn.",
    imagePosition: "right" as const,
    image: img3,
  },
];

const categories = [
  "Schermtijd",
  "Welzijn",
  "Social media",
  "Privacy & veiligheid",
  "Offline gedrag",
  "Online gedrag",
  "Bescherming",
  "Externe factoren",
];

const statementCards = [
  {
    category: "Schermtijd",
    title:
      "Schermgebruik neemt een groot deel van het dagelijks leven van jongeren in",
    toelichting:
      "Jongeren besteden een aanzienlijk deel van hun dag aan digitale media. Gemiddeld zitten jongeren 4,8 uur per dag op hun smartphone, wat bij 15–21-jarigen oploopt tot 5,5 uur. Daarnaast besteden zij nog ongeveer 3 uur per dag aan online video en televisietijd, zoals YouTube of streamingdiensten. Hierdoor neemt schermgebruik een groot deel van hun vrije tijd in; bij 18-jarigen wordt zelfs geschat dat ongeveer 93% van hun vrije tijd aan schermen wordt besteed, wat laat zien hoe dominant digitale technologie is in het dagelijks leven van jongeren.",
    bronnen: [
      "Mediahuis Nederland & Wayne Parker Kent, 2023;",
      "Marketingfacts, 2023;",
      "Smart & Social – Hogeschool Rotterdam, 2024",
    ],
  },
  {
    category: "Schermtijd",
    title:
      "Platformontwerp en dagelijkse routines stimuleren langdurig schermgebruik",
    toelichting:
      "Digitale platformen zijn ontworpen met functies zoals eindeloze feeds, gepersonaliseerde aanbevelingen en algoritmes, waardoor \"even kijken\" voor jongeren vaak uitloopt op langdurig gebruik. Tegelijkertijd hebben jongeren duidelijke dagelijkse piekmomenten in hun online gebruik: 's ochtends, direct na school (15:00–18:00) en 's avonds laat in bed. Op deze momenten grijpen jongeren automatisch naar hun telefoon om video's te kijken, te gamen of te chatten. Deze vaste gebruikspatronen maken het moeilijk om schermgebruik te onderbreken, maar bieden ook kansrijke momenten voor interventies die bewustwording en digitale balans bevorderen.",
    bronnen: [
      "Mediahuis Nederland & Wayne Parker Kent, 2023;",
      "Smart & Social – Hogeschool Rotterdam, 2024",
    ],
  },
  // Welzijn
  {
    category: "Welzijn",
    title:
      "Digitale media bieden jongeren verbinding en kansen, maar kunnen hun welzijn onder druk zetten wanneer balans ontbreekt",
    toelichting:
      "Jongeren ervaren de digitale wereld als zowel positief als problematisch: het biedt plezier, sociale verbinding en toegang tot informatie, maar brengt ook risico's zoals cyberpesten, ongewenst contact, groepsdruk en verslaving. Intensief gebruik kan leiden tot stress, vermoeidheid, slaapproblemen, concentratieproblemen en een negatief zelfbeeld; ongeveer 40% van de jongeren ervaart een negatieve invloed van social media op hun zelfbeeld. Veel jongeren voelen bovendien druk om altijd bereikbaar te zijn, terwijl mentale gezondheid, privacy en veiligheid lager scoren dan andere aspecten van het digitale leven. Een gebrek aan balans tussen online en offline routines zoals school, gezin, vrije tijd en slaap kan jongeren kwetsbaarder maken voor problematisch smartphone- en mediagedrag.",
    bronnen: [
      "Goodybag RBTL – Digital Wellbeing for Teens; Netwerk Mediawijsheid, 2025;",
      "Marketingfacts, 2023; Mediahuis Nederland & Wayne Parker Kent, 2023; UNICEF Nederland, 2025)",
    ],
  },
  {
    category: "Welzijn",
    title:
      "Bewustwording, kritisch denken en zelfregulatie helpen jongeren een gezondere relatie met digitale media ontwikkelen",
    toelichting:
      "Jongeren willen vaak minder tijd online doorbrengen, maar ervaren dit als moeilijk vanwege verslavende ontwerpmechanismen van platforms en druk vanuit hun sociale omgeving. Ze overschatten hun vermogen om online problemen zelfstandig op te lossen, terwijl slechts een klein deel daadwerkelijk bewust reflecteert op hun gebruik. Effectieve strategieën richten zich daarom op inzicht in eigen patronen en triggers, in plaats van enkel minder online zijn. Educatie, kritisch denken en zelfregulatie helpen jongeren begrijpen hoe technologie werkt, welke invloed algoritmes, autoplay en infinite scroll hebben op hun gedrag, en hoe ze bewuste keuzes kunnen maken. Bewust offline gaan en een gezonde digitale balans zijn cruciale manieren om welzijn te verbeteren en negatieve effecten te verminderen.",
    bronnen: [
      "Netwerk Mediawijsheid, 2025",
      "UNICEF Nederland, 2024",
      "Digital Child Rights, 2024",
      "Goodybag RBTL – Digital Wellbeing for Teens: Designing Educational Systems",
    ],
  },
  // Social media
  {
    category: "Social media",
    title:
      "Sociale media bieden jongeren zowel verbinding als stress en beïnvloeden hun welzijn op verschillende manieren",
    toelichting:
      "Sociale media spelen een grote rol in het dagelijks leven van jongeren (88% van de 10–18-jarigen gebruikt het dagelijks), maar de impact op hun welzijn is ambivalent. Jongeren ervaren sociale media als leuk en verbindend (contact met vrienden, afleiding, zelfexpressie en het ontwikkelen van interesses), maar ook als vermoeiend en stressvol door sociale vergelijking en druk rondom uiterlijk of prestaties. De effecten verschillen bovendien per gebruik en per groep: actief gebruik (zoals chatten of reageren) wordt vaker positief ervaren en kan vriendschappen en zelfvertrouwen versterken, terwijl passief gebruik (zoals eindeloos scrollen) vaker samenhangt met negatieve gevoelens. Meisjes rapporteren daarnaast vaker een negatieve invloed op hun welzijn dan jongens, terwijl jongens vaker druk ervaren rondom presteren, gamen of intensief mediagebruik.",
    bronnen: [
      "Youngwork, 2024",
      "Trimbos Instituut, 2023",
      "UNICEF Nederland, 2024, 2025",
      "Nederlands Jeugdinstituut, 2023",
      "Smart & Social – Hogeschool Rotterdam, 2024",
    ],
  },
  {
    category: "Social media",
    title:
      "Het ontwerp van sociale mediaplatforms stimuleert langdurig gebruik en beïnvloedt hoe jongeren content ervaren",
    toelichting:
      "Sociale mediaplatforms zijn ontworpen om jongeren zo lang mogelijk online te houden via algoritmes, likes, streaks, notificaties en eindeloze scrolles die inspelen op het beloningssysteem van het tienerbrein. Dit kan verslavingsachtig gebruik versterken. Tegelijkertijd bepaalt de manier waarop content wordt aangeboden sterk of jongeren zich aangesproken voelen: korte, snelle en authentieke content met humor en herkenbare situaties werkt beter dan belerende of geforceerde boodschappen.",
    bronnen: [
      "Nederlands Jeugdinstituut, 2023",
      "Netwerk Mediawijsheid, 2025",
      'Goodybag RBTL – Campagneplan "Unfollow the hype" (Groep 4)',
    ],
  },
  // Privacy & veiligheid
  {
    category: "Privacy & veiligheid",
    title:
      "Jongeren ervaren dat hun privacy en veiligheid online onvoldoende worden beschermd",
    toelichting:
      "Veel jongeren ervaren dat hun privacy en veiligheid online onvoldoende worden beschermd. In onderzoek geven jongeren privacy een score van 5,5 en online veiligheid een 5,7, terwijl 80% privacy en 79% online veiligheid als belangrijke digitale rechten beschouwt. Jongeren willen meer controle over hun persoonlijke gegevens en betere bescherming tegen online risico's zoals pesten, manipulatie en misbruik. Daarnaast vinden zij dat hun stem vaker moet worden meegenomen bij beleid en technologieontwikkeling, zodat digitale platforms beter aansluiten bij hun behoeften en veiligheid.",
    bronnen: ["Digital Child Rights, 2024"],
  },
  {
    category: "Privacy & veiligheid",
    title:
      "Gebrek aan digitale kennis en platformdesign vergroten online risico's voor jongeren",
    toelichting:
      "Jongeren met minder kennis over privacy-instellingen, dataveiligheid en nepnieuws lopen aantoonbaar meer risico op online schade. Tegelijkertijd versterken commerciële verdienmodellen van digitale platforms dit probleem: deze platforms zijn ontworpen om gebruikers zo lang mogelijk online te houden, waardoor belangen zoals privacy en bescherming van kinderen onder druk kunnen komen te staan.",
    bronnen: ["EU Kids Online, 2020", "UNICEF Nederland, 2024"],
  },
  // Offline gedrag
  {
    category: "Offline gedrag",
    title:
      "Schermtijd verdringt offline activiteiten en beïnvloedt de fysieke en sociale ontwikkeling van jongeren",
    toelichting:
      "De tijd die jongeren aan schermen besteden gaat vaak ten koste van fysieke activiteiten, buitenspelen en face-to-face sociale interactie. Dit heeft gevolgen voor hun fysieke gezondheid en sociale ontwikkeling. Jongeren die meer dan 4 uur per dag achter een scherm zitten, bewegen significant minder en hebben vaker last van slaapproblemen.",
    bronnen: ["Mulier Instituut, 2023", "RIVM, 2024"],
  },
  {
    category: "Offline gedrag",
    title:
      "Bewust offline tijd inplannen helpt jongeren een gezondere balans te vinden",
    toelichting:
      "Jongeren die bewust momenten kiezen om offline te zijn, ervaren meer rust en betere concentratie. Het stimuleren van offline activiteiten zoals sporten, creatieve hobby's en sociale contacten draagt bij aan een gezondere digitale balans en algeheel welzijn.",
    bronnen: ["NJi, 2024", "Trimbos-instituut, 2024"],
  },
  // Online gedrag
  {
    category: "Online gedrag",
    title:
      "Jongeren gebruiken hun smartphone continu om hun identiteit en sociale positie te verkennen",
    toelichting:
      "Jongeren zijn vrijwel continu online en gebruiken hun smartphone als vanzelfsprekend onderdeel van hun dagelijks leven. Via sociale media, gaming en video's verkennen ze hun identiteit, uiterlijk en sociale rollen en leren ze hoe ze zich presenteren en reageren binnen sociale groepen.",
    bronnen: [
      "EU Kids Online, 2020",
      "Mediahuis Nederland & Wayne Parker Kent, 2023",
      "UNICEF Nederland, 2025",
    ],
  },
  {
    category: "Online gedrag",
    title:
      "Jongeren proberen bewust een balans te vinden tussen online participatie en hun offline leven",
    toelichting:
      "Online participatie kan jongeren vaardigheden, empowerment en zelfreflectie laten ontwikkelen die ook offline gedrag beïnvloeden. Tegelijkertijd kan intensief schermgebruik ten koste gaan van offline activiteiten zoals huiswerk, familiecontact en sociale afspraken, waardoor jongeren bewust proberen balans te vinden tussen online en offline leven.",
    bronnen: [
      "Ruigrok, 2025",
      "Aydogan et al., 2024",
      "Kim, Russo & Amnå, z.j.",
    ],
  },
  // Bescherming
  {
    category: "Bescherming",
    title: "Jongeren voelen zich regelmatig onveilig in de online omgeving",
    toelichting:
      "Veel jongeren ervaren online onveiligheid door pesten, conflicten, misinformatie en misbruik, waardoor zij zich kwetsbaar voelen in de digitale omgeving. Bijna de helft van de jongeren voelt zich online onvoldoende beschermd. Jongeren geven lage beoordelingen voor hun online gezondheid (56%), privacy (48%) en veiligheid (42%). Daarnaast heeft 77% te maken gehad met nepnieuws en 39% met seksuele berichten of online misbruik. Online conflicten komen ook regelmatig voor: 38% van de jongeren kreeg te maken met valse beschuldigingen, 33% met discriminatie of buitensluiting en 32% met problemen nadat zij hun mening online deelden. Online pesten vindt vaak plaats via chats, comments en berichten, terwijl jongeren zich niet altijd realiseren dat één bericht iemand daadwerkelijk kan kwetsen.",
    bronnen: [
      "Digital Child Rights, 2024",
      "UNICEF Nederland, 2025",
      'Goodybag RBTL – Campagneplan "Think before you type" (Groep 2)',
    ],
  },
  {
    category: "Bescherming",
    title:
      "Ouderlijk toezicht kan jongeren helpen gezonder en veiliger met digitale media om te gaan",
    toelichting:
      "Betrokken ouderlijk toezicht kan de negatieve effecten van online gedrag en schermtijd op gezondheid en welzijn van jongeren beperken. Ouderlijk toezicht speelt een modererende rol in het digitale gedrag van jongeren. Actieve monitoring door ouders kan de gezondheidsrisico's van schermtijd verminderen, bijvoorbeeld door negatieve effecten op fysieke activiteit en fitness te beperken. In een online omgeving waar jongeren regelmatig te maken krijgen met sociale druk en risico's, kan ouderlijke begeleiding bijdragen aan gezonder en bewuster mediagebruik.",
    bronnen: ["Hao & Cui, 2025"],
  },
  // Externe factoren
  {
    category: "Externe factoren",
    title:
      "Constante online aanwezigheid en sociale normen beïnvloeden het gedrag en welzijn van jongeren",
    toelichting:
      "Door eigen smartphones en constante internettoegang zijn jongeren vrijwel permanent online. In deze omgeving bepalen sociale media, influencers en groepsdruk sterk wat als 'normaal' gedrag wordt gezien — van welke apps je gebruikt tot wat je post. Vooral jongeren van 15–18 jaar, die sterk gericht zijn op vriendschappen, zijn gevoelig voor deze sociale druk, wat hun keuzes en welzijn kan beïnvloeden.",
    bronnen: [
      "Netwerk Mediawijsheid, 2025",
      "Consumentenbond, 2025",
      "Goodybag RBTL – Online thema's",
      "EU Kids Online, 2020",
      "Marketingfacts, 2023",
      "UNICEF Nederland, 2025",
      'Goodybag RBTL – Campagneplan "Echte vrienden pushen niet"',
    ],
  },
  {
    category: "Externe factoren",
    title:
      "Mediawijsheid groeit wanneer jongeren, ouders en scholen samen werken aan kritisch en bewust mediagebruik",
    toelichting:
      "Jongeren hebben ondersteuning nodig om online content kritisch te beoordelen, risico's te herkennen en bewuste keuzes te maken. Ouders en scholen spelen hierin een sleutelrol, waarbij open gesprek en gezamenlijke afspraken effectiever zijn dan alleen controle of alleen vrijheid. Wanneer jongeren, ouders en scholen samenwerken, ontstaat de grootste kans op duurzame mediawijsheid.",
    bronnen: [
      "Goodybag RBTL – Online thema's",
      "Zyad, 2021",
      "LSE / EU Kids Online, z.d.",
      "UNICEF Nederland, 2024",
      "EU Kids Online, 2020",
      "UNICEF Nederland, 2025",
    ],
  },
];

const SprintOneSection = () => {
  const [activeCategory, setActiveCategory] = useState("Schermtijd");
  const scrollRef = useRef<HTMLDivElement>(null);

  const filteredCards = statementCards.filter(
    (card) => card.category === activeCategory,
  );

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = 600;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="sprint-1"
      className="py-20 bg-foreground text-primary-foreground"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-serif italic text-center mb-8">
          Sprint 1
        </h2>

        {/* Intro */}
        <p className="text-center text-primary-foreground/80 max-w-2xl mx-auto mb-20 leading-relaxed">
          In deze sprint hebben we onze doelgroep verder gespecificeerd. Tijdens
          het onderzoek groeide onze interesse om meer preventief te werken met
          jongeren. Op basis van verschillende onderzoeken hebben we een nieuwe
          formulering gemaakt van de huidige situatie, de gewenste situatie en
          ontwerpvraag. De belangrijkste inzichten uit dit onderzoek zijn
          samengevat in onze statement cards.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
<div className=" l-6 md:pl-0 absolute left-1/2 top-20 -bottom-20 w-px border-l-2 border-dashed border-primary-foreground/40 -translate-x-1/2" />
          {timelineItems.map((item, index) => (
            <div key={index} className="relative mb-24 last:mb-16">
              {/* Timeline icon */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-12 z-10 w-10 h-10 rounded-full bg-foreground flex items-center justify-center">
                <img src={miniLogo} alt="" className="w-7 h-7 " />
              </div>

              <div
                className={`flex flex-col md:flex-row items-center gap-8 pt-12 ${
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
                    <p className="text-sm leading-relaxed text-primary-foreground/80">
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
                <div className="flex-1">
                  <div className="rounded-lg overflow-hidden s aspect-[4/3]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
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

        {/* Ontwerpvraag */}
        <div className="mt-24 text-center">
          <p className="text-sm tracking-widest uppercase text-primary-foreground/60 mb-4">
            Ontwerpvraag
          </p>
          <blockquote className="text-2xl md:text-3xl font-serif italic leading-snug max-w-2xl mx-auto text-primary-foreground">
            "Hoe kunnen we Rotterdamse kinderen van 9–13 jaar helpen meer grip
            te krijgen op hun online gedrag, zodat zij bewuster omgaan met
            schermtijd en een gezondere balans ervaren tussen online en offline
            leven?"
          </blockquote>
        </div>
      </div>

      {/* Het onderzoek samengevat */}
      <div className="mt-32">
        <h3 className="text-4xl md:text-5xl font-serif italic text-center mb-10">
          Het onderzoek samengevat
        </h3>

        {/* Category filter chips */}
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-12 px-4 sm:px-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
        px-4 py-2 text-sm
        sm:px-6 sm:py-3 sm:text-basemd:px-8 md:py-4 md:text-base rounded-2xl border-2 font-medium whitespace-nowrap transition-all duration-200

        ${
          activeCategory === cat
            ? "bg-black text-white border-black"
            : "bg-white text-black border-black hover:bg-gray-100"
        }
      `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Statement cards carousel */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto px-[10vw] lg:px-[20vw] pb-4 snap-x snap-mandatory scrollbar-hide"
          >
            {filteredCards.map((card, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[90vw] sm:w-[80vw] lg:w-[70vw] max-w-[958px] bg-[#8B6F66] rounded-[28px] overflow-hidden flex flex-col"
              >
                {/* 🔝 BOVEN HELFT (Titel) */}
                <div className="px-6 sm:px-8 lg:px-10 py-6 sm:py-8">
                  <h4
                    className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white leading-tight max-w-[958px] py-12 px-8"
                  >
                    {card.title}
                  </h4>
                </div>

                {/* 🔽 ONDER HELFT (Content) */}
                <div
                  className="bg-[#EDEAE8]

flex-1   ← 🔥 laat content groeien

    px-10 sm:px-12 lg:px-18 py-6 sm:py-8 flex flex-col lg:flex-row gap-6
  "
                >
                  {/* Toelichting */}
                  <div className="flex-1 overflow-y-auto pr-2">
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                      Toelichting:
                    </p>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-700">
                      {card.toelichting}
                    </p>
                  </div>

                  {/* Bronnen */}
                  <div className="lg:w-[220px] shrink-0 overflow-y-auto pr-2">
                    <p className="text-xs sm:text-sm font-semibold text-gray-800 mb-2">
                      Bronnen:
                    </p>
                    <ul className="list-disc list-inside text-xs sm:text-sm text-gray-700 space-y-1">
                      {card.bronnen.map((bron, i) => (
                        <li key={i}>{bron}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-end gap-4 px-6 lg:px-16 mt-4">
            <button
              onClick={() => scroll("left")}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Vorige"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              aria-label="Volgende"
            >
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SprintOneSection;
