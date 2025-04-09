import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SistemasComerciais = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      alt: "Hotel com Sistema de Aspiração Central"
    },
    {
      url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
      alt: "Escritório Moderno com Aspiração Central"
    },
    {
      url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
      alt: "Restaurante com Sistema de Aspiração"
    },
    {
      url: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      alt: "Loja Comercial com Sistema de Aspiração"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Muda a cada 5 segundos

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section com Slider */}
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
            <h1 className="text-5xl font-bold mb-6">Sistemas Comerciais</h1>
            <p className="text-xl text-gray-200">
              Soluções profissionais de aspiração central para empresas e estabelecimentos comerciais
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna da Esquerda */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Ideal para</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Hotéis e estabelecimentos hoteleiros</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Escritórios e espaços empresariais</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Restaurantes e cafetarias</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Lojas e centros comerciais</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Clínicas e consultórios</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Vantagens</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Alta potência para uso intensivo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Sistema silencioso e discreto</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Manutenção programada e preventiva</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Redução de custos operacionais</span>
              </li>
            </ul>
          </div>

          {/* Coluna da Direita */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Características</h2>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Sistemas dimensionados para grandes áreas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Múltiplos pontos de aspiração</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Filtração de alta eficiência</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Controlo automático de funcionamento</span>
                </li>
              </ul>
            </div>

            {/* Added commercial system services and benefits based on the client's requirements. */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-12">
              <h2 className="text-2xl font-bold mb-4">Serviços Comerciais</h2>
              <p className="text-gray-600 mb-4">Soluções profissionais para sistemas de aspiração central em estabelecimentos comerciais.</p>
              <ul className="list-disc list-inside text-gray-600">
                <li>Instalação de sistemas comerciais</li>
                <li>Manutenção preventiva e corretiva</li>
                <li>Substituição de componentes</li>
              </ul>
              <p className="text-gray-600 mt-4">Todos os serviços são realizados com materiais originais e garantia do fabricante.</p>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Solicite um orçamento</h3>
              <p className="mb-6">
                Os nossos especialistas estão disponíveis para avaliar as suas necessidades e apresentar a melhor solução para o seu negócio.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contacte-nos
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SistemasComerciais;