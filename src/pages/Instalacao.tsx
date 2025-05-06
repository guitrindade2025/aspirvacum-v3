import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaTools, FaHome, FaArrowRight } from 'react-icons/fa';

const Instalacao = () => {
  const [formStatus, setFormStatus] = useState({ loading: false, submitted: false });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "/Img AVAC/ah6.jpg",
      alt: "Instalação de Aspiração Central"
    },
    {
      url: "/Img AVAC/ah5.png",
      alt: "Serviço de Instalação Profissional"
    },
    {
      url: "/Img AVAC/ah4.png",
      alt: "Tubagem de Aspiração Central"
    },
    {
      url: "/fundohome.jpg", // Substituído 30.JPG por uma imagem que existe na pasta pública
      alt: "Sistema de Aspiração Central"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleOrcamentoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, submitted: false });
    
    // Simula o envio
    setTimeout(() => {
      setFormStatus({ loading: false, submitted: true });
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section com Carrossel de Imagens */}
      <div className="relative h-[60vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Instalação de Aspiração Central</h1>
            <p className="text-xl text-gray-200">
              Serviço completo de instalação profissional realizado por equipas certificadas e especializadas
            </p>
          </div>
        </div>
      </div>

      {/* Benefícios da Instalação Profissional */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Porque Escolher a Nossa Instalação Profissional</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-aspirvacum-blue/10 text-aspirvacum-teal mb-4">
                <FaTools size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Profissionais Experientes</h3>
              <p className="text-gray-600">Instalação realizada por técnicos especializados com vários anos de experiência em sistemas de aspiração central.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-aspirvacum-blue/10 text-aspirvacum-teal mb-4">
                <FaHome size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptado ao Seu Espaço</h3>
              <p className="text-gray-600">Projeto personalizado que considera a arquitetura do seu imóvel para uma instalação eficiente e discreta.</p>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-aspirvacum-blue/10 text-aspirvacum-teal mb-4">
                <FaCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Garantia de Qualidade</h3>
              <p className="text-gray-600">Todo o processo de instalação é certificado e oferece garantia de 2 anos contra defeitos de instalação.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-start">
          <div>
            <h2 className="text-3xl font-bold mb-8">Etapas da Instalação de Aspiração Central</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-aspirvacum-teal">
                <h3 className="text-lg font-semibold text-aspirvacum-teal mb-2">1. Avaliação Técnica e Consultoria</h3>
                <p className="text-gray-600">Os nossos técnicos visitam o seu espaço para analisar a estrutura, necessidades específicas e determinar o melhor posicionamento para as tomadas de aspiração. Esta visita permite-nos desenvolver um plano detalhado e personalizado.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-aspirvacum-teal">
                <h3 className="text-lg font-semibold text-aspirvacum-teal mb-2">2. Projeto Detalhado</h3>
                <p className="text-gray-600">Desenvolvemos um projeto técnico completo com o posicionamento estratégico das tomadas e do traçado da tubagem, assegurando a máxima eficiência do sistema de aspiração central.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-aspirvacum-teal">
                <h3 className="text-lg font-semibold text-aspirvacum-teal mb-2">3. Instalação Profissional</h3>
                <p className="text-gray-600">A nossa equipa especializada realiza a instalação completa do sistema de aspiração central, incluindo a unidade central, rede de tubagem embutida nas paredes, tomadas de aspiração e todos os acessórios necessários.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-aspirvacum-teal">
                <h3 className="text-lg font-semibold text-aspirvacum-teal mb-2">4. Testes e Formação</h3>
                <p className="text-gray-600">Após a instalação, realizamos testes rigorosos em todas as tomadas e componentes, seguidos de uma demonstração detalhada do funcionamento do sistema e recomendações de manutenção.</p>
              </div>
            </div>

            <div className="bg-aspirvacum-blue/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-semibold mb-4">A Nossa Garantia</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Instalação certificada seguindo normas europeias</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Garantia de 2 anos sobre todo o trabalho realizado</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Suporte técnico pós-instalação</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Manual detalhado de utilização e manutenção</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Materiais e componentes de alta qualidade com garantia do fabricante</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
            <div className="p-8 bg-gradient-to-r from-aspirvacum-teal to-[#0a4a61] text-white">
              <h2 className="text-3xl font-bold mb-6">Solicite um Orçamento Gratuito</h2>
              <p className="mb-6 text-aspirvacum-blue">
                Envie-nos os detalhes do seu projeto para elaborarmos um orçamento personalizado para a instalação de aspiração central.
              </p>
            </div>

            <div className="p-8">
              {formStatus.submitted ? (
                <div className="text-center p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                    <FaCheck size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Pedido Recebido!</h3>
                  <p className="text-gray-600 mb-4">Obrigado pelo seu contacto. Entraremos em contacto consigo em breve.</p>
                  <button 
                    onClick={() => setFormStatus({loading: false, submitted: false})}
                    className="text-aspirvacum-teal font-medium hover:text-aspirvacum-blue"
                  >
                    Enviar novo pedido
                  </button>
                </div>
              ) : (
                <form onSubmit={handleOrcamentoSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aspirvacum-teal focus:border-aspirvacum-teal"
                      placeholder="Insira o seu nome completo"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aspirvacum-teal focus:border-aspirvacum-teal"
                      placeholder="seu.email@exemplo.pt"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Telemóvel
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aspirvacum-teal focus:border-aspirvacum-teal"
                      placeholder="912 345 678"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Localidade
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aspirvacum-teal focus:border-aspirvacum-teal"
                      placeholder="Lisboa, Porto, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Detalhes do projeto
                    </label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-aspirvacum-teal focus:border-aspirvacum-teal"
                      placeholder="Descreva o espaço onde pretende instalar o sistema de aspiração central (tipo de imóvel, área aproximada, etc.)"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full bg-aspirvacum-teal text-white py-3 px-6 rounded-lg hover:bg-[#0a4a61] transition-colors flex items-center justify-center"
                  >
                    {formStatus.loading ? 'A enviar...' : 'Solicitar Orçamento Gratuito'}
                    {!formStatus.loading && <FaArrowRight className="ml-2" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Serviços de Instalação */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Serviços Especializados de Instalação</h2>
          <p className="text-gray-600 mb-6 text-lg">Na Aspirvacum, somos especialistas na instalação de sistemas de aspiração central para residências, empresas e espaços comerciais. O nosso serviço de instalação inclui:</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-aspirvacum-teal mb-3">Instalação Completa</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Central de aspiração adequada às dimensões do espaço</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Rede de tubagem PVC de alta qualidade e resistência</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Tomadas de aspiração embutidas nas paredes</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Kit de limpeza com mangueira e acessórios</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-aspirvacum-teal mb-3">Diferenciais Técnicos</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Respeito rigoroso às normas técnicas e dos fabricantes</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Instalação que garante maior eficácia e durabilidade</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Otimização do desempenho e eficiência energética</span>
                </li>
                <li className="flex items-start">
                  <FaCheck className="text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Execução limpa e com mínimo impacto na estrutura</span>
                </li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-700 font-medium">Todos os materiais aplicados são originais de fabricantes reconhecidos e possuem garantia contra defeitos de fabrico. A nossa experiência garante uma instalação perfeita do seu sistema de aspiração central.</p>
        </div>

        {/* FAQ */}
        <div className="bg-gray-50 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold mb-6">Perguntas Frequentes</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Quanto tempo demora a instalação de um sistema de aspiração central?</h3>
              <p className="text-gray-600">Dependendo do tamanho do imóvel, uma instalação completa pode demorar entre 1 a 3 dias. Em construções novas ou remodelações, integramos o nosso trabalho com o cronograma geral da obra.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">É possível instalar aspiração central em casas já construídas?</h3>
              <p className="text-gray-600">Sim, temos soluções específicas para instalação em imóveis já construídos, com técnicas que minimizam o impacto na estrutura e acabamentos existentes.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Qual a manutenção necessária após a instalação?</h3>
              <p className="text-gray-600">Os sistemas de aspiração central requerem manutenção mínima, geralmente incluindo apenas a limpeza ou substituição periódica de filtros e o esvaziamento do recipiente de poeiras. Oferecemos também serviços de manutenção preventiva anual.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-2">Se um tubo de aspiração central partir, como é feita a reparação?</h3>
              <p className="text-gray-600">Utilizamos equipamentos especializados para localizar com precisão onde está o tubo partido, permitindo reparações focadas e minimamente invasivas. Os nossos técnicos são especialistas em conserto de tubos de aspiração central.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-aspirvacum-teal to-[#0a4a61] rounded-xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para melhorar a qualidade do ar na sua casa?</h2>
          <p className="text-xl text-aspirvacum-blue mb-8 max-w-3xl mx-auto">
            Entre em contacto connosco hoje mesmo e descubra como a instalação de aspiração central pode transformar a sua experiência de limpeza.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contactos" className="bg-white text-aspirvacum-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
              Contacte-nos
            </Link>
            <a href="tel:+351917601184" className="bg-aspirvacum-blue/80 text-white px-8 py-3 rounded-lg font-bold hover:bg-aspirvacum-blue transition-colors">
              917 601 184
            </a>
          </div>
          <p className="text-sm text-aspirvacum-blue mt-4">* chamada para a rede móvel nacional</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Instalacao;