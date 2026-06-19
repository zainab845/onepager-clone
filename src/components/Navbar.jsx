const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <a className="text-gray-600 hover:text-blue-600 font-medium" href="#">Your Logo</a>
        </div>

        {/* Right Side: Links */}
        <ul className="hidden md:flex space-x-8">
          <li><a className="text-gray-600 hover:text-blue-600" href="#home">Home</a></li>
            <li><a className="text-gray-600 hover:text-blue-600" href="#portfolio">Portfolio</a></li>
          <li><a className="text-gray-600 hover:text-blue-600" href="#services">Services</a></li>
         
          <li><a className="text-gray-600 hover:text-blue-600" href="#team">Team</a></li>
           <li><a className="text-gray-600 hover:text-blue-600" href="#blog">Blog</a></li>
          <li><a className="text-gray-600 hover:text-blue-600" href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;