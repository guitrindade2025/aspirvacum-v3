import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaIndustry } from 'react-icons/fa';

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      {/* Hero Section */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Aspiração Central</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Descubra o poder e a conveniência de um sistema de aspiração central que transformará a maneira como você limpa sua casa ou empresa.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Por que escolher Aspiração Central?</h2>
            <p className="text-xl text-gray-600">Benefícios que fazem a diferença no seu dia a dia</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mais Silencioso",
                description: "Sistema silencioso que não perturba o ambiente, permitindo limpeza a qualquer hora.",
                icon: "🔇"
              },
              {
                title: "Maior Potência",
                description: "Potência superior aos aspiradores convencionais, garantindo limpeza mais eficiente.",
                icon: "⚡"
              },
              {
                title: "Ar mais Limpo",
                description: "100% do ar sugado é expelido para fora da residência, melhorando a qualidade do ar interno.",
                icon: "🌬️"
              },
              {
                title: "Praticidade",
                description: "Sem necessidade de carregar equipamentos pesados, apenas a mangueira leve.",
                icon: "✨"
              },
              {
                title: "Durabilidade",
                description: "Sistemas projetados para durar décadas com manutenção adequada.",
                icon: "⏳"
              },
              {
                title: "Valorização",
                description: "Agregue valor ao seu imóvel com um sistema moderno e sofisticado.",
                icon: "📈"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nossas Soluções</h2>
            <p className="text-xl text-gray-600">Sistemas personalizados para cada necessidade</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-blue-600 flex items-center justify-center text-white">
                <FaHome className="w-20 h-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Residencial</h3>
                <p className="text-gray-600 mb-4">
                  Soluções ideais para casas e apartamentos, proporcionando conforto e praticidade no dia a dia.
                </p>
                <Link
                  to="/sistemas-residenciais"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Saiba mais →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-blue-600 flex items-center justify-center text-white">
                <FaBuilding className="w-20 h-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Comercial</h3>
                <p className="text-gray-600 mb-4">
                  Sistemas robustos para estabelecimentos comerciais, garantindo limpeza eficiente e ambiente saudável.
                </p>
                <Link
                  to="/sistemas-comerciais"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Saiba mais →
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 bg-blue-600 flex items-center justify-center text-white">
                <FaIndustry className="w-20 h-20" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">Industrial</h3>
                <p className="text-gray-600 mb-4">
                  Soluções de alta potência para ambientes industriais, atendendo às mais rigorosas demandas.
                </p>
                <Link
                  to="/sistemas-industriais"
                  className="text-blue-600 font-semibold hover:text-blue-700"
                >
                  Saiba mais →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para transformar sua experiência de limpeza?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Entre em contato conosco e descubra como podemos ajudar você a ter um ambiente mais limpo e saudável.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/loja"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
            >
              Ver Produtos
            </Link>
            <Link
              to="/contactos"
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold text-lg transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default MoreInfo;