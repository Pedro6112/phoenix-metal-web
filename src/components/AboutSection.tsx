
import React from 'react';
import { Award, Users, Clock, MapPin } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-fenix-orange" />,
      title: "Qualidade",
      description: "Excelência em cada projeto, com acabamento impecável e durabilidade garantida."
    },
    {
      icon: <Users className="w-8 h-8 text-fenix-orange" />,
      title: "Tradição Familiar",
      description: "Empresa familiar com valores sólidos e atendimento próximo ao cliente."
    },
    {
      icon: <Clock className="w-8 h-8 text-fenix-orange" />,
      title: "Experiência",
      description: "Mais de 20 anos de expertise em tratamento de superfícies metálicas."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-fenix-dark mb-6">
            Sobre a{' '}
            <span className="text-transparent bg-gradient-to-r from-fenix-red to-fenix-orange bg-clip-text">
              Metalúrgica Fênix
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fenix-red to-fenix-orange mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto leading-relaxed">
            Uma empresa familiar construída sobre pilares sólidos de qualidade, 
            tradição e compromisso com a excelência.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-fenix-dark mb-6">
              Nossa História
            </h3>
            
            <div className="space-y-6 text-gray-700 font-inter text-lg leading-relaxed">
              <p>
                A <strong className="text-fenix-red">Metalúrgica Fênix</strong> nasceu do sonho de uma família 
                apaixonada por metalurgia e comprometida com a qualidade. Há mais de duas décadas, 
                iniciamos nossa jornada com o objetivo de oferecer soluções completas em 
                tratamento de superfícies metálicas.
              </p>
              
              <p>
                Nossa empresa familiar é construída sobre valores fundamentais: 
                <strong className="text-fenix-orange"> tradição, confiança, qualidade</strong> e 
                um atendimento próximo e personalizado a cada cliente. Acreditamos que cada 
                projeto é único e merece nossa dedicação total.
              </p>
              
              <p>
                Especializados em <strong className="text-fenix-red">pintura eletrostática à pó</strong> e 
                <strong className="text-fenix-orange"> jato de alta pressão</strong>, oferecemos 
                soluções técnicas avançadas que garantem durabilidade, resistência e 
                acabamento excepcional para seus projetos.
              </p>
            </div>

            {/* Location */}
            <div className="mt-8 p-6 bg-white rounded-xl shadow-lg border-l-4 border-fenix-orange">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-fenix-orange mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-inter font-semibold text-fenix-dark mb-2">Nossa Localização</h4>
                  <p className="text-gray-600 font-inter">
                    Rua Maria Jorge dos Santos, 516<br />
                    Estância Jockey Club<br />
                    São José do Rio Preto – SP
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-fenix-dark mb-8 text-center lg:text-left">
              Nossos Valores
            </h3>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-transparent hover:border-fenix-orange"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-fenix-orange/10 rounded-lg group-hover:bg-fenix-orange/20 transition-colors duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-xl text-fenix-dark mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 font-inter leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-fenix-red to-fenix-orange rounded-xl text-white">
                <div className="font-playfair font-bold text-3xl mb-2">20+</div>
                <div className="font-inter text-sm opacity-90">Anos de Experiência</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-fenix-orange to-fenix-red rounded-xl text-white">
                <div className="font-playfair font-bold text-3xl mb-2">1000+</div>
                <div className="font-inter text-sm opacity-90">Projetos Realizados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
