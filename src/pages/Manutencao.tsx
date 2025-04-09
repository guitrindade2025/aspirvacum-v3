import { motion } from 'framer-motion';
import { FaTools, FaCheckCircle, FaPhoneAlt, FaCalendarCheck } from 'react-icons/fa';

const Manutencao = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-4xl font-bold mb-4">Manutenção</h1>
          <p className="text-xl text-blue-100">
            Serviços de manutenção preventiva e corretiva
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Serviços de Manutenção */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaTools className="text-blue-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Manutenção Preventiva</h3>
            <p className="text-gray-600">Revisão periódica para garantir o funcionamento ideal do sistema</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaCheckCircle className="text-blue-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Manutenção Corretiva</h3>
            <p className="text-gray-600">Resolução rápida de problemas e reparos necessários</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaPhoneAlt className="text-blue-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Suporte Técnico</h3>
            <p className="text-gray-600">Assistência técnica especializada e pronto atendimento</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaCalendarCheck className="text-blue-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Agendamento</h3>
            <p className="text-gray-600">Flexibilidade de horários para sua conveniência</p>
          </div>
        </div>

        {/* Added detailed maintenance services based on the client's requirements. */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Serviços de Manutenção</h2>
          <p className="text-gray-600 mb-4">Garantimos a manutenção completa do seu sistema de aspiração central.</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Limpeza e desentupimentos</li>
            <li>Substituição de filtros e motores</li>
            <li>Verificação de componentes eletrônicos</li>
          </ul>
          <p className="text-gray-600 mt-4">Todos os serviços são realizados por profissionais qualificados com mais de 15 anos de experiência.</p>
        </div>

        {/* Detalhes do Serviço */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">Nossos Serviços Incluem</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Limpeza e verificação do motor</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Inspeção das tubulações e conexões</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Verificação das tomadas de aspiração</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Troca de filtros e sacos coletores</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Teste de potência e sucção</span>
              </li>
            </ul>

            <div className="mt-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Plano de Manutenção</h3>
              <ul className="space-y-2">
                <li>✓ Visitas programadas</li>
                <li>✓ Desconto em peças</li>
                <li>✓ Prioridade no atendimento</li>
                <li>✓ Relatórios técnicos</li>
              </ul>
            </div>
          </div>
          <div>
            <img 
              src="/images/manutencao.jpg" 
              alt="Manutenção"
              className="rounded-lg shadow-lg mb-6"
            />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Agende uma Manutenção</h3>
              <p className="mb-4">Entre em contato conosco para agendar uma visita técnica ou tirar dúvidas sobre nossos serviços de manutenção.</p>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Manutencao;