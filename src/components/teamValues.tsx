// DE LIJST MET WAARDES: Hier staan alle teksten en icoontjes handig bij elkaar
const values = [
  {
    emoji: "🎯",
    title: "Verantwoordelijkheid",
    description: "Wij pakken eigenaarschap over ons werk en leerproces.",
  },
  {
    emoji: "🤝",
    title: "Behulpzaamheid",
    description:
      "Wij ondersteunen elkaar en delen kennis om samen sterker te worden.",
  },
  {
    emoji: "💬",
    title: "Eerlijkheid",
    description: "Wij communiceren transparant en geven oprechte feedback.",
  },
  {
    emoji: "🎉",
    title: "Plezier",
    description: "Wij geloven dat creativiteit groeit in een positieve sfeer.",
  },
  {
    emoji: "🔑",
    title: "Vertrouwen",
    description:
      "Wij bouwen een samenwerking waarin we op elkaar kunnen rekenen.",
  },
];

const TeamValuesSection = () => {
  return (
    <section className="py-20 bg-[#FFFDEB]">
      <div className="container mx-auto px-6 lg:px-16">
        {/* DE TITEL */}
        <h2 className="text-5xl md:text-6xl font-serif italic text-center text-foreground mb-14">
          Teamwaardes
        </h2>

        {/* HET LIJSTJE - ALLE WAARDES WORDEN GETOOND */}
        <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
          {values.map((value) => (
            // DE KAART: Elk wit blokje met een schaduw
            <div
              key={value.title}
              className="w-full bg-card bg-[#FFFFFF] rounded-2xl px-8 py-6 shadow-sm flex items-start gap-5"
            >
              {/* HET ICOONTJE (Emoji) */}
              <span className="text-3xl mt-1 shrink-0">{value.emoji}</span>

              {/* DE TEKST: Titel en de uitleg eronder */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamValuesSection;
