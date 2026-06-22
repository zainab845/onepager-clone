import { useState, useEffect } from "react";

const slides = [
  {
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920",
    titlePre: "WELCOME TO ",
    titleTeal: "ONE",
    titlePost: "PAGER",
    sub: "We design and develop awesome websites and smart applications, impactful identities using the latest technologies.",
  },
  {
    bg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920",
    titlePre: "WE ARE A",
    titleTeal: "GREAT",
    titlePost: "COMPANY",
    sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    bg:  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920",
    titlePre: "ONEPAGER ",
    titleTeal: "IS",
    titlePost: "VERY SUITABLE",
    sub: "Duis aute irure dolor in reprehenderit in voluptate velit esse, consectetur adipisicing elit, sed do eiusmod.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const goNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section
      id="home"
      className="relative text-white flex flex-col justify-center items-center overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <div className="absolute inset-0 bg-slate-900/72 z-10" />
          <img
            src={slide.bg}
            alt=""
            className="w-full h-full object-cover"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={goPrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white text-4xl md:text-5xl transition-colors duration-200 leading-none select-none cursor-pointer"
        aria-label="Previous slide"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={goNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 text-white/40 hover:text-white text-4xl md:text-5xl transition-colors duration-200 leading-none select-none cursor-pointer"
        aria-label="Next slide"
      >
        &#10095;
      </button>

     
      <div className="relative z-10 text-center px-6 sm:px-12 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-6 font-serif leading-tight uppercase">
          {slides[currentSlide].titlePre}
          <span className="text-teal-400">{slides[currentSlide].titleTeal}</span>{" "}
          {slides[currentSlide].titlePost}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-10 max-w-2xl mx-auto font-mono leading-relaxed">
          {slides[currentSlide].sub}
        </p>
       <a
          href="#portfolio"
          className="inline-block bg-teal-500 hover:bg-teal-400 transform -skew-x-[20deg] transition-colors duration-300 shadow-sm"
        >
          <span className="block transform skew-x-[20deg] text-white font-mono font-bold py-3 md:py-4 px-8 md:px-12 tracking-widest text-xs md:text-sm uppercase">
            Learn More
          </span>
        </a>
      </div>

      
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === currentSlide
                ? "bg-teal-400 scale-110"
                : "bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
