import { useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Owen Miller",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Mike William",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Besim Dauti",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Faton Avdiu",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sarah Connor",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "John Doe",
    role: "Manager",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
  },
];

const socialLinks = ["f", "t", "in", "g+"];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // Dynamically update items per view based on screen size for responsive sliding
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); // Tablet: 2 cards
      } else {
        setItemsPerView(4); // Desktop: 4 cards
      }
    };
    
    handleResize(); // Trigger once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - itemsPerView);

  // Safety check: if screen resizes and current index is now out of bounds, reset it
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section id="team" className="py-16 md:py-20 text-center relative overflow-hidden">
      
      {/* Blurred Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1920" 
          alt="City Background" 
          className="w-full h-full object-cover blur-sm scale-105"
        />
        {/* Dark overlay to make the text readable */}
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Side Arrows (Absolutely positioned to the edges of the section) */}
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 md:w-14 h-16 md:h-24 flex items-center justify-center font-bold text-xl transition-all duration-300 ${
          currentIndex === 0
            ? "bg-[#111]/50 text-gray-500 cursor-not-allowed hidden md:flex"
            : "bg-[#111] text-white hover:bg-teal-500 cursor-pointer hidden md:flex"
        }`}
        aria-label="Previous"
      >
        &#10094;
      </button>
      
      <button
        onClick={handleNext}
        disabled={currentIndex >= maxIndex}
        className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 md:w-14 h-16 md:h-24 flex items-center justify-center font-bold text-xl transition-all duration-300 ${
          currentIndex >= maxIndex
            ? "bg-[#111]/50 text-gray-500 cursor-not-allowed hidden md:flex"
            : "bg-[#111] text-white hover:bg-teal-500 cursor-pointer hidden md:flex"
        }`}
        aria-label="Next"
      >
        &#10095;
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-12 md:px-20 relative z-10">

        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-4 tracking-widest uppercase drop-shadow-md">
          Meet The Team
        </h2>
        <p className="text-gray-400 font-mono text-sm mb-12 max-w-2xl mx-auto tracking-widest drop-shadow-md">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* Smooth Slider Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out -mx-3"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={`${member.name}-${index}`}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
              >
                <div className="flex flex-col text-left hover:-translate-y-2 transition-transform duration-300 shadow-lg overflow-hidden bg-slate-900 h-full">
                  
                  {/* Headshot */}
                  <div className="w-full aspect-square overflow-hidden bg-slate-600">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Name / Role */}
                  <div className="bg-slate-900 px-5 py-5">
                    <h3 className="font-serif font-bold text-white text-lg mb-1 truncate">
                      {member.name}
                    </h3>
                    <p className="font-mono text-slate-500 text-[10px] tracking-widest uppercase">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="bg-teal-500 px-5 py-4 flex items-center gap-2 mt-auto">
                    {socialLinks.map((icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="w-8 h-8 rounded-full border border-white/70 flex items-center justify-center text-white hover:bg-white hover:text-teal-500 transition-colors duration-200"
                        aria-label={`Social link ${i + 1}`}
                      >
                        <span className="font-serif font-bold text-[11px] leading-none">{icon}</span>
                      </a>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile controls (Only visible on small screens where side arrows are hidden) */}
        <div className="flex justify-center gap-4 mt-8 md:hidden">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`w-10 h-10 flex items-center justify-center font-bold text-sm transition-colors duration-200 ${
              currentIndex === 0
                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-teal-500 text-white hover:bg-teal-400 cursor-pointer"
            }`}
          >
            &#10094;
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className={`w-10 h-10 flex items-center justify-center font-bold text-sm transition-colors duration-200 ${
              currentIndex >= maxIndex
                ? "bg-slate-700 text-slate-500 cursor-not-allowed"
                : "bg-teal-500 text-white hover:bg-teal-400 cursor-pointer"
            }`}
          >
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
};

export default Team;