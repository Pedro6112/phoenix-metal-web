
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-fenix-orange" />,
      title: "Telefone",
      details: [
        "(17) 98816-3649"
      ]
    },
    {
      icon: <Mail className="w-6 h-6 text-fenix-orange" />,
      title: "E-mail",
      details: ["contatometalurgicafenix@gmail.com"]
    },
    {
      icon: <MapPin className="w-6 h-6 text-fenix-orange" />,
      title: "Endereço",
      details: [
        "Rua Maria Jorge dos Santos, 516",
        "Estância Jockey Club",
        "São José do Rio Preto – SP",
        "CEP: 15081-519"
      ]
    },
    {
      icon: <Clock className="w-6 h-6 text-fenix-orange" />,
      title: "Horário de Funcionamento",
      details: [
        "Segunda à Sexta: 8h às 17h"
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve.",
        duration: 5000,
      });

      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato por telefone.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = (phone: string) => {
    const phoneNumber = phone.replace(/\D/g, '');
    const message = formData.name ? 
      `Olá! Sou ${formData.name} e gostaria de saber mais sobre os serviços da Metalúrgica Fênix.` :
      'Olá! Gostaria de saber mais sobre os serviços da Metalúrgica Fênix.';
    
    window.open(`https://wa.me/55${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="atendimento" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-fenix-dark mb-6">
            Entre em{' '}
            <span className="text-transparent bg-gradient-to-r from-fenix-red to-fenix-orange bg-clip-text">
              Contato
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fenix-red to-fenix-orange mx-auto mb-8"></div>
          <p className="text-gray-600 text-lg font-inter max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para atender você! Entre em contato conosco.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-fenix-dark mb-8">
              Nosso Atendimento
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-transparent hover:border-fenix-orange"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-fenix-orange/10 rounded-lg group-hover:bg-fenix-orange/20 transition-colors duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-inter font-semibold text-lg text-fenix-dark mb-2">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-gray-600 font-inter">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <div className="space-y-4">
              <h4 className="font-playfair font-semibold text-xl text-fenix-dark mb-4">
                Fale conosco no WhatsApp:
              </h4>
              <button
                onClick={() => handleWhatsApp('17988163649')}
                className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-xl font-inter font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl w-full"
              >
                <Phone size={20} />
                Entrar em contato
              </button>
            </div>
          </div>

        </div>

        {/* Map Section */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="font-playfair font-semibold text-2xl md:text-3xl text-fenix-dark text-center mb-8">
            Nossa Localização
          </h3>
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <div className="aspect-video w-full rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59652.235266462885!2d-49.39106992260531!3d-20.86137834187854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bc4d8e294f6629%3A0xd0829e898f728480!2sMetalurgia%20f%C3%AAnix!5e0!3m2!1spt-BR!2sbr!4v1753881558623!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Metalúrgica Fênix"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
