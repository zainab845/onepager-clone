import { useState } from "react";

const About = () => {
  // Split into multiple "pages" of clients to allow the dots to function
  const clientPages = [
    [
      { name: "OPERA", img: "https://images.unsplash.com/photo-1614680376573-3e4e1ef2de96?auto=format&fit=crop&q=80&w=400" },
      { name: "hp", img: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?auto=format&fit=crop&q=80&w=400" },
      { name: "WORDPRESS", img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400" },
      { name: "Canon", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=400" }
    ],
    [
      { name: "Google", img: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?auto=format&fit=crop&q=80&w=400" },
      { name: "Amazon", img: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=400" },
      { name: "Netflix", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=400" },
      { name: "Tesla", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=400" }
    ],
    [
      { name: "Microsoft", img: "https://images.unsplash.com/photo-1644361566696-3d442b5b482a?auto=format&fit=crop&q=80&w=400" },
      { name: "Apple", img: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=400" },
      { name: "Spotify", img: "https://images.unsplash.com/photo-1614680376408-16e340a6b7e5?auto=format&fit=crop&q=80&w=400" },
      { name: "Samsung", img: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&q=80&w=400" }
    ]
  ];

  const statsData = [
    { 
      number: "956779", 
      label: "Lines of code written", 
      icon: (
        <svg className="w-10 h-10 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.8 16.4L15 8.4V3h1a1 1 0 000-2H8a1 1 0 000 2h1v5.4L4.2 16.4C3.6 17.4 3.5 18.6 4 19.6s1.4 1.7 2.5 1.7h11c1.1 0 2-.7 2.5-1.7s.4-2.2-.2-3.2zM6.5 19.3l4.5-7.5V3h2v8.8l4.5 7.5H6.5z"/>
          <path d="M9 13h6v2H9z"/>
        </svg>
      )
    },
    { 
      number: "1479", 
      label: "Coffe Drinked", 
      icon: (
        <svg className="w-10 h-10 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 3H4v10c0 2.2 1.8 4 4 4h6c2.2 0 4-1.8 4-4v-1h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 7h-2V5h2v5zM4 19h16v2H4z"/>
        </svg>
      )
    },
    { 
      number: "578", 
      label: "Happy Clients", 
      icon: (
        <svg className="w-11 h-11 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-1 8H9c-2.8 0-5 2.2-5 5v1h16v-1c0-2.8-2.2-5-5-5h-4zm-4 4c.6-1.2 1.8-2 3.1-2h4.8c1.3 0 2.5.8 3.1 2H7zM4 12c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm16 4c1.7 0 3-1.3 3-3s-1.3-3-3-3-3 1.3-3 3 1.3 3 3 3zm0-4c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zM2.5 14H2v3c0 1.1.9 2 2 2h1v-2H4c-.6 0-1-.4-1-1v-2zM21 14v2c0 .6-.4 1-1 1h-1v2h1c1.1 0 2-.9 2-2v-3h-1z"/>
        </svg>
      )
    },
    { 
      number: "2178", 
      label: "Projects Done", 
      icon: (
        <svg className="w-10 h-10 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/>
          <path d="M11 10h2v2h-2z"/>
        </svg>
      )
    },
  ];

  const [currentClientPage, setCurrentClientPage] = useState(0);

  return (
    <section id="about" className="py-20 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT COLUMN: Company Biography */}
          <div className="max-w-[500px]">
            <h2 className="text-3xl md:text-4xl font-bold font-mono text-slate-900 uppercase tracking-[0.15em]">
              Company Biography
            </h2>
            
            {/* slanted badge */}
            <div className="bg-teal-500 transform -skew-x-[20deg] inline-block px-4 py-1.5 mt-4 mb-8">
              <span className="transform skew-x-[20deg] block text-white font-mono font-bold text-[15px] uppercase tracking-widest">
                Short Story About Us
              </span>
            </div>
            
            <div className="space-y-6 font-mono text-gray-400 text-[15px] md:text-[15px] leading-[2.2] tracking-wider text-left">
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
          <div className="flex flex-col md:items-start lg:items-center">
            <div className="w-full max-w-[420px]">
              
              {/* Header & Dots Container */}
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold font-mono text-slate-900 uppercase tracking-[0.15em]">
                    Our Clients
                  </h2>
                  
                  <div className="bg-teal-500 transform -skew-x-[20deg] inline-block px-6 py-1.5 mt-4">
                    <span className="transform skew-x-[20deg] block text-white font-mono font-bold text-[15px] uppercase tracking-widest">
                      We Love Our Clients
                    </span>
                  </div>
                </div>
         
                {/* Functional Interactive Dots */}
                <div className="hidden sm:flex gap-2 pb-1">
                  {clientPages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentClientPage(idx)}
                      className={`w-3.5 h-3.5 rounded-full transition-colors cursor-pointer ${
                        idx === currentClientPage 
                          ? "bg-gray-300 border-none" 
                          : "bg-transparent border border-gray-300 hover:border-gray-400"
                      }`}
                      aria-label={`Go to client page ${idx + 1}`}
                    ></button>
                  ))}
                </div>
              </div>

              {/* Smaller Client Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {clientPages[currentClientPage].map((client, index) => (
                  <div 
                    key={index} 
                    className="bg-teal-500/90 aspect-[3/2] flex flex-col items-center justify-center hover:bg-teal-400 transition-colors shadow-sm relative overflow-hidden group"
                  >
                    <img 
                      src={client.img} 
                      alt={client.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:opacity-10 transition-opacity duration-300" 
                    />
                    <span className="relative z-10 text-white font-serif font-bold text-xl md:text-2xl tracking-widest drop-shadow-md">
                      {client.name}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-32 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-slate-900 mb-4 tracking-[0.2em] uppercase">
          Company Stats
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base mb-16 max-w-2xl mx-auto tracking-widest">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* 4-Column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <div 
              key={index} 
              className="border border-slate-100 py-12 px-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center bg-white"
            >
              <div className="mb-6 flex justify-center">
                {stat.icon}
              </div>
              <h3 className="text-4xl md:text-[2.75rem] font-mono font-light text-slate-800 tracking-[0.15em] mb-4">
                {stat.number}
              </h3>
              <p className="font-mono text-gray-300 text-[12px] tracking-[0.1em]">
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