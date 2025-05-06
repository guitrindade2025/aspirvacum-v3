import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaTools, FaCheckCircle, FaPhoneAlt, FaCalendarCheck, FaWrench, FaShieldAlt, FaBolt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Manutencao = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    {
      url: "/Img AVAC/OIP.jpg",
      alt: "Manutenção de Aspiração Central"
    },
    {
      url: "/Img AVAC/ah7.png",
      alt: "Serviço de Manutenção"
    },
    {
      url: "/Img AVAC/ah3.jpg",
      alt: "Reparação de Aspiração Central"
    },
    {
      url: "/Img AVAC/ah2.jpg",
      alt: "Assistência Técnica"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="relative h-[60vh] overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
        ))}
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6">Manutenção de Aspiração Central</h1>
            <p className="text-xl text-gray-200">
              Serviços especializados para manter o seu sistema em perfeitas condições
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que a Manutenção Regular é Essencial?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Um sistema de aspiração central bem mantido não só funciona de forma mais eficiente, como também previne avarias dispendiosas e prolonga significativamente a vida útil do seu equipamento.
              </p>
            </div>

            {/* Serviços de Manutenção Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                <FaTools className="text-blue-600 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Manutenção Preventiva</h3>
                <p className="text-gray-600">Revisão periódica para garantir o funcionamento ideal do sistema e prevenir problemas de aspiração central avariada.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                <FaWrench className="text-blue-600 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reparação Especializada</h3>
                <p className="text-gray-600">Serviços de conserto de aspiração central, incluindo reparação de tubos partidos e resolução rápida de avarias.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                <FaPhoneAlt className="text-blue-600 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Suporte Técnico</h3>
                <p className="text-gray-600">Assistência técnica especializada com pronto atendimento para todos os tipos de sistemas de aspiração central.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 border-blue-600">
                <FaCalendarCheck className="text-blue-600 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Agendamento Flexível</h3>
                <p className="text-gray-600">Marque facilmente uma visita técnica com horários convenientes para manutenção do seu sistema.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Problemas comuns e soluções */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Problemas Comuns e Nossas Soluções</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Aspiração Central Avariada</h3>
                  <p className="text-gray-600 mb-4">
                    Quando o seu sistema apresenta falhas ou deixa de funcionar completamente, os nossos técnicos realizam um diagnóstico detalhado para identificar a origem do problema. Oferecemos soluções rápidas e eficazes para restaurar o funcionamento normal do seu sistema.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Falta de Sucção</h3>
                  <p className="text-gray-600 mb-4">
                    A perda de potência de sucção é um dos problemas mais comuns. Através de uma inspeção abrangente, verificamos filtros, tubagens e motor para restaurar a eficiência ideal do sistema.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Ruído Excessivo</h3>
                  <p className="text-gray-600 mb-4">
                    Um sistema ruidoso pode indicar desgaste de componentes ou obstruções. A nossa equipa identifica e resolve estas questões para garantir uma operação silenciosa.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Tubo de Aspiração Central Partido</h3>
                  <p className="text-gray-600 mb-4">
                    Utilizamos equipamentos de última geração para localizar com precisão tubos partidos ou danificados no sistema. A nossa técnica de reparação minimiza a necessidade de obras extensas, restaurando o sistema com o mínimo de transtorno.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Sistema Entupido</h3>
                  <p className="text-gray-600 mb-4">
                    Desentupimento profissional da rede de tubagem, restaurando o fluxo normal de ar e prevenindo danos ao motor. Realizamos uma limpeza completa para eliminar todas as obstruções.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-600">Motor Danificado</h3>
                  <p className="text-gray-600 mb-4">
                    Caso o motor apresente falhas ou esteja queimado, oferecemos serviços de reparação ou substituição por peças originais de alta qualidade, com garantia do fabricante.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Serviços de Manutenção Detalhados */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">O Nosso Serviço de Manutenção Inclui:</h2>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-4 mt-1">
                    <FaCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Inspeção Completa do Sistema</h3>
                    <p className="text-gray-600">Verificação minuciosa de todas as componentes do sistema de aspiração central, incluindo motor, filtros e rede de tubagem.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-4 mt-1">
                    <FaCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Limpeza e Substituição de Filtros</h3>
                    <p className="text-gray-600">Limpeza profunda ou substituição de filtros conforme necessário para manter a qualidade do ar e desempenho do sistema.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-4 mt-1">
                    <FaCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Verificação das Tomadas de Aspiração</h3>
                    <p className="text-gray-600">Teste de vedação e funcionamento de todas as tomadas de aspiração para garantir vedação perfeita e máxima sucção.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-4 mt-1">
                    <FaCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Inspeção da Rede de Tubagem</h3>
                    <p className="text-gray-600">Verificação da integridade da tubagem para detetar possíveis fugas, tubos partidos ou obstruções que afetam o desempenho.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full text-blue-600 mr-4 mt-1">
                    <FaCheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Teste de Potência e Sucção</h3>
                    <p className="text-gray-600">Medições precisas para garantir que o sistema opera com os níveis ideais de potência e eficiência energética.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold mb-4">Porquê Escolher o Nosso Serviço?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-green-600 mr-2">✓</div>
                    <span>Técnicos certificados com mais de 15 anos de experiência</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-600 mr-2">✓</div>
                    <span>Utilização exclusiva de peças originais com garantia</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-600 mr-2">✓</div>
                    <span>Serviço ao domicílio em todo o território nacional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-600 mr-2">✓</div>
                    <span>Orçamentos transparentes sem custos ocultos</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-600 mr-2">✓</div>
                    <span>Garantia em todos os serviços realizados</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-lg text-white">
                <h3 className="text-2xl font-bold mb-4">Planos de Manutenção Preventiva</h3>
                <p className="mb-6">
                  Evite problemas inesperados e prolongue a vida útil do seu sistema de aspiração central com os nossos planos de manutenção preventiva personalizados.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div>
                    <h4 className="font-semibold text-xl mb-2">Plano Standard</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>1 visita anual</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>10% desconto em peças</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Suporte telefónico</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Relatório técnico</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-xl mb-2">Plano Premium</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>2 visitas anuais</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>20% desconto em peças</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Prioridade no atendimento</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Garantia estendida</span>
                      </li>
                      <li className="flex items-start">
                        <FaCheckCircle className="text-green-300 mt-1 mr-2 flex-shrink-0" />
                        <span>Assistência de emergência</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link 
                  to="/contactos"
                  className="block w-full bg-white text-blue-600 font-bold py-3 text-center rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Solicitar Plano de Manutenção
                </Link>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <FaBolt className="text-amber-500 w-8 h-8 mr-4" />
                  <h3 className="text-2xl font-bold">Assistência Urgente</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  O seu sistema de aspiração central está avariado? Oferecemos um serviço de assistência técnica urgente para reparação rápida de qualquer problema.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaShieldAlt className="text-blue-600 mr-3" />
                    <span>Disponível 24/48h em dias úteis</span>
                  </div>
                  <div className="flex items-center">
                    <FaWrench className="text-blue-600 mr-3" />
                    <span>Técnicos especializados</span>
                  </div>
                  <div className="flex items-center">
                    <FaTools className="text-blue-600 mr-3" />
                    <span>Diagnóstico e orçamento rápido</span>
                  </div>
                </div>
                <div className="mt-6">
                  <a 
                    href="tel:+351917601184" 
                    className="block w-full bg-blue-600 text-white font-bold py-3 text-center rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Contactar: 917 601 184
                  </a>
                  <p className="text-xs text-center mt-2 text-gray-500">* chamada para a rede móvel nacional</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Dicas de Manutenção */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12">
            <h2 className="text-3xl font-bold mb-6">Dicas para Prolongar a Vida do Seu Sistema</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Verificação Regular</h3>
                <p className="text-gray-600">Esvazie o reservatório e verifique os filtros regularmente. Não espere que o recipiente fique completamente cheio antes de esvaziá-lo.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Filtros Limpos</h3>
                <p className="text-gray-600">Limpe ou substitua os filtros conforme indicado pelo fabricante. Filtros obstruídos fazem o motor trabalhar mais, reduzindo sua vida útil.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-3 text-blue-600">Uso Adequado</h3>
                <p className="text-gray-600">Evite aspirar objetos grandes ou materiais húmidos. Utilize os acessórios apropriados para cada tipo de superfície.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Mantenha o seu sistema a funcionar perfeitamente</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Não espere que a sua aspiração central apresente problemas. Agende hoje mesmo uma manutenção preventiva e garanta o melhor desempenho do seu equipamento.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contactos" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center">
                Agendar Manutenção
                <FaArrowRight className="ml-2" />
              </Link>
              <a href="tel:+351917601184" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-400 transition-colors">
                917 601 184
              </a>
            </div>
            <p className="text-sm text-blue-200 mt-4">* chamada para a rede móvel nacional</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Manutencao;