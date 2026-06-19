const Hero = () => {
  // The Dark Background Container
  return (
    <section className="bg-slate-800 text-white min-h-[60vh] flex flex-col justify-center items-center relative py-20">
      

      <div className="z-10 text-center px-4 max-w-4xl mx-auto">

        {/* The Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-widest mb-6 font-serif">
          WELCOME TO <span className="text-teal-400">ONE</span>PAGER
        </h1>

        {/* The Subheadline */}
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-mono leading-relaxed">
          we design and develop awesome websites and smart
          applications, impactful identities using the latest
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
