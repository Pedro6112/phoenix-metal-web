
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre Nós', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Atendimento', id: 'atendimento' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-fenix-dark/95 backdrop-blur-md shadow-xl' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => scrollToSection('inicio')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <img 
              src="/lovable-uploads/1a7c4173-cb46-44ef-8a5f-b72fb67287e6.png" 
              alt="Metalúrgica Fênix" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <h1 className="font-playfair font-bold text-xl text-white">
                Metalúrgica Fênix
              </h1>
              <p className="text-fenix-orange text-sm font-inter">
                Excelência em Metalurgia
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white hover:text-fenix-orange transition-colors duration-300 font-inter font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-fenix-orange transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <button
              onClick={() => scrollToSection('atendimento')}
              className="bg-fenix-red hover:bg-fenix-orange text-white px-6 py-2 rounded-full font-inter font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white hover:text-fenix-orange transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-fenix-dark/95 backdrop-blur-md rounded-lg p-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left text-white hover:text-fenix-orange py-3 transition-colors duration-300 font-inter"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('atendimento')}
              className="w-full bg-fenix-red hover:bg-fenix-orange text-white px-6 py-3 rounded-full font-inter font-medium transition-all duration-300 mt-4"
            >
              Contato
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
