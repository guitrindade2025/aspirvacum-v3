import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLeaf, FaHome, FaShieldAlt, FaStar, FaArrowRight } from 'react-icons/fa';

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
            backgroundImage: `url(https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)`,
          backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <img src="/logo.jpg" alt="Aspirvacum" className="h-24 mx-auto mb-8" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolucione a Limpeza do Seu Espaço
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl mb-12 text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Sistemas de aspiração central que transformam a maneira como vive. 
              Descubra o poder da tecnologia aliada ao conforto.
            </motion.p>
            
            <motion.div
              className="flex flex-wrap justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                to="/loja"
                className="bg-aspirvacum-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
              >
                Explorar Produtos
              </Link>
              <Link
                to="/contactos"
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/20 transform hover:scale-105 transition-all duration-300 border-2 border-white/30"
              >
                Fale Connosco
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

      {/* Vantagens com Cards Interativos */}
      <section className="py-24 bg-gradient-to-b from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Porquê Escolher a Aspirvacum?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Inovação, qualidade e excelência em cada detalhe do seu sistema de aspiração central
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaLeaf className="w-8 h-8" />,
                title: "Ecológico",
                description: "Sistema que contribui para um ambiente mais saudável e sustentável"
              },
              {
                icon: <FaHome className="w-8 h-8" />,
                title: "Valorização",
                description: "Aumente o valor do seu imóvel com tecnologia de ponta"
              },
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: "Garantia",
                description: "Produtos com garantia estendida e suporte técnico especializado"
              },
              {
                icon: <FaStar className="w-8 h-8" />,
                title: "Experiência",
                description: "Anos de experiência e milhares de clientes satisfeitos"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/95 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 group transform hover:-translate-y-1"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transform transition-transform duration-300">
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
            <h2 className="text-4xl font-bold mb-6 text-gray-900">Produtos em Destaque</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra nossa linha completa de soluções em aspiração central
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                image: "/p0.jpg",
                title: "Série Premium",
                description: "A mais avançada tecnologia em aspiração central",
                link: "/loja/centrais"
              },
              {
                image: "/p1.jpg",
                title: "Série Profissional",
                description: "Ideal para ambientes comerciais e industriais",
                link: "/loja/centrais"
              },
              {
                image: "/p2.jpg",
                title: "Acessórios",
                description: "Complementos para maximizar seu sistema",
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
              Pronto para Transformar a Sua Casa?
            </h2>
            <p className="text-xl mb-12 text-gray-300">
              Entre em contacto connosco hoje e descubra como podemos ajudar a tornar o seu espaço mais limpo e saudável.
            </p>
            <Link
              to="/contactos"
              className="inline-flex items-center bg-aspirvacum-blue text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transform hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento
              <FaArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
