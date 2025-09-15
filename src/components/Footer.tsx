import React from 'react';
import { MapPin, Phone, Mail, Instagram, ArrowUp, Facebook } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/fenix_metal/?utm_source=ig_web_button_share_sheet', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/company/metalurgica-fenix-rp/', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/share/1AGGp7S6cd/', '_blank');
  };

  const handleWhatsApp = (phone: string) => {
    const phoneNumber = phone.replace(/\D/g, '');
    window.open(`https://wa.me/55${phoneNumber}`, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-fenix-dark via-fenix-graphite to-fenix-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-8 lg:px-16 xl:px-24 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/lovable-uploads/1a7c4173-cb46-44ef-8a5f-b72fb67287e6.png" 
                alt="Metalúrgica Fênix" 
                className="h-16 w-auto"
              />
              <div>
                <h3 className="font-playfair font-bold text-2xl text-white">
                  Metalúrgica Fênix
                </h3>
                <p className="text-fenix-orange font-inter">
                  Excelência em Metalurgia
                </p>
              </div>
            </div>
            
            <p className="text-gray-300 font-inter leading-relaxed mb-6 max-w-md">
              Há mais de 20 anos oferecendo soluções completas em pintura eletrostática 
              e jato de alta pressão com qualidade excepcional e atendimento personalizado.
            </p>

            {/* Social Media */}
            <div className="flex gap-4">
              <button
                onClick={() => handleWhatsApp('17988163649')}
                className="w-12 h-12 bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="WhatsApp"
              >
                <Phone size={20} />
              </button>
              <button
                onClick={handleInstagram}
                className="w-12 h-12 bg-fenix-orange/20 hover:bg-fenix-orange text-fenix-orange hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="Instagram"
              >
                <Instagram size={20} />
              </button>
              <button
                onClick={handleFacebook}
                className="w-12 h-12 bg-blue-500/20 hover:bg-blue-500 text-blue-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="Facebook"
              >
                <Facebook size={20} />
              </button>
              <button
                onClick={handleLinkedIn}
                className="w-12 h-12 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-semibold text-xl text-white mb-6">
              Navegação
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Início', id: 'inicio' },
                { label: 'Sobre Nós', id: 'sobre' },
                { label: 'Serviços', id: 'servicos' },
                { label: 'Contato', id: 'atendimento' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-fenix-orange transition-colors duration-300 font-inter"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-semibold text-xl text-white mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-fenix-orange mt-1 flex-shrink-0" />
                <div className="text-gray-300 font-inter text-sm">
                  <p>Rua Maria Jorge dos Santos, 516</p>
                  <p>Estância Jockey Club</p>
                  <p>São José do Rio Preto – SP</p>
                  <p>CEP: 15081-519</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-fenix-orange flex-shrink-0" />
                <div className="text-gray-300 font-inter text-sm">
                  <p>(17) 98816-3649</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-fenix-orange flex-shrink-0" />
                <a 
                  href="mailto:contatometalurgicafenix@gmail.com"
                  className="text-gray-300 hover:text-fenix-orange transition-colors duration-300 font-inter text-sm"
                >
                  contatometalurgicafenix@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-8 lg:px-16 xl:px-24 py-6">
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <div className="text-gray-400 font-inter text-sm text-center">
              <p>© {currentYear} Metalúrgica Fênix. Todos os direitos reservados.</p>
              <p className="mt-1">
                Desenvolvido com 💙 para oferecer a melhor experiência em metalurgia.
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="group bg-fenix-red/20 hover:bg-fenix-red text-fenix-red hover:text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              title="Voltar ao topo"
            >
              <ArrowUp size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
