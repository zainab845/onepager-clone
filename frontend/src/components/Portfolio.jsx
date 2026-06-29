import { useState, useEffect } from "react";
// 🎯 Hamari central API service
import { fetchSections } from "../services/api";

const tabs = ["All", "Web Design", "Photography", "Illustration", "Branding"];

// STATIC FALLBACK DATA
const fallbackPortfolio = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    title: "Cool App Design",
    tags: "development, mobile",
    category: "Branding",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    title: "Photography Work",
    tags: "photography, art",
    category: "Photography",
    desc: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
];

// Helper: Database card ko Portfolio item mein convert karne ke liye
const formatPortfolioItem = (item, index) => {
  const categories = ["Web Design", "Photography", "Illustration", "Branding"];
  const assignedCat = categories[index % categories.length]; // Sub mein evenly distribute kar dega

  return {
    id: item._id,
    img: item.imageUrl,
    title: item.title,
    tags: item.description ? item.description.split(" ").slice(0, 2).join(", ") : "creative, design",
    category: assignedCat,
    desc: item.description || "No detailed description provided."
  };
};

const Portfolio = () => {
  const [items, setItems] = useState(fallbackPortfolio);
  const [activeTab, setActiveTab] = useState("All");
  
  // Modal State
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: null, 
    currentIndex: 0,
  });

  // 1. Fetch Dynamic Portfolio Items
  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        const data = await fetchSections('portfolio');
        if (data && data.length > 0) {
          const formatted = data.map(formatPortfolioItem);
          setItems(formatted);
        }
      } catch (err) {
        console.error("Portfolio fetch failed, using fallback:", err);
      }
    };
    loadPortfolio();
  }, []);

  const filtered =
    activeTab === "All"
      ? items
      : items.filter((item) => item.category === activeTab);

  useEffect(() => {
    if (modalState.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalState.isOpen]);

  const openModal = (type, index) => {
    setModalState({ isOpen: true, type, currentIndex: index });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false, type: null });
  };

  const nextItem = (e) => {
    e.stopPropagation();
    setModalState((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === filtered.length - 1 ? 0 : prev.currentIndex + 1,
    }));
  };

  const prevItem = (e) => {
    e.stopPropagation();
    setModalState((prev) => ({
      ...prev,
      currentIndex: prev.currentIndex === 0 ? filtered.length - 1 : prev.currentIndex - 1,
    }));
  };

  const activeItem = filtered[modalState.currentIndex];

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-white relative font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-widest text-slate-800 mb-4 font-serif uppercase">
            Our Portfolio
          </h2>
          <p className="text-gray-400 font-mono text-sm mb-8 max-w-xl mx-auto">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>

          <div className="h-px w-full max-w-3xl mx-auto bg-gray-200 mb-8" />

          {/* Filter Tabs */}
          <ul className="flex flex-wrap justify-center gap-3 md:gap-5 font-mono text-xs">
            {tabs.map((tab) => (
              <li key={tab}>
                <button
                  onClick={() => setActiveTab(tab)}
                  className="relative inline-flex items-center justify-center px-6 py-2 group focus:outline-none cursor-pointer"
                >
                  <div
                    className={`absolute inset-0 transform -skew-x-[20deg] transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-teal-500 border border-teal-500"
                        : "bg-transparent border border-gray-200 group-hover:bg-teal-500 group-hover:border-teal-500"
                    }`}
                  />
                  <span
                    className={`relative z-10 uppercase tracking-wider transition-colors duration-300 ${
                      activeTab === tab
                        ? "text-white font-bold"
                        : "text-gray-500 group-hover:text-white"
                    }`}
                  >
                    {tab}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Masonry Grid */}
        <div
          style={{
            columns: "4 220px",
            columnGap: "16px",
          }}
        >
          {filtered.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden mb-4 bg-gray-100 shadow-sm rounded"
              style={{ breakInside: "avoid" }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto block transition-transform duration-700 group-hover:scale-110 object-cover"
                loading="lazy"
              />

              {/* Teal Hover Overlay */}
              <div className="absolute inset-0 bg-teal-500/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between">
                <div></div>

                <div className="text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-serif font-bold text-lg md:text-xl leading-tight mb-1 tracking-wide uppercase">
                    {item.title}
                  </h3>
                  <p className="text-white/80 font-mono text-xs uppercase tracking-widest">{item.tags}</p>
                </div>

                {/* Bottom Slanted Buttons */}
                <div className="flex justify-center gap-1 pb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <button 
                    onClick={() => openModal('image', index)}
                    className="bg-white hover:bg-gray-100 text-teal-500 w-12 h-10 transform -skew-x-[20deg] flex items-center justify-center transition-colors cursor-pointer"
                    title="View Full Image"
                  >
                    <span className="transform skew-x-[20deg]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </span>
                  </button>

                  <button 
                    onClick={() => openModal('details', index)}
                    className="bg-white hover:bg-gray-100 text-teal-500 w-12 h-10 transform -skew-x-[20deg] flex items-center justify-center transition-colors cursor-pointer"
                    title="Project Details"
                  >
                    <span className="transform skew-x-[20deg]">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODALS */}
      {modalState.isOpen && activeItem && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm transition-opacity"
          onClick={closeModal}
        >
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white hover:text-teal-400 transition-colors z-[110] cursor-pointer"
          >
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>

          {/* LIGHTBOX MODAL */}
          {modalState.type === 'image' && (
            <div className="relative max-w-5xl w-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <button onClick={prevItem} className="absolute left-0 p-4 text-white hover:text-teal-400 transition-colors cursor-pointer"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg></button>
              <img src={activeItem.img} alt={activeItem.title} className="max-h-[85vh] max-w-full object-contain shadow-2xl rounded" />
              <button onClick={nextItem} className="absolute right-0 p-4 text-white hover:text-teal-400 transition-colors cursor-pointer"><svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
            </div>
          )}

          {/* DETAILS MODAL */}
          {modalState.type === 'details' && (
            <div 
              className="relative max-w-3xl w-full bg-white shadow-2xl flex flex-col rounded-lg overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video w-full bg-slate-100 flex items-center justify-center overflow-hidden">
                <img src={activeItem.img} alt={activeItem.title} className="w-full h-full object-cover" />
                <button onClick={prevItem} className="absolute left-4 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextItem} className="absolute right-4 w-10 h-10 flex items-center justify-center bg-black/30 hover:bg-black/60 text-white rounded-full transition-colors cursor-pointer">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>

              <div className="p-8 md:p-12 text-left">
                <span className="text-xs font-mono bg-teal-100 text-teal-800 px-2 py-1 rounded font-bold uppercase">{activeItem.category}</span>
                <h3 className="text-3xl font-serif text-slate-800 mt-2 mb-4 uppercase">{activeItem.title}</h3>
                <p className="font-mono text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                  {activeItem.desc}
                </p>
              </div>

              <div className="bg-[#2a2c2e] p-4 text-center">
                <p className="font-mono text-white text-xs tracking-widest uppercase">
                  OnePager CMS Dynamic Asset
                </p>
              </div>
            </div>
          )}

        </div>
      )}
    </section>
  );
};

export default Portfolio;