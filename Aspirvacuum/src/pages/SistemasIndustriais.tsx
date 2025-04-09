import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SistemasIndustriais = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1",
      alt: "Ambiente Industrial Moderno"
    },
    {
      url: "https://images.unsplash.com/photo-1581093458791-9d42e3c7e935",
      alt: "Fábrica com Sistema Industrial"
    },
    {
      url: "https://images.unsplash.com/photo-1565939174309-081a7c321b1f",
      alt: "Equipamento Industrial de Alta Capacidade"
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      alt: "Centro Industrial Automatizado"
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
            <h1 className="text-5xl font-bold mb-6">Sistemas Industriais</h1>
            <p className="text-xl text-gray-200">
              Soluções robustas de aspiração central para ambientes industriais
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
                <span>Fábricas e unidades de produção</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Armazéns e centros logísticos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Indústrias pesadas</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Centros de processamento</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Instalações de grande dimensão</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Vantagens</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Potência máxima para uso intensivo</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Sistema robusto e durável</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Manutenção programada e preventiva</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Aumento da produtividade</span>
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
                  <span>Sistemas de alta capacidade</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Filtração industrial avançada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Monitorização em tempo real</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Automação e controlo integrado</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Solicite um orçamento</h3>
              <p className="mb-6">
                Os nossos especialistas estão disponíveis para avaliar as suas necessidades e desenvolver uma solução personalizada para a sua indústria.
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

export default SistemasIndustriais; 