const socialIcons = [
  { id: "facebook", content: <span className="font-serif font-bold text-[32px] leading-none pt-1">f</span> },
  { 
    id: "twitter", 
    content: (
      <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
      </svg>
    ) 
  },
  { 
    id: "rss", 
    content: (
      <svg className="w-8 h-8 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M6 19a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
      </svg>
    ) 
  },
  { id: "gplus", content: <span className="font-serif font-bold text-[32px] leading-none tracking-tighter pt-1">g+</span> },
  { id: "linkedin", content: <span className="font-serif font-bold text-[32px] leading-none pt-1">in</span> },
  { id: "pinterest", content: <span className="font-serif font-bold text-[32px] leading-none pt-1">p</span> },
];

const Contact = () => {
  return (
    <section id="contact" className="relative">

      {/* Dark Form Section */}
      <div className="bg-[#2a2c2e] py-10 md:py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-mono mb-4 tracking-[0.15em] uppercase">
              Get In Touch!
            </h2>
            <p className="text-white font-mono text-base max-w-2xl mx-auto tracking-wider">
              This is Photoshop's version of Lorem Ipsum. Proin gravida
            </p>
          </div>

          {/* Two Columns for Info and Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left: Contact Info */}
            <div>
              <h3 className="text-3xl font-mono mb-6 tracking-wide">
                Contact info
              </h3>
              
              {/* Description */}
              <div className="space-y-6 font-mono text-white text-base leading-[2.2] tracking-wide mb-8">
                <p>
                  Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat.
                </p>
                <p>
                  Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum
                </p>
              </div>

              {/* Gray Partition Line */}
              <hr className="border-[#444] mb-8 w-full" />

              {/* Address Details */}
              <div className="flex flex-col gap-4 font-mono text-[15px] text-white">
                <div className="flex flex-wrap gap-x-10 gap-y-4">
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                    <span>lorem ipsum street</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    <span>+399 (500) 321 9548</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <span>info@domain.com</span>
                </div>
              </div>
            </div>

            {/* Right: The Form */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              {/* Form Left Column (Inputs) */}
              <div className="flex flex-col gap-4">
                {/* Name */}
                <div className="flex bg-white text-slate-800 h-[60px]">
                  <div className="w-[70px] border-r border-gray-200 flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 border border-slate-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 focus:outline-none font-mono text-sm placeholder:text-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="flex bg-white text-slate-800 h-[60px]">
                  <div className="w-[70px] border-r border-gray-200 flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 border border-slate-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="email"
                    placeholder="e-mail"
                    className="w-full px-4 focus:outline-none font-mono text-sm placeholder:text-gray-400"
                  />
                </div>

                {/* Website */}
                <div className="flex bg-white text-slate-800 h-[60px]">
                  <div className="w-[70px] border-r border-gray-200 flex items-center justify-center flex-shrink-0">
                    <div className="w-8 h-8 border border-slate-900 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z" />
                      </svg>
                    </div>
                  </div>
                  <input
                    type="url"
                    placeholder="website"
                    className="w-full px-4 focus:outline-none font-mono text-sm placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Form Right Column (Message + Button) */}
              <div className="flex flex-col justify-between h-[212px]">
                <textarea
                  placeholder="Message"
                  className="w-full h-[136px] p-5 bg-white text-slate-800 focus:outline-none font-mono text-sm placeholder:text-gray-400 resize-none"
                />
                <button className="bg-teal-500 hover:bg-teal-400 transition-colors duration-300 text-white font-mono font-bold tracking-[0.1em] h-[60px] w-full flex items-center justify-center uppercase text-sm">
                  Send Message
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Teal Footer */}
      <div className="bg-teal-500 py-16 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <p className="font-mono text-sm tracking-widest uppercase">
            © 2014 OnePager, All Rights Reserved
          </p>
          
          {/* Mobile responsive wrapping container */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socialIcons.map((item) => (
              <a
                key={item.id}
                href="#"
                className="w-14 h-14 md:w-[76px] md:h-[76px] rounded-full border-[1.5px] border-white flex items-center justify-center hover:bg-white hover:text-teal-500 transition-colors duration-300"
                aria-label={`Social icon ${item.id}`}
              >
                <div className="scale-[0.8] md:scale-100 flex items-center justify-center">
                  {item.content}
                </div>
              </a>
            ))}
          </div>
          
        </div>
      </div>

    </section>
  );
};

export default Contact;