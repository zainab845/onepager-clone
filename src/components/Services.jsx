
const servicesData = [
  { title: "WEB DESIGN", desc: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan." },
  { title: "PHOTOGRAPHY", desc: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan." },
  { title: "HTML5", desc: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan." },
  { title: "JQUERY", desc: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan." },
  { title: "SEO", desc: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan." },
  { title: "CSS3", desc: "Duis sed odio sit amet nibh vulputate cursus a sit amet mauris morbi accumsan." },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <div className="max-w-6xl mx-auto px-4">
        
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4">
          OUR SERVICES
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base mb-16 max-w-2xl mx-auto">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
          {servicesData.map((service, index) => (
            <div key={index} className="flex flex-row items-start text-center gap-6">
              
              {/* The Slanted Teal Icon Box */}
              <div className="w-16 h-16 bg-teal-500 transform -skew-x-[20deg] flex-shrink-0 flex items-center justify-center shadow-sm">
                {/* We skew the inner span the opposite way so the icon stays straight! */}
                <span className="transform skew-x-[20deg] text-white font-bold text-xl">
                  {/* Placeholder for an actual icon */}
                  ✦
                </span>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="font-mono font-bold text-slate-700 text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Image Placeholder */}
        <div className="max-w-4xl mx-auto">
          <div className="w-full h-64 md:h-96 bg-slate-200 rounded-t-xl border-8 border-b-0 border-slate-800 flex items-center justify-center">
            <p className="font-mono text-slate-500">Monitor Image Placeholder</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;