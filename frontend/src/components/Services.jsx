import { useState, useEffect } from 'react';
// 🎯 Hamari banayi hui central API service
import { fetchSections } from '../services/api';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLiveServices = async () => {
      try {
        // API ko bola: "Sirf 'services' category walay cards lao"
        const data = await fetchSections('services');
        setServices(data);
      } catch (error) {
        console.error("Could not load services:", error);
      } finally {
        setLoading(false);
      }
    };

    loadLiveServices();
  }, []);

  return (
    <section id="services" className="py-20 bg-white text-center font-sans">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* HEADINGS (Strictly preserved your original style) */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif text-slate-900 mb-4 tracking-wide">
          OUR SERVICES
        </h2>
        <p className="text-gray-400 font-mono text-sm md:text-base mb-16 max-w-2xl mx-auto">
          This is Photoshop's version of Lorem Ipsum. Proin gravida
        </p>

        {/* STATE 1: LOADING SPINNER */}
        {loading && (
          <div className="py-12 mb-20 font-mono text-sm text-teal-600 animate-pulse">
            [ Syncing Services with MongoDB Atlas... ]
          </div>
        )}

        {/* STATE 2: EMPTY DATABASE FALLBACK */}
        {!loading && services.length === 0 && (
          <div className="py-12 mb-20 border-2 border-dashed border-slate-200 rounded-lg max-w-xl mx-auto">
            <p className="font-mono text-xs text-gray-400">
              No live services published yet. Go to <span className="text-teal-500 font-bold">/admin</span> to add your first one!
            </p>
          </div>
        )}

        {/* STATE 3: YOUR EXACT SLANTED GRID DYNAMICALLY RENDERED */}
        {!loading && services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
            {services.map((service) => (
              <div key={service._id} className="flex flex-row items-start text-left gap-6 group">
                
                {/* The Slanted Teal Box (With counter-skewed Image inside) */}
                <div className="w-16 h-16 bg-teal-500 transform -skew-x-[20deg] flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden">
                  <img 
                    src={service.imageUrl} 
                    alt={service.title}
                    className="transform skew-x-[20deg] w-10 h-10 object-cover rounded group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Text Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-mono font-bold text-slate-700 text-lg mb-2 group-hover:text-teal-500 transition-colors uppercase truncate">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-mono text-sm leading-relaxed line-clamp-4">
                    {service.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* BOTTOM MONITOR MOCKUP IMAGE (Preserved 100% as yours) */}
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" 
            alt="Monitor mockup showing work" 
            className="w-full h-auto rounded-t-xl border-8 border-b-0 border-slate-800 shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Services;