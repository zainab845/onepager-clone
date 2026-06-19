import { useState } from "react";

// 6 members for slider functionality
const teamMembers = [
  { name: "Owen Miller", role: "developer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { name: "Mike William", role: "developer", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { name: "Besim Dauti", role: "developer", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { name: "Faton Avdiu", role: "developer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
  { name: "Sarah Connor", role: "designer", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
  { name: "John Doe", role: "manager", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
];

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // handlers for the slider
  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(teamMembers.length - 4, prev + 1));
  };

  //exactly 4 members at a time
  const visibleMembers = teamMembers.slice(currentIndex, currentIndex + 4);

  return (
    <section id="team" className="py-20 bg-slate-800 text-center relative">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4 tracking-wider">
          MEET THE TEAM
        </h2>
        <p className="text-gray-300 font-mono text-sm md:text-base mb-8 max-w-2xl mx-auto">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* Slider Controls */}
        {}
        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={handlePrev} 
            disabled={currentIndex === 0}
            className={`w-10 h-10 rounded transition flex items-center justify-center ${currentIndex === 0 ? "bg-slate-700 text-slate-500 cursor-not-allowed" : "bg-teal-500 text-white hover:bg-teal-400 cursor-pointer"}`}
          >
            &#10094;
          </button>
          <button 
            onClick={handleNext} 
            disabled={currentIndex >= teamMembers.length - 4}
            className={`w-10 h-10 rounded transition flex items-center justify-center ${currentIndex >= teamMembers.length - 4 ? "bg-slate-700 text-slate-500 cursor-not-allowed" : "bg-teal-500 text-white hover:bg-teal-400 cursor-pointer"}`}
          >
            &#10095;
          </button>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleMembers.map((member, index) => (
            <div key={index} className="flex flex-col text-left transition-transform hover:-translate-y-2 duration-300 shadow-lg bg-white overflow-hidden">
                {/* Team Member Headshot Image */}
              <div className="aspect-square bg-slate-200 flex items-center justify-center overflow-hidden">
                <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
              </div>

              {/* Member Info Box */}
              <div className="bg-slate-900 p-6">
                <h3 className="font-serif font-bold text-white text-xl mb-1 truncate">
                  {member.name}
                </h3>
                <p className="font-mono text-slate-500 text-xs tracking-widest uppercase">
                  {member.role}
                </p>
              </div>

              {/* Social Icons Box */}
              <div className="bg-teal-500 p-6 flex gap-3">
                {[1, 2, 3, 4].map((icon) => (
                  <a 
                    key={icon} 
                    href="#" 
                    className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-teal-500 transition-colors"
                  >
                    <span className="text-xs font-serif font-bold">f</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;