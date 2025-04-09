import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaCheckCircle, FaPhoneAlt, FaClock, FaMapMarkerAlt, FaFilter, FaCogs, FaTruck } from 'react-icons/fa';
import mapa from '/mapa.jpg';

const images = [
  {
    url: "https://images.unsplash.com/photo-1484154218962-a197022b5858",
    alt: "Assistência Técnica - Imagem 1"
  },
  {
    url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    alt: "Assistência Técnica - Imagem 2"
  },
  {
    url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d",
    alt: "Assistência Técnica - Imagem 3"
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
    alt: "Assistência Técnica - Imagem 4"
  }
];

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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

  const additionalServices = [
    {
      id: 'unclogging',
      title: 'Desentupimentos',
      icon: <FaCogs className="text-blue-600 w-10 h-10 mb-6" />,
      description: 'Solucionamos qualquer tipo de entupimento com garantia de segurança.'
    },
    {
      id: 'filterReplacement',
      title: 'Substituição de Filtros',
      icon: <FaFilter className="text-blue-600 w-10 h-10 mb-6" />,
      description: 'Utilizamos filtros originais com garantia do fabricante.'
    },
    {
      id: 'pickupRepair',
      title: 'PickUp and Repair',
      icon: <FaTruck className="text-blue-600 w-10 h-10 mb-6" />,
      description: 'Recolhemos, reparamos e entregamos em 72h em todo o território nacional.'
    }
  ];

  const coverageAreas = [
    'Alenquer', 'Amadora', 'Arruda dos Vinhos', 'Azambuja', 'Cadaval', 'Cascais', 'Lisboa', 'Loures', 'Lourinhã', 'Mafra', 'Odivelas', 'Oeiras', 'Sintra', 'Torres Vedras', 'Vila Franca de Xira',
    'Alcochete', 'Almada', 'Barreiro', 'Moita', 'Montijo', 'Palmela', 'Seixal', 'Sesimbra', 'Setúbal'
  ];

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
            <h1 className="text-5xl font-bold mb-6">Assistência Técnica</h1>
            <p className="text-xl text-gray-200">
              Soluções rápidas e eficientes para o seu sistema de aspiração central
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Informações de Contacto Rápido */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-blue-600 w-6 h-6" />
              <div>
                <h3 className="font-semibold">Ligue Já</h3>
                <p className="text-gray-600">+351 917 601 184</p>
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

        {/* Additional Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {additionalServices.map(service => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              {service.icon}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Coverage Areas Section */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Áreas de Cobertura</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <p className="text-gray-600 mb-4 font-semibold">Prestamos assistência técnica nos seguintes concelhos:</p>
              <ul className="list-disc list-inside text-gray-600">
                {coverageAreas.map(area => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
              <p className="text-gray-600 mt-8 text-center text-lg font-semibold">Para outras regiões, dispomos do serviço <strong>PickUp and Repair</strong>.</p>
            </div>
            <div className="flex-1">
              <img src={mapa} alt="Mapa de cobertura" className="w-full h-auto rounded-lg shadow-md" />
            </div>
          </div>
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