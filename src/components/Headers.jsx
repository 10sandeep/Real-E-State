import React, { useState, useEffect, useRef } from 'react';
import { useDarkMode } from './DarkModeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const menuRef = useRef(null);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (event, href) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className={`w-full transition-all duration-300 ${
      scrolled ? 'py-2 bg-white shadow-md dark:bg-gray-800' : 'py-4 bg-transparent'
    } ${darkMode ? 'dark' : ''}`}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            Real Estate
          </a>

          {/* Centered Desktop Navigation */}
          <ul className="hidden md:flex space-x-6 font-bold flex-1 justify-center">
            {navItems.map((item) => (
              <li key={item.name}>
                <a 
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 cursor-pointer"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-600 dark:text-gray-300 focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <ul className="pt-4 pb-3">
              {navItems.map((item) => (
                <li key={item.name} className="mb-2">
                  <a 
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    className="block py-2 text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
