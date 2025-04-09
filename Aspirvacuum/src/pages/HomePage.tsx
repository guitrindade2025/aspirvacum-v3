import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
    >
      {/* Hero Section */}
      <section
        className="relative h-[500px] flex items-center text-white"
        style={{
          backgroundImage: `url(https://ext.same-assets.com/236577210/1042783073.jpeg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bem-vindo à Aspirvacum - Inovação em Aspiração Central</h1>
            <p className="text-xl mb-8">Lideramos o futuro da aspiração central com tecnologia de ponta e soluções personalizadas.</p>
            <Link
              to="/aspiracao-central"
              className="inline-block bg-aspirvacuum-blue hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded"
            >
              MAIS INFORMAÇÕES
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-aspirvacuum-dark">A Nossa Missão:</h3>
              <p>Proporcionar conforto e eficiência através de soluções inovadoras de aspiração central.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-aspirvacuum-dark">A Nossa Visão:</h3>
              <p>Ser a escolha número um em aspiração central, reconhecida pela qualidade e inovação.</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-aspirvacuum-dark">Os Nossos Valores:</h3>
              <p>Compromisso com a excelência, inovação contínua e satisfação do cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-aspirvacuum-dark">Aspirvacum - Soluções de Aspiração Central</h2>
              <p className="mb-4">
                Desde 2023, a Aspirvacum tem-se dedicado a oferecer as melhores soluções de aspiração central, combinando tecnologia avançada com um serviço ao cliente excepcional.
              </p>
              <p className="mb-6">
                Presentemente estamos em vários países como Espanha, França, Alemanha, Polónia, Ucrânia, Angola, Brasil e EUA. Esperamos continuar a crescer e a aumentar a nossa presença em diferentes mercados de modo a ficarmos cada vez mais reconhecidos como uma empresa de qualidade.
              </p>
              <Link
                to="/a-empresa"
                className="inline-block bg-aspirvacuum-blue hover:bg-opacity-90 text-white font-bold py-2 px-4 rounded"
              >
                MAIS SOBRE A NOSSA EMPRESA
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aspirvacuum-blue/20">
                <div className="p-4 text-center">
                  <h4 className="font-bold text-aspirvacuum-dark mb-2">Profissionalismo</h4>
                  <p className="text-sm text-gray-600">A nossa equipa é altamente qualificada e comprometida em oferecer o melhor serviço.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aspirvacuum-blue/20">
                <div className="p-4 text-center">
                  <h4 className="font-bold text-aspirvacuum-dark mb-2">Confiança</h4>
                  <p className="text-sm text-gray-600">Construímos relações duradouras com os nossos clientes através da confiança mútua.</p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-aspirvacuum-blue/20">
                <div className="p-4 text-center">
                  <h4 className="font-bold text-aspirvacuum-dark mb-2">Produtos de Qualidade</h4>
                  <p className="text-sm text-gray-600">Oferecemos produtos que atendem aos mais altos padrões de qualidade.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section className="py-16 bg-aspirvacuum-blue text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">6 razões para trabalharmos em conjunto</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white text-aspirvacuum-dark rounded-lg shadow p-6">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">O seu sucesso, é o nosso sucesso</h3>
              <p className="text-center">
                Acreditamos que para melhorarmos temos de contar com os nossos clientes, para isso pretendemos uma relação de proximidade para podermos aprender através da sua experiência com os nossos produtos.
              </p>
            </div>

            <div className="bg-white text-aspirvacuum-dark rounded-lg shadow p-6">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Pretendemos inovar</h3>
              <p className="text-center">
                Como fabricantes que somos, estamos sempre à procura de formas de introduzir novidades no mercado da aspiração central de modo a melhor servir os interesses dos nossos clientes.
              </p>
            </div>

            <div className="bg-white text-aspirvacuum-dark rounded-lg shadow p-6">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Somos Fiáveis</h3>
              <p className="text-center">
                Pode sempre contar connosco para rapidamente resolver qualquer problema, dispomos de um serviço de qualidade e com garantia.
              </p>
            </div>

            <div className="bg-white text-aspirvacuum-dark rounded-lg shadow p-6">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Mão-de-obra especializada</h3>
              <p className="text-center">
                Desde a pré-produção até à linha de montagem, sem esquecer a rede comercial e o serviço pós-venda, temos profissionais preparados para garantir os melhores produtos e serviços.
              </p>
            </div>

            <div className="bg-white text-aspirvacuum-dark rounded-lg shadow p-6">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Pensamento Global</h3>
              <p className="text-center">
                Estamos sempre a pensar em formas de expandir o nosso negócio. Seja na Europa, África, Ásia, Oceânia ou América, queremos estar onde estiver.
              </p>
            </div>

            <div className="bg-white text-aspirvacuum-dark rounded-lg shadow p-6">
              <div className="flex justify-center mb-4">
                <svg className="h-12 w-12 text-aspirvacuum-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">A nossa inspiração?</h3>
              <p className="text-center">
                O conforto e a higiene da sua casa.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/contatos"
              className="inline-block bg-white text-aspirvacuum-blue font-bold py-3 px-6 rounded shadow hover:bg-gray-100"
            >
              QUER SER NOSSO DISTRIBUIDOR?
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-aspirvacuum-dark">Os nossos Produtos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img
                  src="https://ext.same-assets.com/236577210/3451493710.jpeg"
                  alt="Izzy Series"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-aspirvacuum-dark">Izzy Series</h3>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img
                  src="https://ext.same-assets.com/236577210/1206731556.jpeg"
                  alt="Aquamatic Series"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-aspirvacuum-dark">Aquamatic Series</h3>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img
                  src="https://ext.same-assets.com/236577210/1075430880.jpeg"
                  alt="Tomadas"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-aspirvacuum-dark">Tomadas</h3>
            </div>

            <div className="group">
              <div className="overflow-hidden rounded-lg shadow-md mb-4">
                <img
                  src="https://ext.same-assets.com/236577210/97712291.jpeg"
                  alt="Glutões"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-aspirvacuum-dark">Glutões</h3>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/loja"
              className="inline-block bg-aspirvacuum-blue hover:bg-opacity-90 text-white font-bold py-3 px-6 rounded"
            >
              VER TODOS OS PRODUTOS
            </Link>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HomePage;
