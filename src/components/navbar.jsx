import React, { useState, useEffect } from 'react';
import { MdOutlineMenuOpen } from 'react-icons/md';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
    document.body.style.overflow = !mobileMenu ? "hidden" : "unset";
  };

  const closeMenu = () => {
    setMobileMenu(false);
    document.body.style.overflow = "unset";
  };

  const navItems = [
    { to: "#home", label: "Home" },
    { to: "#about", label: "About us" },
    { to: "#services", label: "Services" },
    { to: "#pricing", label: "Pricing" },
    { to: "#testimonial", label: "Testimonial" },
    { to: "#contact", label: "Contact us" },
    { to: "#login", label: "Log in", isButton: true },

  ];

  return (
    <nav className={`py-4 px-8 fixed top-0 w-full ${sticky ? "bg-blue-700" : "bg-transparent"} transition-colors duration-300 z-50`}>
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="text-white text-4xl font-bold">
          Smalter
        </div>

        {/* Desktop  */}
        <div className="hidden md:flex space-x-6 ml-96 text-gray-200">
          {navItems.map((item) => (
            <a
              key={item.to}
              href={item.to}  
              className="hover:text-white font-extralight"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>

        
        
      </div>

      {/* Mobile  */}
      <div className="md:hidden w-6 cursor-pointer absolute top-4 right-4" onClick={toggleMenu}>
        <MdOutlineMenuOpen  className='text-white text-3xl mr-0'/>
      </div>

     
      <div className={`md:hidden ${mobileMenu ? "block" : "hidden"} bg-blue-600 text-white p-4 space-y-4`}>
        {navItems.map((item) => (
          <a
            key={item.to}
            href={item.to} 
            className="block text-center text-xl font-light hover:text-gray-200"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a
          href="#login" 
          className="block text-center text-white hover:text-gray-200 font-light"
        >
          Se Connecter
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
