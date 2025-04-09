import { motion } from 'framer-motion';
import React, { useState } from 'react';

const Instalacao = () => {
  const [formStatus, setFormStatus] = useState({ loading: false, submitted: false });

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
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-4xl font-bold mb-4">Instalação</h1>
          <p className="text-xl text-blue-100">
            Processo de instalação profissional e garantido
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Etapas da Instalação</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">1. Avaliação Técnica</h3>
                <p>Visita técnica para análise do espaço e planeamento da instalação</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">2. Projeto</h3>
                <p>Desenvolvimento do projeto com posicionamento das tomadas e tubagem</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">3. Instalação</h3>
                <p>Execução da instalação por equipa especializada</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-blue-600 mb-2">4. Testes</h3>
                <p>Verificação completa do sistema e teste de funcionamento</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <h2 className="text-3xl font-bold mb-6">Solicite um Orçamento</h2>
              <p className="mb-6 text-blue-100">
                Envie-nos os detalhes do seu projeto para elaborarmos um orçamento personalizado.
              </p>
            </div>

            <div className="p-8">
              <form onSubmit={handleOrcamentoSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Endereço de email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telemóvel
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Descreva o seu projeto
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {formStatus.loading ? 'A enviar...' : 'Solicitar Orçamento'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Serviços de Instalação</h2>
          <p className="text-gray-600 mb-4">Realizamos a instalação de sistemas de aspiração central e aquecimento central.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Respeito às normas dos fabricantes</li>
            <li>Garantia de maior eficácia e durabilidade</li>
            <li>Otimização do desempenho do sistema</li>
          </ul>
          <p className="text-gray-600 mt-4">Todos os materiais aplicados são originais e possuem garantia do fabricante.</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-3">Garantias</h3>
          <ul className="space-y-2">
            <li>✓ Instalação certificada</li>
            <li>✓ Garantia de 2 anos</li>
            <li>✓ Suporte técnico</li>
            <li>✓ Manual de utilização</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Instalacao;