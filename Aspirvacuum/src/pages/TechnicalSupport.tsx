import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaCheckCircle, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaCalendarAlt, FaClipboardList } from 'react-icons/fa';

const TechnicalSupport = () => {
  const [formStatus, setFormStatus] = useState({ loading: false, submitted: false });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
    preferredDate: '',
    serviceType: 'repair' // 'repair' | 'maintenance' | 'emergency'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAgendamentoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ loading: true, submitted: false });
    
    // Simula o envio
    setTimeout(() => {
      setFormStatus({ loading: false, submitted: true });
      // Reset form after success
      setFormData({
        name: '',
        phone: '',
        email: '',
        description: '',
        preferredDate: '',
        serviceType: 'repair'
      });
    }, 1500);
  };

  const serviceTypes = [
    {
      id: 'repair',
      title: 'Reparação',
      icon: <FaTools className="text-blue-600 w-10 h-10 mb-6" />,
      description: 'Resolução rápida e eficiente de problemas no seu sistema.'
    },
    {
      id: 'maintenance',
      title: 'Manutenção Preventiva',
      icon: <FaCheckCircle className="text-blue-600 w-10 h-10 mb-6" />,
      description: 'Evite problemas futuros com a nossa manutenção programada.'
    },
    {
      id: 'emergency',
      title: 'Emergência 24/7',
      icon: <FaPhoneAlt className="text-blue-600 w-10 h-10 mb-6" />,
      description: 'Assistência técnica disponível a qualquer hora.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-4xl font-bold mb-4">Assistência Técnica</h1>
          <p className="text-xl text-blue-100">
            Serviço especializado em sistemas de aspiração central
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Informações de Contacto Rápido */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Contacto Direto</h3>
                <p className="text-gray-600">+351 934 094 801</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClock className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Horário</h3>
                <p className="text-gray-600">Segunda a Sábado: 8h às 18h</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Área de Cobertura</h3>
                <p className="text-gray-600">Todo o território nacional</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tipos de Serviço */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {serviceTypes.map(service => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              {service.icon}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Formulário de Agendamento */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 bg-gradient-to-r from-blue-700 to-blue-800 text-white">
            <h2 className="text-3xl font-bold mb-4">Agende uma Visita</h2>
            <p className="text-blue-100">
              A nossa equipa técnica está pronta para atender as suas necessidades com excelência e profissionalismo.
            </p>
          </div>

          <form onSubmit={handleAgendamentoSubmit} className="p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
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
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Data preferencial
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de serviço
              </label>
              <select
                name="serviceType"
                value={formData.serviceType}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="repair">Reparação</option>
                <option value="maintenance">Manutenção Preventiva</option>
                <option value="emergency">Emergência</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Descrição do problema
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus.loading}
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {formStatus.loading ? 'A enviar...' : 'Solicitar Agendamento'}
            </button>

            {formStatus.submitted && (
              <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                Pedido enviado com sucesso! Entraremos em contacto brevemente.
              </div>
            )}
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default TechnicalSupport; 