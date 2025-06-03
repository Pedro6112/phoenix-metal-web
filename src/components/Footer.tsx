
import React from 'react';
import { MapPin, Phone, Mail, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInstagram = () => {
    window.open('https://instagram.com/metalurgicafenix', '_blank');
  };

  const handleWhatsApp = (phone: string) => {
    const phoneNumber = phone.replace(/\D/g, '');
    window.open(`https://wa.me/55${phoneNumber}`, '_blank');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-fenix-dark via-fenix-graphite to-fenix-dark text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src="/lovable-uploads/0d899a41-bbd6-40ae-b1fc-945ecac5eac5.png" 
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
                onClick={() => handleWhatsApp('17988163650')}
                className="w-12 h-12 bg-green-500/20 hover:bg-green-500 text-green-400 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                title="WhatsApp Alessandro"
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
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-fenix-orange flex-shrink-0" />
                <div className="text-gray-300 font-inter text-sm">
                  <p>Alessandro: (17) 98816-3650</p>
                  <p>Vanessa: (17) 98816-3649</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-fenix-orange flex-shrink-0" />
                <a 
                  href="mailto:fenixmetal_riopreto@hotmail.com"
                  className="text-gray-300 hover:text-fenix-orange transition-colors duration-300 font-inter text-sm"
                >
                  fenixmetal_riopreto@hotmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 font-inter text-sm text-center md:text-left">
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
