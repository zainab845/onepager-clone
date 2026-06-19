import { useState, useEffect } from "react";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
      titlePre: "WELCOME TO ",
      titleTeal: "ONE",
      titlePost: "PAGER",
      sub: "we design and develop awesome websites and smart applications, impactful identities using the latest"
    },
    {
      bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920",
      titlePre: "WE ARE A",
      titleTeal: "GREAT",
      titlePost: "COMPANY",
      sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmmo"
    },
    {
      bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920",
      titlePre: "ONEPAGER ",
      titleTeal: "IS",
      titlePost: "VERY SUITABLE",
      sub: "Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipisicing elit"
    }
  ];

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="bg-slate-800 text-white min-h-[60vh] flex flex-col justify-center items-center relative py-20 overflow-hidden">
      
      {/* Background Images with Fade Transition */}
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"}`}
        >
          <div className="absolute inset-0 bg-slate-900/70 z-10"></div>
          <img src={slide.bg} alt="hero background" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Manual Slide Controls */}
      <button onClick={() => setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1)} className="absolute left-4 md:left-10 z-20 text-white/50 hover:text-white transition text-4xl cursor-pointer">&#10094;</button>
      <button onClick={() => setCurrentSlide(prev => prev === slides.length - 1 ? 0 : prev + 1)} className="absolute right-4 md:right-10 z-20 text-white/50 hover:text-white transition text-4xl cursor-pointer">&#10095;</button>

      <div className="z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-500">

        {/* The Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-6 font-serif">
          {slides[currentSlide].titlePre} <span className="text-teal-400">{slides[currentSlide].titleTeal}</span> {slides[currentSlide].titlePost}
        </h1>

        {/* The Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-mono leading-relaxed">
          {slides[currentSlide].sub}
        </p>

        {/* The Teal Button */}
        <button className="bg-teal-500 hover:bg-teal-400 text-white font-bold py-4 px-10 tracking-widest text-sm transition-colors duration-300">
          LEARN MORE
        </button>

      </div>
    </section>
  );
};

export default Hero;