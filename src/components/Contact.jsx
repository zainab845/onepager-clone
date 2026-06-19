const Contact = () => {
  return (
    <section id="contact" className="relative">
      
      <div className="bg-[#2a2c2e] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* section Headers */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 tracking-widest">
              GET IN TOUCH!
            </h2>
            <p className="text-gray-400 font-mono text-sm md:text-base">
              This is Photoshop's version of Lorem Ipsum. Proin gravida
            </p>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            
            {/* Contact Info */}
            <div>
              <h3 className="text-3xl font-mono mb-8 tracking-wide">
                Contact info
              </h3>
              
              <div className="space-y-6 font-mono text-gray-400 text-sm leading-loose mb-10">
                <p>
                  Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.
                </p>
                <p>
                  Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                </p>
              </div>

              {/* address Details */}
              <div className="flex flex-col gap-3 font-mono text-sm text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-white text-lg">🏠</span>
                  <span>lorem ipsum street</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-lg">📞</span>
                  <span>+399 (500) 321 9548</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-white text-lg">✉️</span>
                  <span>info@domain.com</span>
                </div>
              </div>
            </div>

            {/* The Form */}
            <div className="flex flex-col gap-4">
              
              {/* Name Input with Icon */}
              <div className="flex bg-white text-slate-800">
                <div className="p-4 border-r border-gray-200 flex items-center justify-center bg-gray-50">
                  <span className="text-gray-500">👤</span>
                </div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full p-4 focus:outline-none font-mono placeholder:text-gray-400"
                />
              </div>

              {/* Email Input with Icon */}
              <div className="flex bg-white text-slate-800">
                <div className="p-4 border-r border-gray-200 flex items-center justify-center bg-gray-50">
                  <span className="text-gray-500">✉️</span>
                </div>
                <input 
                  type="email" 
                  placeholder="e-mail" 
                  className="w-full p-4 focus:outline-none font-mono placeholder:text-gray-400"
                />
              </div>

              {/* Website Input with Icon */}
              <div className="flex bg-white text-slate-800">
                <div className="p-4 border-r border-gray-200 flex items-center justify-center bg-gray-50">
                  <span className="text-gray-500">🔗</span>
                </div>
                <input 
                  type="url" 
                  placeholder="website" 
                  className="w-full p-4 focus:outline-none font-mono placeholder:text-gray-400"
                />
              </div>

              {/* Message Textarea */}
              <textarea 
                placeholder="Message" 
                rows="5"
                className="w-full p-4 bg-white text-slate-800 focus:outline-none font-mono placeholder:text-gray-400 resize-none"
              ></textarea>

              <button className="bg-teal-500 hover:bg-teal-400 transition-colors text-white font-mono font-bold tracking-widest py-4 mt-2">
                SEND MESSAGE
              </button>
              
            </div>

          </div>
        </div>
      </div>

      {/* Teal Footer */}
      <div className="bg-teal-500 py-8 text-white font-mono text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <p>© 2026 OnePager, All Rights Reserved</p>

          {/* footer social Icons */}
          <div className="flex gap-4">
            {[1, 2, 3, 4, 5].map((icon) => (
              <a 
                key={icon} 
                href="#" 
                className="w-10 h-10 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-teal-500 transition-colors"
              >
                <span className="font-serif font-bold">f</span>
              </a>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Contact;