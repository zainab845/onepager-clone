const About = () => {

  const clients = ["OPERA", "hp", "WORDPRESS", "Canon"];

  // Added stats data array here
  const statsData = [
    { number: "956779", label: "Lines of code written", icon: "⚗️" },
    { number: "1479", label: "Coffe Drinked", icon: "☕" },
    { number: "578", label: "Happy Clients", icon: "👥" },
    { number: "2178", label: "Projects Done", icon: "💼" },
  ];

  return (
    <section id="about" className="py-20 bg-white text-left">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/*Company Biography */}
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
       
              <div className="hidden sm:flex gap-2 mt-4">
                <div className="w-4 h-4 rounded-full bg-gray-300"></div>
                <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                <div className="w-4 h-4 rounded-full border border-gray-300"></div>
              </div>
            </div>

        
            <div className="grid grid-cols-2 gap-4">
              {clients.map((client, index) => (
                <div 
                  key={index} 
                  className="bg-teal-500 aspect-[4/3] flex items-center justify-center hover:bg-teal-400 transition-colors shadow-sm"
                >
                  <span className="text-white font-serif font-bold text-xl md:text-2xl tracking-widest">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    {/* Stats Section */}
      <div className="mt-48 max-w-7xl mx-auto px-4 text-center">
        
        {/* Section Headers */}
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