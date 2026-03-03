import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } 
from "@/components/ui/accordion";

const sprintItems = [
  {
    title: "De huidige context",
    content:
      "Jongeren in Nederland zijn dagelijks intensief online actief via sociale media, messaging-apps en platforms. Het internet is een vast onderdeel van hun sociale leven, identiteitsontwikkeling en informatie-voorziening. Vrijwel iedereen tussen de 12 en 25 jaar gebruikt dagelijks sociale media. <br> Tegelijkertijd brengt deze digitale aanwezigheid risico’s met zich mee. Jongeren krijgen te maken met online intimidatie, sociale druk, schadelijke content en zorgen rondom privacy. Een deel voelt zich online niet altijd veilig of ervaart weinig controle over wat zij zien en delen. Zo ontstaat een spanningsveld: jongeren halen veel waarde uit hun online wereld, maar lopen ook tegen welzijns- en veiligheidsrisico’s aan en ervaren niet altijd regie over hun digitale omgeving.",
  },
  {
    title: "De gewenste situatie",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Onze primaire doelgroep",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "De ontwerpuitdaging & ontwerpvraag",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  },
];

const SprintZeroSection = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-6 lg:px-16 max-w-2xl">
        <h2 className="text-5xl md:text-6xl font-serif italic text-center text-background mb-14">
          Sprint 0
        </h2>

        <Accordion type="single" collapsible className="flex flex-col gap-4">
          {sprintItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-none bg-card rounded-xl px-6 overflow-hidden"
            >
              <AccordionTrigger className="text-foreground text-base font-medium hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default SprintZeroSection;
