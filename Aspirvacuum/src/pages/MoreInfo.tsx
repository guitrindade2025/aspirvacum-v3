import React from 'react';
import { Link } from 'react-router-dom';

const MoreInfo = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4 text-center">Mais Informações</h1>
      <p className="mb-8 text-center text-lg text-gray-700">Descubra mais sobre a Aspirvacum e como estamos a liderar o futuro da aspiração central com inovação e qualidade.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-aspirvacuum-dark">Os Nossos Produtos</h2>
          <p className="mb-4 text-gray-600">Oferecemos uma ampla gama de produtos de aspiração central, projetados para atender às suas necessidades específicas.</p>
          <Link to="/produtos-aspirvacuum" className="text-aspirvacuum-blue hover:underline">Ver Produtos</Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-aspirvacuum-dark">Serviços</h2>
          <p className="mb-4 text-gray-600">O nosso compromisso é fornecer serviços de alta qualidade, garantindo a satisfação total do cliente.</p>
          <Link to="/contatos" className="text-aspirvacuum-blue hover:underline">Entre em Contato</Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-aspirvacuum-dark">Inovações</h2>
          <p className="mb-4 text-gray-600">Estamos constantemente a inovar para trazer as melhores soluções de aspiração central para o mercado.</p>
          <Link to="/a-empresa" className="text-aspirvacuum-blue hover:underline">Saiba Mais</Link>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-2xl font-bold mb-2 text-aspirvacuum-dark">Testemunhos</h2>
          <p className="mb-4 text-gray-600">Veja o que os nossos clientes têm a dizer sobre nós e como transformamos as suas experiências.</p>
          <Link to="/contatos" className="text-aspirvacuum-blue hover:underline">Leia Mais</Link>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;