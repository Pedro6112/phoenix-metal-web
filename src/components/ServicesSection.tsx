
import React from 'react';
import { Zap, Droplets, Shield, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-fenix-orange" />,
      title: "Pintura Eletrostática à Pó",
      description: "Acabamento de alta qualidade com resistência superior à corrosão e durabilidade excepcional.",
      features: [
        "Resistência à corrosão",
        "Acabamento uniforme",
        "Processo ecológico",
        "Alta durabilidade",
        "Diversas cores e texturas"
      ],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    },
    {
      icon: <Droplets className="w-12 h-12 text-fenix-orange" />,
      title: "Jato de Alta Pressão",
      description: "Limpeza profunda e preparação ideal da superfície para garantir máxima aderência da tinta.",
      features: [
        "Remoção completa de ferrugem",
        "Limpeza profunda",
        "Preparação ideal da superfície",
        "Maior aderência da tinta",
        "Processo rápido e eficiente"
      ],
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-fenix-orange" />,
      title: "Proteção Duradoura",
      description: "Tratamento que garante proteção por anos contra intempéries e corrosão."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-fenix-orange" />,
      title: "Acabamento Premium",
      description: "Superfície lisa, uniforme e com brilho profissional em diversas opções."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-fenix-orange" />,
      title: "Qualidade Garantida",
      description: "Processo certificado com materiais de primeira linha e garantia estendida."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('atendimento');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicos" className="py-20 bg-gradient-to-br from-fenix-dark via-fenix-graphite to-fenix-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-6">
            Nossos{' '}
            <span className="text-transparent bg-gradient-to-r from-fenix-red to-fenix-orange bg-clip-text">
              Serviços
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fenix-red to-fenix-orange mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg font-inter max-w-3xl mx-auto leading-relaxed">
            Soluções completas em tratamento de superfícies com tecnologia avançada 
            e acabamento profissional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              style={{ animationDelay: `${0.2 * (index + 1)}s` }}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-fenix-orange/20 rounded-xl">
                      {service.icon}
                    </div>
                    <h3 className="font-playfair font-bold text-2xl md:text-3xl text-white">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 font-inter text-lg leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-fenix-orange flex-shrink-0" />
                        <span className="text-gray-300 font-inter">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="group bg-fenix-red hover:bg-fenix-orange text-white px-8 py-3 rounded-full font-inter font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                  >
                    Solicitar Orçamento
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-fenix-red/20 to-fenix-orange/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="relative w-full h-80 object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-fenix-dark/50 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-playfair font-bold text-3xl text-white text-center mb-12">
            Por que escolher nossos serviços?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group text-center p-8 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/15 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex p-4 bg-fenix-orange/20 rounded-xl mb-6 group-hover:bg-fenix-orange/30 transition-colors duration-300">
                  {benefit.icon}
                </div>
                <h4 className="font-playfair font-semibold text-xl text-white mb-4">
                  {benefit.title}
                </h4>
                <p className="text-gray-300 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
