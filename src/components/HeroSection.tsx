
import React from 'react';
import { ArrowRight, Phone, Instagram } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5517988163649', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/fenix_metal/?utm_source=ig_web_button_share_sheet', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/company/metalurgica-fenix-rp/', '_blank');
  };

  const scrollToServices = () => {
    const element = document.getElementById('servicos');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-fenix-dark via-fenix-graphite to-fenix-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-fenix-red rounded-full filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fenix-orange rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-8">
              <h1 className="font-playfair font-bold text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
                Excelência em{' '}
                <span className="text-transparent bg-gradient-to-r from-fenix-red to-fenix-orange bg-clip-text">
                  Pintura Eletrostática
                </span>{' '}
                e{' '}
                <span className="text-transparent bg-gradient-to-r from-fenix-orange to-fenix-red bg-clip-text">
                  Jato de Alta Pressão
                </span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Há mais de duas décadas oferecendo soluções completas em tratamento de superfícies 
                com qualidade excepcional e atendimento personalizado.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <button
                onClick={scrollToServices}
                className="group bg-fenix-red hover:bg-fenix-orange text-white px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Nossos Serviços
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button
                onClick={handleWhatsApp}
                className="group bg-transparent border-2 border-fenix-orange hover:bg-fenix-orange text-fenix-orange hover:text-white px-8 py-4 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                WhatsApp
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-6">
              <button
                onClick={handleWhatsApp}
                className="w-12 h-12 bg-fenix-red/20 hover:bg-fenix-red text-fenix-red hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Phone size={20} />
              </button>
              <button
                onClick={handleInstagram}
                className="w-12 h-12 bg-fenix-orange/20 hover:bg-fenix-orange text-fenix-orange hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={handleLinkedIn}
                className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <img 
                src="/lovable-uploads/1a7c4173-cb46-44ef-8a5f-b72fb67287e6.png" 
                alt="Metalúrgica Fênix - Logo" 
                className="w-80 h-80 md:w-96 md:h-96 object-contain animate-float drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-fenix-orange rounded-full flex justify-center">
            <div className="w-1 h-3 bg-fenix-orange rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
