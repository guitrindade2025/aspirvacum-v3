import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaFilter, FaSearch, FaStar } from 'react-icons/fa';

const Store = () => {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'todos',
    'centrais',
    'acessórios',
    'consumíveis',
    'kits',
    'tomadas',
    'glutões'
  ];

  const products = [
    // Centrais
    {
      id: 1,
      name: "Central de Aspiração BEAM 385",
      price: "1.299,00",
      category: "centrais",
      rating: 5,
      image: "https://placehold.co/400x400?text=BEAM+385",
      description: "Ideal para casas até 350m²"
    },
    {
      id: 2,
      name: "Central de Aspiração BEAM 398",
      price: "1.599,00",
      category: "centrais",
      rating: 5,
      image: "https://placehold.co/400x400?text=BEAM+398",
      description: "Ideal para casas até 450m²"
    },
    // Tomadas
    {
      id: 3,
      name: "Tomada de Aspiração BEAM Quadrada",
      price: "49,90",
      category: "tomadas",
      rating: 5,
      image: "https://placehold.co/400x400?text=Tomada+Quadrada",
      description: "Tomada retangular branca"
    },
    {
      id: 4,
      name: "Tomada de Aspiração BEAM Redonda",
      price: "45,90",
      category: "tomadas",
      rating: 4,
      image: "https://placehold.co/400x400?text=Tomada+Redonda",
      description: "Tomada redonda branca"
    },
    // Kits
    {
      id: 5,
      name: "Kit Básico de Limpeza",
      price: "299,00",
      category: "kits",
      rating: 4,
      image: "https://placehold.co/400x400?text=Kit+Básico",
      description: "Kit inicial com mangueira e acessórios essenciais"
    },
    {
      id: 6,
      name: "Kit Premium de Limpeza",
      price: "399,00",
      category: "kits",
      rating: 5,
      image: "https://placehold.co/400x400?text=Kit+Premium",
      description: "Kit completo com todos os acessórios"
    },
    // Acessórios
    {
      id: 7,
      name: "Escova Combo Multisuperfícies",
      price: "89,90",
      category: "acessórios",
      rating: 5,
      image: "https://placehold.co/400x400?text=Escova+Combo",
      description: "Para tapetes e pisos duros"
    },
    {
      id: 8,
      name: "Escova Turbo",
      price: "129,90",
      category: "acessórios",
      rating: 4,
      image: "https://placehold.co/400x400?text=Escova+Turbo",
      description: "Ideal para tapetes e carpetes"
    },
    // Consumíveis
    {
      id: 9,
      name: "Saco para Central de Aspiração",
      price: "19,90",
      category: "consumíveis",
      rating: 4,
      image: "https://placehold.co/400x400?text=Saco+Descartavel",
      description: "Pacote com 3 unidades"
    },
    {
      id: 10,
      name: "Filtro HEPA",
      price: "49,90",
      category: "consumíveis",
      rating: 5,
      image: "https://placehold.co/400x400?text=Filtro+HEPA",
      description: "Filtro de alta eficiência"
    },
    // Glutões
    {
      id: 11,
      name: "Glutão Automático VacPan",
      price: "129,90",
      category: "glutões",
      rating: 5,
      image: "https://placehold.co/400x400?text=Glutão+VacPan",
      description: "Recolhe resíduos com o pé"
    },
  ];

  const filteredProducts = products
    // Primeiro filtra por categoria
    .filter(product => activeCategory === 'todos' || product.category === activeCategory)
    // Depois filtra pela pesquisa
    .filter(product => {
      const search = searchTerm.toLowerCase().trim();
      if (!search) return true;
      
      return (
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search) ||
        product.category.toLowerCase().includes(search)
      );
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">A Nossa Loja</h1>
            <p className="text-xl text-blue-100">
              Encontre os melhores produtos para o seu sistema de aspiração central
            </p>
          </div>
          
          {/* Barra de Pesquisa */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Encontrar produtos..."
                className="w-full px-4 py-3 pl-12 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Resultados da Pesquisa */}
      {searchTerm && (
        <div className="max-w-7xl mx-auto px-4 pt-6">
          <p className="text-gray-600">
            {filteredProducts.length === 0 
              ? 'Nenhum produto encontrado' 
              : `${filteredProducts.length} produto(s) encontrado(s)`
            }
          </p>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Filtros e Categorias */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg text-gray-600 hover:bg-gray-100">
            <FaFilter />
            Filtrar
          </button>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:-translate-y-1"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-4 h-4 ${
                        i < product.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    €{product.price}
                  </span>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <FaShoppingCart className="w-4 h-4" />
                    Adicionar
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Paginação */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center gap-2">
            <button className="px-4 py-2 bg-white rounded-lg text-gray-600 hover:bg-gray-100">
              Anterior
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100">2</button>
            <button className="px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100">3</button>
            <button className="px-4 py-2 bg-white rounded-lg text-gray-600 hover:bg-gray-100">
              Seguinte
            </button>
          </nav>
        </div>
      </div>
    </motion.div>
  );
};

export default Store; 