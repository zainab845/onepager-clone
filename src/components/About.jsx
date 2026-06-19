import { useState } from "react";

const About = () => {
  // Split into multiple "pages" of clients to allow the dots to function
  const clientPages = [
    [
      { name: "Google", img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=200" },
      { name: "hp", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=200" },
      { name: "WORDPRESS", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=200" },
      { name: "Canon", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=200" }
    ],
    [
      { name: "Google", img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=200" },
      { name: "Amazon", img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=200" },
      { name: "Netflix", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=200" },
      { name: "Tesla", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200" }
    ],
    [
      { name: "Microsoft", img: "https://images.unsplash.com/photo-1644361566696-3d442b5b482a?auto=format&fit=crop&q=80&w=200" },
      { name: "Apple", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=200" },
      { name: "Netflix", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=200" },
      { name: "Tesla", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=200" }
    ]
  ];

  const statsData = [
    { number: "956779", label: "Lines of code written", icon: "⚗️" },
    { number: "1479", label: "Coffe Drinked", icon: "☕" },
    { number: "578", label: "Happy Clients", icon: "👥" },
    { number: "2178", label: "Projects Done", icon: "💼" },
  ];

  const [currentClientPage, setCurrentClientPage] = useState(0);

  return (
    <section id="about" className="py-20 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/*Company Biography */}
          {}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 uppercase">
              Company Biography
            </h2>
            
            {/* slanted badge */}
            <div className="bg-teal-500 transform -skew-x-[20deg] inline-block px-4 py-1 mt-3 mb-8">
              <span className="transform skew-x-[20deg] block text-white font-mono font-bold text-xs uppercase tracking-wider">
                Short Story About Us
              </span>
            </div>
            
            <div className="space-y-6 font-mono text-gray-400 text-sm leading-loose text-center md:text-left">
              <p>
                This is <span className="text-teal-500 font-bold">Photoshop's</span> version of Lorem Ipsum. 
                Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit
              </p>
              <p>
                Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. 
                Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. 
                <span className="text-teal-500 font-bold"> Class aptent taciti</span> sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
              <p>
                Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non
              </p>
            </div>
          </div>

          {/* Our Clients */}
          {}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 uppercase">
                  Our Clients
                </h2>
                
                <div className="bg-teal-500 transform -skew-x-[20deg] inline-block px-4 py-1 mt-3 mb-8">
                  <span className="transform skew-x-[20deg] block text-white font-mono font-bold text-xs uppercase tracking-wider">
                    We Love Our Clients
                  </span>
                </div>
              </div>
       
              {/* Functional Interactive Dots */}
              <div className="hidden sm:flex gap-2 mt-4">
                {clientPages.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentClientPage(idx)}
                    className={`w-4 h-4 rounded-full transition-colors cursor-pointer ${idx === currentClientPage ? "bg-teal-500 border-none" : "bg-transparent border border-gray-300 hover:border-teal-300"}`}
                  ></button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {clientPages[currentClientPage].map((client, index) => (
                <div 
                  key={index} 
                  className="bg-teal-500 aspect-[4/3] flex flex-col items-center justify-center hover:bg-teal-400 transition-colors shadow-sm relative overflow-hidden group"
                >
                  <img src={client.img} alt={client.name} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-20 transition-opacity duration-300" />
                  <span className="relative z-10 text-white font-serif font-bold text-xl md:text-2xl tracking-widest drop-shadow-md">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Stats Section */}
      {}
      <div className="mt-48 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4 tracking-wider uppercase">
          Company Stats
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base mb-16 max-w-2xl mx-auto">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* 4-Column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="border border-slate-200 py-12 px-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center"
            >
              <div className="text-4xl mb-6 opacity-60 mix-blend-luminosity">
                {stat.icon}
              </div>
              <h3 className="text-5xl font-mono font-light text-slate-800 tracking-wider mb-2">
                {stat.number}
              </h3>
              <p className="font-mono text-slate-400 text-sm tracking-widest uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;