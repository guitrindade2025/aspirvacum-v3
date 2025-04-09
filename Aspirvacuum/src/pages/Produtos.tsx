import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Produtos = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-4xl font-bold mb-4">Produtos Aspirvacum</h1>
          <p className="text-xl text-blue-100">
            Mais de 15 anos de excelência em sistemas de aspiração central
          </p>
        </div>
      </div>

      {/* Resto do conteúdo da página de produtos */}
    </motion.div>
  );
};

export default Produtos; 