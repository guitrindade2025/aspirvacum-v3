import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaUsers, FaHandshake, FaChartLine } from 'react-icons/fa';
import supportImage from '@/assets/support.jpg';

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

const ImageWithFallback = () => {
  return (
    <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
        alt="Sistema de Aspiração Central" 
        className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
    </div>
  );
};

const AboutUs = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const testimonials = [
    "A Aspirvacum transformou a maneira como limpamos nossa casa. A eficiência e a qualidade são incomparáveis! - Cliente Satisfeito",
    "Os produtos da Aspirvacum são de altíssima qualidade e o atendimento é excepcional. Recomendo a todos! - Cliente Fiel",
    "Desde que começamos a usar a Aspirvacum, nossa produtividade aumentou significativamente. - Empresa Parceira"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen"
    >
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-blue-600 text-white">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            alt="Interior Moderno com Sistema de Aspiração" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-600/75"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              A Nossa História
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Mais de 15 anos de excelência em sistemas de aspiração central
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards de Números */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaUsers />, number: "5000+", title: "Clientes Satisfeitos" },
            { icon: <FaAward />, number: "15+", title: "Anos de Experiência" },
            { icon: <FaHandshake />, number: "100+", title: "Parceiros" },
            { icon: <FaChartLine />, number: "98%", title: "Taxa de Satisfação" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold mb-2">{item.number}</h3>
              <p className="text-gray-600">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Seção Sobre Nós */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Quem Somos</h2>
            <p className="text-lg text-gray-600 mb-6">
              A Aspirvacum é líder no mercado de sistemas de aspiração central em Portugal. 
              A nossa jornada começou há mais de 15 anos com uma visão clara: proporcionar 
              soluções inovadoras e eficientes para os nossos clientes.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Hoje, somos reconhecidos pela excelência dos nossos serviços e pelo 
              compromisso com a satisfação total dos nossos clientes.
            </p>
            <div className="space-y-4">
              {[
                "Equipa altamente especializada",
                "Produtos de última geração",
                "Assistência técnica especializada",
                "Garantia alargada"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <ImageWithFallback />
          </motion.div>
        </div>
      </div>

      {/* Aqui mantemos o carrossel de depoimentos existente */}
      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-aspirvaccum-dark">Testemunhos</h2>
        <blockquote className="border-l-4 border-aspirvaccum-blue pl-6 italic transition-opacity duration-1000 ease-in-out text-center text-lg text-gray-700 bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-aspirvaccum-blue/20">
          <span className="text-4xl text-aspirvaccum-blue">"</span>{testimonials[currentTestimonial]}<span className="text-4xl text-aspirvaccum-blue">"</span>
        </blockquote>
      </div>

      {/* Seção Missão, Visão e Valores */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">O que nos define</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-aspirvacuum-dark">A Nossa Missão</h3>
              <p>Proporcionar conforto e eficiência através de soluções inovadoras de aspiração central.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-aspirvacuum-dark">A Nossa Visão</h3>
              <p>Ser a escolha número um em aspiração central, reconhecida pela qualidade e inovação.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-aspirvacuum-dark">Os Nossos Valores</h3>
              <p>Compromisso com a excelência, inovação contínua e satisfação dos clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;