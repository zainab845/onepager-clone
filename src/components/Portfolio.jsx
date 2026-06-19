const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12">
      {/* Container */}
      <div className="container mx-auto px-4">

        {/* header section */}
        <div className="text-center mb-12">
      <h2 className="text-4xl font-bold tracking-widest text-slate-800 mb-4 font-serif">
        OUR PORTFOLIO
      </h2>
      <p className="text-gray-500 font-mono mb-8">
        This is Photoshop's version of Lorem Ipsum. Proin gravida
      </p>

      {/* divider line */}
      <div className="h-px w-full max-w-3xl mx-auto bg-gray-300 mb-8"></div>

      {/* filter navigation */}
      <ul className="flex flex-wrap justify-center gap-6 md:gap-10 font-mono text-sm">
        <li>

          <a href="#" className="bg-teal-500 text-white px-6 py-2 cursor-pointer">
            All
          </a>
        </li>
        <li><a href="#" className="text-gray-600 hover:text-teal-500 cursor-pointer transition">Web Design</a></li>
        <li><a href="#" className="text-gray-600 hover:text-teal-500 cursor-pointer transition">Photography</a></li>
        <li><a href="#" className="text-gray-600 hover:text-teal-500 cursor-pointer transition">Illustration</a></li>
        <li><a href="#" className="text-gray-600 hover:text-teal-500 cursor-pointer transition">Branding</a></li>
      </ul>
      </div>

      {/* grid Layout for Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        
      {/* column 1 */}
      <div className="flex flex-col gap-4">
        <div className="bg-gray-200 h-64 overflow-hidden">
            {/* Yellow Poster Image Placeholder */}
            <div className="w-full h-full bg-yellow-400 flex items-center justify-center text-yellow-800 font-bold p-4 text-center">
                SERVICIO MULTIDISCIPLINA
            </div>
        </div>
        <div className="bg-gray-200 h-48">
             {/* Keys Image Placeholder */}
             <div className="w-full h-full bg-slate-700 flex items-center justify-center text-white">Keys Image</div>
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-4">
         <div className="bg-gray-200 h-96 overflow-hidden border-8 border-white shadow-sm">
              {/* July Calendar Image Placeholder */}
             <div className="w-full h-full bg-blue-500 flex flex-col items-center justify-center text-blue-900 font-serif">
                <span className="text-5xl italic mb-4">July</span>
             </div>
         </div>
      </div>

      {/* column 3 */}
      <div className="flex flex-col gap-4">
         <div className="bg-gray-200 h-48 overflow-hidden">
              {/* Mug Image Placeholder */}
             <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                <span className="text-white font-bold">Mug Image</span>
             </div>
         </div>
         <div className="bg-gray-200 h-48 overflow-hidden">
              {/* Krispy Chicken Image Placeholder */}
             <div className="w-full h-full bg-white flex items-center justify-center text-orange-500 font-bold">Krispy Chicken</div>
         </div>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col gap-4">
         <div className="bg-gray-200 h-80 overflow-hidden">
             {/* May Cards Image Placeholder */}
             <div className="w-full h-full bg-slate-100 flex items-center justify-center text-blue-600 font-serif text-5xl italic shadow-inner">
                May
             </div>
         </div>
      </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;