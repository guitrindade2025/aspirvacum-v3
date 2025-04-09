import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });
  const [activeTab, setActiveTab] = useState('message'); // 'message' ou 'support'

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });
    setTimeout(() => {
      setFormStatus({ submitted: true, loading: false });
    }, 1500);
  };

  const socialLinks = [
    { icon: <FaLinkedin className="h-6 w-6" />, label: 'LinkedIn', url: '#' },
    { icon: <FaFacebook className="h-6 w-6" />, label: 'Facebook', url: '#' },
    { icon: <FaInstagram className="h-6 w-6" />, label: 'Instagram', url: '#' }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Hero Section com Background Animado */}
      <div className="relative overflow-hidden bg-blue-600 text-white">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 py-24 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fale Conosco
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Estamos aqui para ajudar você a encontrar a solução perfeita para suas necessidades
            </p>
          </motion.div>
        </div>
      </div>

      {/* Cards de Contato Flutuantes */}
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaPhone />, title: "Telefone", content: "+351 934 094 801", action: "Ligar agora" },
            { icon: <FaWhatsapp />, title: "WhatsApp", content: "+351 934 094 801", action: "Enviar mensagem" },
            { icon: <FaEnvelope />, title: "Email", content: "contacto@aspirvacum.pt", action: "Enviar email" },
            { icon: <FaClock />, title: "Horário", content: "Seg-Sáb: 8h às 18h", action: "Ver mais" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.content}</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:translate-x-2 transition-transform duration-300">
                {item.action} →
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Seção Principal */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Lado Esquerdo - Mapa e Informações */}
            <div className="bg-gray-900 p-12 relative after:absolute after:top-0 after:right-0 after:w-12 after:h-full after:bg-gradient-to-r after:from-gray-900 after:to-transparent">
              <h2 className="text-3xl font-bold text-white mb-8">
                Visite Nossa Sede
              </h2>
              <div className="space-y-8">
                <div className="bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <FaMapMarkerAlt className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Endereço</h3>
                      <p className="text-gray-400">Rua da Aspiração, 123</p>
                      <p className="text-gray-400">Lisboa, Portugal</p>
                    </div>
                  </div>
                </div>

                <div className="h-64 bg-gray-800 rounded-xl overflow-hidden relative group">
                  {/* Aqui vai o mapa do Google */}
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-all">
                    <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                      Ver no Google Maps
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Lado Direito - Formulário */}
            <div className="p-12 relative before:absolute before:top-0 before:left-0 before:w-12 before:h-full before:bg-gradient-to-r before:from-transparent before:to-white">
              <div className="mb-8">
                <div className="flex space-x-4 mb-8">
                  <button
                    onClick={() => setActiveTab('message')}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                      activeTab === 'message'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Enviar Mensagem
                  </button>
                  <button
                    onClick={() => setActiveTab('support')}
                    className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all ${
                      activeTab === 'support'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    Suporte Técnico
                  </button>
                </div>
              </div>

              {formStatus.submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Mensagem Enviada!</h3>
                  <p className="text-gray-600 mb-6">
                    Obrigado por entrar em contato. Nossa equipe responderá em breve.
                  </p>
                  <button
                    onClick={() => setFormStatus({ submitted: false, loading: false })}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Enviar nova mensagem
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome completo</label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                    <textarea
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus.loading}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/50 disabled:opacity-50 font-medium"
                  >
                    {formStatus.loading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </button>
                </motion.form>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs; 