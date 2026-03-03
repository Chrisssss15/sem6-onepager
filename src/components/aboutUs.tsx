import alyssaImg from "../assets/alyssa.png";
import bartImg from "../assets/bart.png";
import chrisImg from "../assets/chris.png";
import fouziaImg from "../assets/fouzia.png";
import jamieImg from "../assets/jamie.png";
import shayenImg from "../assets/shayen.png";

const teamMembers = [
  { name: "Shayen Manbodh", image: shayenImg },
  { name: "Alyssa Muyden", image: alyssaImg },
  { name: "Chris Tang", image: chrisImg },
  { name: "Bart Meeuwenoord", image: bartImg },
  { name: "Jamie Verloop", image: jamieImg },
  { name: "Fouzia Tahiri", image: fouziaImg },
];

const BlobFrame = ({ children }: { children: React.ReactNode }) => (
  <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
    {/* Decorative blob background */}
    <svg
      viewBox="0 0 200 200"
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M100,10 C120,10 140,15 155,30 C170,45 180,55 185,75 C190,95 190,110 185,130 C180,150 170,160 155,170 C140,180 125,190 100,190 C75,190 60,180 45,170 C30,160 20,150 15,130 C10,110 10,95 15,75 C20,55 30,45 45,30 C60,15 80,10 100,10Z"
        fill="hsl(var(--muted))"
      />
    </svg>

    {/* Circular photo container */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className=" overflow-hidden flex items-center justify-center">
        {children}
      </div>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-5xl md:text-6xl font-serif italic text-center text-foreground mb-16">
          Over ons
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-8 max-w-5xl mx-auto">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center gap-4">
              <BlobFrame>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </BlobFrame>

              <p className="text-foreground text-lg md:text-xl font-light tracking-wide">
                {member.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;