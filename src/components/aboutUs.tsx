import { useState } from "react";
import { X } from "lucide-react";

// 1. Corrigeer de import namen (geen streepjes!)
import alyssaImg from "../assets/alyssa.png";
import bartImg from "../assets/bart.png";
import chrisImg from "../assets/chris.png";
import fouziaImg from "../assets/fouzia.png";
import jamieImg from "../assets/jamie.png";
import shayenImg from "../assets/shayen.png";
import alyssaImgPopup from "../assets/alyssa-popup.png";
import bartImgPopup from "../assets/bart-popup.png";
import chrisImgPopup from "../assets/chris-popup.png";
import fouziaImgPopup from "../assets/fouzia-popup.png";
import jamieImgPopup from "../assets/jamie-popup.png";
import shayenImgPopup from "../assets/shayen-popup.png";

const teamMembers = [
  {
    name: "Shayen Manbodh",
    image: shayenImg,          // Voeg de afbeelding toe aan het object
    popupImage: shayenImgPopup, // Voeg de popup afbeelding toe
    bio: "Hoi, ik ben Shayen en ik studeer ADS&AI. Binnen het team houd ik me vooral bezig met data in alle vormen en mate. Buiten school om sport ik veel en hou ik ervan om mijn favoriete team FC Barcelona te supporten.",
    linkedin: "https://www.linkedin.com/in/shayen-manbodh-364733291/",
  },
  {
    name: "Alyssa Muyden",
    image: alyssaImg,
    popupImage: alyssaImgPopup,
    bio: "Hey! Ik ben Alyssa, student CMD. Ik duik graag in de wereld van de gebruiker en geloof dat elk ontwerp menselijk en betekenisvol moet zijn. Daarom ben ik altijd nieuwsgierig naar het ‘waarom’ achter gedrag. Buiten mijn studie ben ik veel bezig met persoonlijke ontwikkeling, muziek en sporten.",
    linkedin: "https://www.linkedin.com/in/alyssa-muyden?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  },
  {
    name: "Chris Tang",
    image: chrisImg,
    popupImage: chrisImgPopup,
    bio: "Hoi, Ik ben Chris, student Creative Media and Game Technology. Binnen mijn team ben ik verantwoordelijk voor het ontwikkelen en coderen van de applicatie, waarbij ik ontwerp vertaal naar werkende digitale oplossingen. In mijn vrije tijd sport ik graag, zoals badminton en fitness, en verdiep ik me in de nieuwste modetrends.",
    linkedin: "https://www.linkedin.com/in/chris-tang-developer/",
  },
  {
    name: "Bart Meeuwenoord",
    image: bartImg,
    popupImage: bartImgPopup,
    bio: `Hi! Ik ben Bart, CMD-student (Communicatie & Multimedia Design) en binnen ons team werk ik als designer en onderzoeker. 
        Ik vind het leuk om ideeën te vertalen naar ontwerpen die niet alleen mooi zijn, maar ook goed werken voor de gebruiker.
        In mijn vrije tijd sport ik graag en ben ik vaak bezig met ontwerpen, omdat ik het leuk vind om creatief bezig te zijn en nieuwe ideeën uit te proberen.`,
    linkedin: "#",
  },
  {
    name: "Jamie Verloop",
    image: jamieImg,
    popupImage: jamieImgPopup,
    bio: "Hoi, ik ben Jamie. Ik studeer ADS&AI en werk met de data binnen dit team. Ik zorg ervoor dat de kwaliteit van data op orde is en de inzichten duidelijk zijn. In mijn vrije tijd ben ik vooral bezig met boulderen, klimmen en motorrijden. ",
    linkedin: "https://nl.linkedin.com/in/jamie-verloop-965636305",
  },
  {
    name: "Fouzia Tahiri",
    image: fouziaImg,
    popupImage: fouziaImgPopup,
    bio: "Hi! Ik ben Fouzia, CMD-student en de UX designer binnen ons team. Ik vertaal inzichten uit onderzoek naar doordachte en gebruiksvriendelijke oplossingen die écht aansluiten bij de gebruiker. In mijn vrije tijd maak ik graag handgemaakte kaarten, die creativiteit en dat oog voor detail neem ik in elk ontwerp met me mee.",
    linkedin: "https://www.linkedin.com/in/fouzia-t-122188231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
];

const BlobFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-44 h-44 md:w-52 md:h-52 flex items-center justify-center">
        {children}
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-serif italic text-center text-foreground mb-16">
          Over ons
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="flex flex-col items-center gap-4 cursor-pointer group"
              onClick={() => setSelectedMember(index)}
            >
              <BlobFrame>
                {/* Gebruik hier member.image i.p.v. teamPhoto */}
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
                />
              </BlobFrame>
              <p className="text-foreground text-lg md:text-xl font-light tracking-wide">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMember !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden grid grid-cols-1 md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 z-10 text-foreground/70 hover:text-foreground transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Gebruik hier de popupImage van het geselecteerde lid */}
            <div className="bg-muted h-full">
              <img
                src={teamMembers[selectedMember].popupImage}
                alt={teamMembers[selectedMember].name}
                className="w-full h-full object-cover min-h-[300px]"
              />
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl md:text-4xl font-serif italic text-foreground mb-6">
                  {teamMembers[selectedMember].name}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {teamMembers[selectedMember].bio}
                </p>
              </div>

              <div className="flex justify-end mt-6">
                <a
                  href={teamMembers[selectedMember].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-foreground rounded-md p-2 hover:bg-foreground hover:text-background transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;