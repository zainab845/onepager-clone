const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="https://images.unsplash.com/vector-1739893035995-a9e87bc84165?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="Logo" 
            className="h-10 w-10 object-contain"
          />
          <div className="flex flex-col text-left">
            <span className="font-serif font-bold text-2xl tracking-widest text-slate-800 uppercase leading-none">
              One<span className="text-gray-400">Pager</span>
            </span>
            <span className="font-mono text-[10px] text-gray-400 tracking-wider">
              creative single page template
            </span>
          </div>
        </a>

     
        <ul className="hidden md:flex space-x-8">
          <li><a className="text-gray-600 hover:text-teal-500 font-mono text-sm uppercase transition-colors" href="#home">Home</a></li>
          <li><a className="text-gray-600 hover:text-teal-500 font-mono text-sm uppercase transition-colors" href="#portfolio">Portfolio</a></li>
          <li><a className="text-gray-600 hover:text-teal-500 font-mono text-sm uppercase transition-colors" href="#services">Services</a></li>
          <li><a className="text-gray-600 hover:text-teal-500 font-mono text-sm uppercase transition-colors" href="#team">Team</a></li>
          <li><a className="text-gray-600 hover:text-teal-500 font-mono text-sm uppercase transition-colors" href="#about">About</a></li>
          <li><a className="text-gray-600 hover:text-teal-500 font-mono text-sm uppercase transition-colors" href="#blog">Blog</a></li>
          <li><a className="text-gray-600 hover:text-teal-500 font-mono text-sm uppercase transition-colors" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;