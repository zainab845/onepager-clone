
const teamMembers = [
  { name: "Owen Miller", role: "developer" },
  { name: "Mike William", role: "developer" },
  { name: "Besim Dauti", role: "developer" },
  { name: "Faton Avdiu", role: "developer" },
];

const Team = () => {
  return (
    <section id="team" className="py-20 bg-slate-800 text-center relative">
      

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-4 tracking-wider">
          MEET THE TEAM
        </h2>
        <p className="text-gray-300 font-mono text-sm md:text-base mb-16 max-w-2xl mx-auto">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col text-left transition-transform hover:-translate-y-2 duration-300 shadow-lg">
                {/* Team Member Headshot Placeholder */}
              <div className="aspect-square bg-slate-200 flex items-center justify-center">
                <span className="text-slate-500 font-mono text-sm">
                  Headshot {index + 1}
                </span>
              </div>

              {/* Member Info Box */}
              <div className="bg-slate-900 p-6">
                <h3 className="font-serif font-bold text-white text-xl mb-1">
                  {member.name}
                </h3>
                <p className="font-mono text-slate-500 text-xs tracking-widest">
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