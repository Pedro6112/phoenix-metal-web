
import React from 'react';
import { ArrowRight, Phone, Instagram } from 'lucide-react';

const HeroSection = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/5517988163650', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/metalurgicafenix', '_blank');
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
              
              <p className="text-gray-300 text-lg md:text-xl font-inter leading-relaxed max-w-2xl">
                Há mais de duas décadas oferecendo soluções completas em tratamento de superfícies 
                com qualidade excepcional e atendimento personalizado.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
