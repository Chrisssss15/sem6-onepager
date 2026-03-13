import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SprintItem {
  title: string;
  content: string;
}

// DIT IS DE INHOUD: Een lijstje met alle onderwerpen en teksten
const sprintItems: SprintItem[] = [
  {
    title: "De huidige context",
    content:
      "Jongeren in Nederland zijn dagelijks intensief online actief via sociale media, messaging-apps en platforms. Het internet is een vast onderdeel van hun sociale leven, identiteitsontwikkeling en informatie-voorziening. Vrijwel iedereen tussen de 12 en 25 jaar gebruikt dagelijks sociale media. \n\n Tegelijkertijd brengt deze digitale aanwezigheid risico’s met zich mee. Jongeren krijgen te maken met online intimidatie, sociale druk, schadelijke content en zorgen rondom privacy. Een deel voelt zich online niet altijd veilig of ervaart weinig controle over wat zij zien en delen. Zo ontstaat een spanningsveld: jongeren halen veel waarde uit hun online wereld, maar lopen ook tegen welzijns- en veiligheidsrisico’s aan en ervaren niet altijd regie over hun digitale omgeving.",
  },
  {
    title: "De gewenste situatie",
    content:
      "In de gewenste situatie zijn jongeren tussen de 11 en 17 jaar zich bewuster van hun online gedrag en de invloed van digitale platforms op hun dagelijks leven. Ze scrollen niet langer automatisch, maar hebben meer inzicht in hun gewoonten, keuzes en grenzen. Ze herkennen wanneer online activiteiten waardevol zijn en wanneer deze ten koste gaan van hun rust, concentratie of offline ervaringen. Het doel is niet om online gebruik te verminderen, maar om jongeren te helpen zelf bewuste keuzes te maken. Hierdoor ervaren zij meer regie over hun digitale omgeving en ontstaat een gezondere balans tussen online en offline leven.",
  },
  {
    title: "Onze primaire doelgroep",
    content:
      "De primaire doelgroep van dit project bestaat uit jongeren tussen de 11 en 17 jaar. Dit is een fase waarin zij volop bezig zijn met identiteitsontwikkeling, sociale relaties en het ontdekken van hun plek in de wereld. Digitale platforms spelen hierin een grote rol: ze gebruiken sociale media om contact te onderhouden, zichzelf te uiten en informatie te vinden. Tegelijkertijd zijn ze gevoelig voor sociale druk en beïnvloeding vanuit hun online omgeving. Juist in deze levensfase is het belangrijk dat zij leren bewust om te gaan met hun online gedrag en grip krijgen op hun digitale leefwereld.",
  },
  {
    title: "De ontwerpuitdaging & ontwerpvraag",
    content:
      "Onze ontwerpvraag luidt:\n\n“Hoe kunnen we jongeren helpen bewuster om te gaan met hun online gedrag, zodat zij een gezondere balans ervaren tussen online en offline activiteiten?”\n\nMet deze vraag richten we ons niet op het verminderen van schermtijd, maar op het vergroten van bewustzijn en regie. We onderzoeken hoe we jongeren kunnen ondersteunen in het herkennen van hun eigen gedrag, het maken van bewuste keuzes en het ontwikkelen van een digitale leefstijl die past bij hun welzijn en dagelijks leven.",
  },
];

// Dit onthoudt welk vakje 'open' staat. Standaard staat het eerste vakje (0) open.
const SprintZeroSection = () => {
  // Verander de initial state van null naar 0
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  // DE KLIK-FUNCTIE:
  // Als je op een vakje klikt dat al open is, gaat het dicht (null).
  // Als je op een ander vakje klikt, gaat dat vakje open.
  const toggleItem = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="sprint-0"
      className="min-h-screen bg-[#292122] flex items-center py-20"
    >
      <div className="container mx-auto px-6 lg:px-16 max-w-2xl">
        {/* TITEL VAN DE PAGINA */}
        <h2 className="text-5xl md:text-6xl font-serif italic text-center text-white mb-12">
          Sprint 0
        </h2>

        {/* HET UITKLAPMENU (De lijst met items) */}
        <div className="flex flex-col gap-4">
          {sprintItems.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="bg-[#FFFDEB] rounded-xl overflow-hidden relative"
              >
                {/* DE KNOP (Titel van het vakje) */}
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-black text-left text-base font-medium transition-colors hover:opacity-90 relative"
                  aria-expanded={isOpen}
                >
                  {item.title}
                  {/* Het pijltje draait 180 graden om als het vakje open gaat */}
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                  {isOpen && (
                    <span className="absolute bottom-0 left-6 right-6 h-[1px] bg-black/20" />
                  )}
                </button>

                {/* DE UITKLAP-ANIMATIE */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }} // STARTPUNT: ONTZICHTBAAR EN PLAT
                      animate={{ height: "auto", opacity: 1 }} // Doel: juiste hoogte en zichtbaar
                      exit={{ height: 0, opacity: 0 }} // BIJ DICHT GAAN WEER PLAT WORDEN
                      transition={{ duration: 0.3, ease: "easeInOut" }} // HOE SNEL HET BEWEEGT
                    >
                      {/* DE TEKST IN HET VAKJE */}
                      <div className="px-6 pt-6 pb-8 text-black/80 text-sm leading-relaxed whitespace-pre-line">
                        {item.content}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SprintZeroSection;
