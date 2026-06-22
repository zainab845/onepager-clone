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
    titlePre: "WE ARE A ",
    titleTeal: "GREAT",
    titlePost: "COMPANY",
    sub: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    bg:  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1920",
    titlePre: "ONEPAGER ",
    titleTeal: "IS ",
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
      className="bg-[#282b30] text-white h-screen w-full flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-0" : "opacity-0 z-0"
          }`}
        >
          {/* Deep slate overlay matching the exact picture color */}
          <div className="absolute inset-0 bg-[#282b30]/90 z-10" />
          <img
            src={slide.bg}
            alt="Hero Background"
            className="w-full h-full object-cover grayscale opacity-40"
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      {/* SVG Left Arrow - Pushed closer to the edge on mobile */}
      <button
        onClick={goPrev}
        className="absolute left-1 sm:left-10 top-1/2 -translate-y-1/2 z-20 text-white hover:text-teal-400 transition-colors duration-200 cursor-pointer p-1 md:p-4"
        aria-label="Previous slide"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
      </button>

      {/* SVG Right Arrow - Pushed closer to the edge on mobile */}
      <button
        onClick={goNext}
        className="absolute right-1 sm:right-10 top-1/2 -translate-y-1/2 z-20 text-white hover:text-teal-400 transition-colors duration-200 cursor-pointer p-1 md:p-4"
        aria-label="Next slide"
      >
        <svg className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </button>

      {/* Text Content - Increased side padding (px-16) so text avoids arrows on mobile */}
      <div className="z-10 text-center px-16 sm:px-24 max-w-5xl mx-auto w-full">
        {/* Title allows natural wrapping now */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] tracking-widest mb-6 uppercase leading-tight md:leading-tight">
          <span className="font-serif font-bold text-white drop-shadow-md">
            {slides[currentSlide].titlePre}
          </span>
          <span className="font-serif font-bold text-teal-500 drop-shadow-md">
            {slides[currentSlide].titleTeal}
          </span>
          <span className="font-mono font-normal text-white tracking-[0.15em] drop-shadow-md">
            {slides[currentSlide].titlePost}
          </span>
        </h1>
        
        {/* Sub headline with exact spacing and breaks */}
        <p className="text-white/80 font-mono text-xs sm:text-sm md:text-[15px] max-w-2xl mx-auto leading-[2.2] tracking-wider whitespace-pre-line drop-shadow-sm">
          {slides[currentSlide].sub}
        </p>

        {/* Learn More Button */}
        <a
          href="#portfolio"
          className="inline-block bg-teal-500 hover:bg-teal-400 transform -skew-x-[20deg] transition-colors duration-300 shadow-sm mt-10"
        >
          <span className="block transform skew-x-[20deg] text-white font-mono font-bold py-3 md:py-4 px-8 md:px-12 tracking-widest text-xs md:text-sm uppercase">
            Learn More
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;