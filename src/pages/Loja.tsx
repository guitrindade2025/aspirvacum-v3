import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SearchIcon } from '@heroicons/react/solid'; // Adicionei a importação correta para SearchIcon.

const Loja = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-4xl font-bold mb-4">A Nossa Loja</h1>
          <p className="text-xl text-blue-100">
            Encontre os melhores produtos para o seu sistema de aspiração central
          </p>
        </div>
      </div>

      {/* Resto do conteúdo da loja */}
      <Link
        to="/loja"
        className="inline-block bg-aspirvacuum-blue hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded"
      >
        VER TODOS OS PRODUTOS
      </Link>

      <div className="relative">
        <input
          type="text"
          className="w-full px-4 py-2 pl-10 rounded-lg border border-gray-300"
          placeholder="Encontrar produtos..."
        />
        <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
      </div>
    </motion.div>
  );
};

export default Loja;