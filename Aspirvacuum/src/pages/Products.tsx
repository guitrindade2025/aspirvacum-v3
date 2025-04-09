import React from 'react';
import { motion } from 'framer-motion';

const Products = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Produtos Aspirvacuum</h1>
        <p className="text-lg text-gray-600">
          Conheça nossa linha completa de produtos na nossa loja online.
        </p>
        <div className="mt-8">
          <a 
            href="/loja" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Visitar Loja
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Products;