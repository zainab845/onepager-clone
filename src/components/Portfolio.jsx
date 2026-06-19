import { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Web Design", "Photography", "Illustration", "Branding"];

  return (
    <section id="portfolio" className="py-12">
      <div className="container mx-auto px-4">

        {/* header section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-widest text-slate-800 mb-4 font-serif">
            OUR PORTFOLIO
          </h2>
          <p className="text-gray-500 font-mono mb-8">
            This is Photoshop's version of Lorem Ipsum. Proin gravida
          </p>

          <div className="h-px w-full max-w-3xl mx-auto bg-gray-300 mb-8"></div>

          {/* filter navigation */}
      <ul className="flex flex-wrap justify-center gap-6 md:gap-10 font-mono text-sm">
        {tabs.map((tab) => (
          <li key={tab}>
            <button 
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 cursor-pointer transition-colors duration-300 ${activeTab === tab ? "bg-teal-500 text-white" : "text-gray-600 hover:text-teal-500"}`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </div>

    {/* grid Layout for Images */}
    {}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      
      {/* Column 1 */}
      <div className="flex flex-col gap-4">
        {/* Branding */}
        <div className={`bg-gray-200 h-64 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Branding' ? 'block' : 'hidden'}`}>
            <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" alt="Branding" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
        {/* Photography */}
        <div className={`bg-gray-200 h-48 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Photography' ? 'block' : 'hidden'}`}>
             <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=600" alt="Photography" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
        {/* Web Design (NEW) */}
        <div className={`bg-gray-200 h-64 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Web Design' ? 'block' : 'hidden'}`}>
             <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" alt="Web Design" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
        </div>
        {/* Illustration */}
         <div className={`bg-gray-200 h-80 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Illustration' ? 'block' : 'hidden'}`}>
             <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600" alt="Art Paint" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-4">
         {/* Illustration */}
         <div className={`bg-gray-200 h-96 overflow-hidden border-8 border-white shadow-sm transition-all duration-300 ${activeTab === 'All' || activeTab === 'Illustration' ? 'block' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?auto=format&fit=crop&q=80&w=600" alt="Illustration" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
         {/* Branding (NEW) */}
         <div className={`bg-gray-200 h-48 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Branding' ? 'block' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=600" alt="Branding" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
         {/* Web Design */}
         <div className={`bg-gray-200 h-48 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Web Design' ? 'block' : 'hidden'}`}>
             <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=600" alt="Web Design Planning" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
         {/* Photography */}
         <div className={`bg-gray-200 h-48 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Photography' ? 'block' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1781438587147-2909ebd23bcc?q=80&w=1135&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Photography Lens" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-4">
         
         {/* Web Design */}
         <div className={`bg-gray-200 h-48 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Web Design' ? 'block' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&q=80&w=600" alt="Web Design UI" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
         {/* Illustration */}
         <div className={`bg-gray-200 h-64 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Illustration' ? 'block' : 'hidden'}`}>
              <img src="https://images.unsplash.com/photo-1780833563244-6554a43cce30?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Illustration Sketch" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
          {/* Branding */}
         <div className={`bg-gray-200 h-48 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Branding' ? 'block' : 'hidden'}`}>
             <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" alt="Corporate Branding" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col gap-4">
         
         
         {/* Branding */}
         <div className={`bg-gray-200 h-48 overflow-hidden transition-all duration-300 ${activeTab === 'All' || activeTab === 'Branding' ? 'block' : 'hidden'}`}>
             <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Corporate Branding" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"/>
         </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Portfolio;