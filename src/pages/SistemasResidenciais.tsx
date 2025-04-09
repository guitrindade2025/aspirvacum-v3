import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaBed, FaCouch, FaUtensils, FaCar, FaCalculator } from 'react-icons/fa';

const SistemasResidenciais = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [numQuartos, setNumQuartos] = useState(2);
  const [area, setArea] = useState(100);
  
  const images = [
    {
      url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
      alt: "Casa Moderna com Sistema de Aspiração Central"
    },
    {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      alt: "Interior Residencial com Aspiração Central"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
      alt: "Apartamento com Sistema de Aspiração"
    },
    {
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      alt: "Moradia com Sistema de Aspiração"
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

  const calcularPontosAspiracao = (quartos: number, areaTotal: number) => {
    const pontosPorQuarto = quartos;
    const pontosPorArea = Math.ceil(areaTotal / 50); // 1 ponto a cada 50m²
    return Math.max(pontosPorQuarto + 2, pontosPorArea); // mínimo de pontos + sala e cozinha
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
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
            <h1 className="text-5xl font-bold mb-6">Sistemas Residenciais</h1>
            <p className="text-xl text-gray-200">
              Soluções de aspiração central para o conforto do seu lar
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Coluna da Esquerda */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Ideal para</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Moradias unifamiliares</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Apartamentos</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Condomínios residenciais</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Casas de férias</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Residências de luxo</span>
              </li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Vantagens</h2>
            <ul className="space-y-4 text-lg">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Maior poder de sucção que aspiradores convencionais</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Sistema silencioso - motor instalado em área técnica</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Ar mais limpo - expelido para o exterior</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Valorização do imóvel</span>
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
                  <span>Instalação discreta e integrada</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Tomadas estrategicamente posicionadas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Manutenção simples e prática</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Sistema de filtragem avançado</span>
                </li>
              </ul>
            </div>

            <div className="bg-blue-600 text-white rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Solicite um orçamento</h3>
              <p className="mb-6">
                Os nossos especialistas estão disponíveis para avaliar as suas necessidades e apresentar a melhor solução para a sua casa.
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contacte-nos
              </button>
            </div>
          </div>
        </div>

        {/* Nova seção de Ambientes */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Ambientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                <FaBed className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="font-semibold">Quartos</h3>
              <p className="text-sm text-gray-600">Limpeza silenciosa</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                <FaCouch className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="font-semibold">Sala</h3>
              <p className="text-sm text-gray-600">Maior conforto</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                <FaUtensils className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="font-semibold">Cozinha</h3>
              <p className="text-sm text-gray-600">Praticidade diária</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                <FaCar className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="font-semibold">Garagem</h3>
              <p className="text-sm text-gray-600">Limpeza profunda</p>
            </div>
          </div>
        </div>

        {/* Calculadora de Pontos */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="flex items-center mb-6">
            <FaCalculator className="text-blue-600 w-8 h-8 mr-4" />
            <h2 className="text-2xl font-bold">Calculadora de Pontos de Aspiração</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Número de Quartos
              </label>
              <input
                type="number"
                min="1"
                value={numQuartos}
                onChange={(e) => setNumQuartos(parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Área Total (m²)
              </label>
              <input
                type="number"
                min="50"
                step="10"
                value={area}
                onChange={(e) => setArea(parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <p className="text-lg">
              Pontos de aspiração recomendados:{" "}
              <span className="font-bold text-blue-600">
                {calcularPontosAspiracao(numQuartos, area)}
              </span>
            </p>
          </div>
        </div>

        {/* Nova seção de Serviços Residenciais */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Serviços Residenciais</h2>
          <p className="text-gray-600 mb-4">Oferecemos soluções completas para sistemas de aspiração central em residências, garantindo conforto e eficiência.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Desentupimentos</li>
            <li>Substituição de filtros</li>
            <li>Substituição de motores</li>
            <li>Substituição de placas eletrônicas</li>
          </ul>
          <p className="text-gray-600 mt-4">Todos os materiais aplicados são originais e possuem garantia do fabricante.</p>
        </div>

        {/* Diagrama de Instalação */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Como Funciona</h2>
          <div className="relative">
            <img
              src="/FOTOS/diagrama-instalacao.png"
              alt="Diagrama de Instalação"
              className="w-full rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold mb-2">Sistema Completo</h3>
              <p>Instalação profissional e discreta em toda a casa</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SistemasResidenciais;