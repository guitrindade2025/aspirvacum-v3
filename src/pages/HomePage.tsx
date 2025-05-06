import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaHome, FaShieldAlt, FaStar, FaArrowRight, FaTools, FaWrench, FaCheck } from 'react-icons/fa';

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
  out: {
    opacity: 0,
    scale: 1.2,
  },
};

const pageTransition = {
  type: 'spring',
  stiffness: 50,
  damping: 20,
};

const HomePage = () => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="overflow-hidden"
    >
      {/* Hero Section com Vídeo/Imagem em Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(/fundohome.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(1.2)' // Increase brightness to make the image lighter
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
        <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Removido o logo do centro para focar no título e CTA */}
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Especialistas em Aspiração Central
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Serviços completos de instalação, manutenção e reparação de sistemas de aspiração central.
              Soluções profissionais para o seu lar ou empresa.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-6 items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {/* Botões CTA mantidos em destaque */}
              <Link
                to="/instalacao"
                className="bg-aspirvacum-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-aspirvacum-teal transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#40c6ea]/30"
              >
                Instalação de Aspiração Central
              </Link>
              <Link
                to="/assistencia-tecnica"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
              >
                Assistência Técnica
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-8 h-14 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-3 bg-white rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Serviços Principais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Os Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções profissionais completas para sistemas de aspiração central
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-aspirvacum-teal mb-6">
                <FaTools className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Instalação de Aspiração Central</h3>
              <p className="text-gray-600 mb-6">
                Serviço completo de instalação profissional realizado por equipas certificadas. Projeto personalizado para o seu espaço com materiais de alta qualidade.
              </p>
              <Link
                to="/instalacao"
                className="inline-flex items-center text-aspirvacum-teal font-semibold hover:text-aspirvacum-blue"
              >
                Saber mais sobre instalação
                <FaArrowRight className="ml-2 transform transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-aspirvacum-teal mb-6">
                <FaWrench className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Conserto de Aspiração Central</h3>
              <p className="text-gray-600 mb-6">
                Assistência técnica especializada para aspiração central avariada. Reparação de tubos partidos, substituição de componentes e solução de problemas de sucção.
              </p>
              <Link
                to="/assistencia-tecnica"
                className="inline-flex items-center text-aspirvacum-teal font-semibold hover:text-aspirvacum-blue"
              >
                Saber mais sobre reparação
                <FaArrowRight className="ml-2 transform transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
            >
              <div className="text-aspirvacum-teal mb-6">
                <FaCheck className="w-12 h-12" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Manutenção de Aspiração Central</h3>
              <p className="text-gray-600 mb-6">
                Serviços preventivos e corretivos para prolongar a vida útil do seu sistema. Verificações periódicas, limpeza de filtros e otimização de desempenho.
              </p>
              <Link
                to="/manutencao"
                className="inline-flex items-center text-aspirvacum-teal font-semibold hover:text-aspirvacum-blue"
              >
                Saber mais sobre manutenção
                <FaArrowRight className="ml-2 transform transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problemas Comuns e Soluções */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Soluções para Problemas Comuns</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Resolvemos todos os tipos de avarias em sistemas de aspiração central
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-aspirvacum-teal">Aspiração Central Avariada</h3>
              <p className="text-gray-600">Diagnóstico preciso e reparação eficiente para qualquer tipo de avaria no seu sistema de aspiração central.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-aspirvacum-teal">Tubo de Aspiração Central Partido</h3>
              <p className="text-gray-600">Técnicas avançadas de deteção e reparação de tubos partidos ou danificados sem grandes obras.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-aspirvacum-teal">Falta de Sucção</h3>
              <p className="text-gray-600">Recuperação da potência ideal do seu sistema, eliminando obstruções e otimizando o desempenho.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-aspirvacum-teal">Motor Queimado</h3>
              <p className="text-gray-600">Substituição de motores danificados com peças originais e garantia de fabricante.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-aspirvacum-teal">Sistema Entupido</h3>
              <p className="text-gray-600">Serviço de desentupimento profissional para recuperar o fluxo normal do sistema de aspiração.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-aspirvacum-teal">Tomadas Sem Força</h3>
              <p className="text-gray-600">Reparação e substituição de componentes em tomadas de aspiração com problemas de funcionamento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vantagens com Cards Interativos */}
      <section className="py-24 bg-gradient-to-b from-aspirvacum-teal to-[#0a4a61]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Porquê Escolher a Aspirvacum?</h2>
            <p className="text-xl text-aspirvacum-blue max-w-3xl mx-auto">
              Profissionais experientes e soluções à medida para todos os sistemas de aspiração central
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLeaf className="w-8 h-8" />,
                title: "Serviço Certificado",
                description: "Equipas certificadas e técnicos especializados em sistemas de aspiração central"
              },
              {
                icon: <FaHome className="w-8 h-8" />,
                title: "Atendimento ao Domicílio",
                description: "Serviço completo ao domicílio em Lisboa, Porto e em todo o território nacional"
              },
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: "Garantia de Serviço",
                description: "Todos os nossos serviços e peças incluem garantia de qualidade e durabilidade"
              },
              {
                icon: <FaStar className="w-8 h-8" />,
                title: "Orçamento Gratuito",
                description: "Avaliação técnica e orçamento detalhado sem compromisso"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/95 hover:shadow-xl hover:shadow-aspirvacum-blue/20 transition-all duration-300 group transform hover:-translate-y-1"
              >
                <div className="text-aspirvacum-teal mb-6 group-hover:scale-110 group-hover:text-aspirvacum-blue transform transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Produtos em Destaque com Efeitos 3D */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Sistemas de Aspiração Central</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra a nossa linha completa de soluções para todos os tipos de espaços
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "/p0.jpg",
                title: "Sistemas Residenciais",
                description: "Soluções ideais de aspiração central para moradias e apartamentos",
                link: "/sistemas-residenciais"
              },
              {
                image: "/p1.jpg",
                title: "Sistemas Comerciais",
                description: "Sistemas robustos para uso intensivo em espaços comerciais",
                link: "/sistemas-comerciais"
              },
              {
                image: "/p2.jpg",
                title: "Peças e Acessórios",
                description: "Mangueiras, tomadas de parede, sacos, filtros e componentes originais",
                link: "/loja/acessorios"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img 
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-200 mb-4">{product.description}</p>
                  <Link
                    to={product.link}
                    className="inline-flex items-center text-white font-semibold group-hover:text-aspirvacum-blue transition-colors"
                  >
                    Saber mais
                    <FaArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final com Parallax */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-10"></div>
        
        <div className="container mx-auto px-4 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Precisa de Ajuda com a Sua Aspiração Central?
            </h2>
            <p className="text-xl mb-12 text-gray-300">
              Contacte-nos hoje para uma avaliação gratuita. O nosso serviço ao domicílio está disponível para instalação, manutenção ou reparação do seu sistema.
            </p>
            <Link
              to="/contactos"
              className="inline-flex items-center bg-aspirvacum-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-aspirvacum-teal transform hover:scale-105 transition-all duration-300"
            >
              Marque uma Visita Técnica
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
