import { useState, useEffect } from "react";
// 🎯 Hamari central API service
import { fetchSections } from "../services/api";

// STATIC FALLBACK (Agar database khali ho toh slider khali nahi dikhega)
const fallbackTeam = [
  {
    name: "Owen Miller",
    role: "Developer",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
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
  }
];

const socialLinks = ["f", "t", "in", "g+"];

// Helper: Database card ko Team Member object mein convert karne ke liye
const formatTeamMember = (item) => {
  return {
    id: item._id,
    name: item.title || "Team Member",
    role: item.description || "Specialist",
    img: item.imageUrl
  };
};

const Team = () => {
  const [members, setMembers] = useState(fallbackTeam);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(4);

  // 1. Fetch Dynamic Team Data
  useEffect(() => {
    const loadTeam = async () => {
      try {
        const data = await fetchSections('team');
        if (data && data.length > 0) {
          const formatted = data.map(formatTeamMember);
          setMembers(formatted);
        }
      } catch (err) {
        console.error("Team live fetch failed, using fallback:", err);
      }
    };
    loadTeam();
  }, []);

  // Dynamically update items per view based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1); 
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2); 
      } else {
        setItemsPerView(4); 
      }
    };
    
    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Math updated to depend on dynamic `members.length`
  const maxIndex = Math.max(0, members.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = () => setCurrentIndex((prev) => Math.max(0, prev - 1));
  const handleNext = () => setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));

  return (
    <section id="team" className="py-16 md:py-20 text-center relative overflow-hidden font-sans select-none">
      
      {/* Blurred Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1920" 
          alt="City Background" 
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Side Arrows */}
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
            {members.map((member, index) => (
              <div
                key={member.id || index}
                className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
              >
                <div className="flex flex-col text-left hover:-translate-y-2 transition-transform duration-300 shadow-lg overflow-hidden bg-slate-900 h-full rounded">
                  
                  {/* Headshot */}
                  <div className="w-full aspect-square overflow-hidden bg-slate-800">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Name / Role */}
                  <div className="bg-slate-900 px-5 py-5">
                    <h3 className="font-serif font-bold text-white text-lg mb-1 truncate uppercase">
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

        {/* Mobile controls */}
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