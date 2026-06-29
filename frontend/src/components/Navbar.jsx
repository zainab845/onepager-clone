import { useState, useEffect } from "react";
// 1. React Router ke hooks import kiye
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // 2. Browser ka current URL location pta karne ke liye
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full left-0 top-0 z-50 transition-all duration-500 ease-in-out ${scrolled ? "translate-y-0 opacity-100 bg-white shadow-md" : "-translate-y-full opacity-0 pointer-events-none"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 md:h-24">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 flex-shrink-0">
            <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white font-mono font-bold text-xl select-none">
                ❁
              </span>
            </div>
            
            <div className="flex flex-col text-left leading-none mt-1">
              <span className="font-mono text-2xl tracking-[0.2em] text-slate-800 uppercase">
                <span className="font-bold">ONE</span>
                <span className="text-gray-500 font-light">PAGER</span>
              </span>
              <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase hidden sm:block mt-1">
                creative multi page template
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navLinks.map((link) => {
              // 3. Active Link check karne ka naya tarika (URL matching)
              const isActive = location.pathname === link.href;
              
              return (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="relative inline-flex items-center justify-center px-5 py-2 group"
                  >
                    {/* The Slanted Teal Box */}
                    <div 
                      className={`absolute inset-0 bg-teal-500 transform -skew-x-[20deg] transition-all duration-300 ${
                        isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                      }`}
                    ></div>
                    
                    {/* The Link Text */}
                    <span 
                      className={`relative z-10 font-mono text-[12px] uppercase tracking-widest transition-colors duration-200 ${
                        isActive ? "text-white font-bold" : "text-gray-500 group-hover:text-teal-500"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger (Mobile) */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8 cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-[2px] bg-slate-700 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-full h-[2px] bg-slate-700 transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block w-full h-[2px] bg-slate-700 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"}`}>
        <ul className="bg-white py-2 px-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-3 font-mono text-xs uppercase tracking-widest transition-colors border-b border-gray-50 last:border-0 ${
                    isActive ? "text-teal-500 font-bold" : "text-gray-500 hover:text-teal-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;