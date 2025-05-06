import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCogs, FaFilter, FaTruck } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import mapa from "/mapa.jpg";

// Inicializa o EmailJS
emailjs.init("OyScfh5Re3iaf3zdA"); // Substituindo pela chave pública correta

const additionalServices = [
  {
    id: 'unclogging',
    title: 'Desentupimentos',
    icon: <FaCogs className="text-aspirvacum-teal w-10 h-10 mb-6" />,
    description: 'Solucionamos qualquer tipo de entupimento com garantia de segurança.'
  },
  {
    id: 'filterReplacement',
    title: 'Substituição de Filtros',
    icon: <FaFilter className="text-aspirvacum-teal w-10 h-10 mb-6" />,
    description: 'Utilizamos filtros originais com garantia do fabricante.'
  },
  {
    id: 'pickupRepair',
    title: 'PickUp and Repair',
    icon: <FaTruck className="text-aspirvacum-teal w-10 h-10 mb-6" />,
    description: 'Recolhemos, reparamos e entregamos em 72h em todo o território nacional.'
  }
];

const coverageAreas = [
  'Alenquer', 'Amadora', 'Arruda dos Vinhos', 'Azambuja', 'Cadaval', 'Cascais', 'Lisboa', 'Loures', 'Lourinhã', 'Mafra', 'Odivelas', 'Oeiras', 'Sintra', 'Torres Vedras', 'Vila Franca de Xira',
  'Alcochete', 'Almada', 'Barreiro', 'Moita', 'Montijo', 'Palmela', 'Seixal', 'Sesimbra', 'Setúbal'
];

const Contactos = () => {
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });

    try {
      const templateParams = {
        name: formData.name, // Updated to match EmailJS template
        email: formData.email, // Updated to match EmailJS template
        subject: formData.subject,
        message: formData.message,
        to_name: "Guilherme Trindade",
        reply_to: formData.email,
      };

      await emailjs.send(
        "service_7gh3n8y", // ID do serviço configurado
        "template_mbbjkq9", // ID do template correto
        templateParams
      );

      setFormStatus({ submitted: true, loading: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setFormStatus({ submitted: false, loading: false });
      alert('Erro ao enviar mensagem. Por favor, tente novamente.');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="bg-gradient-to-r from-aspirvacum-teal to-aspirvacum-blue text-white">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
          <h1 className="text-4xl font-bold mb-4">Contactos</h1>
          <p className="text-xl text-blue-100">
            Entre em contacto connosco
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Informações de Contacto */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaPhone className="text-aspirvacum-teal w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Telefone</h3>
              </div>
              <p className="text-gray-600">+351 917 601 184</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaEnvelope className="text-aspirvacum-teal w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Email</h3>
              </div>
              <p className="text-gray-600">info@aspirvacum.pt</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaMapMarkerAlt className="text-aspirvacum-teal w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Morada</h3>
              </div>
              <p className="text-gray-600">
                Av. do Brasil, 95<br />
                2735-521 Agualva-Cacém<br />
                Portugal
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <FaClock className="text-aspirvacum-teal w-6 h-6 mr-3" />
                <h3 className="text-xl font-semibold">Horário</h3>
              </div>
              <div className="text-gray-600">
                <p>Segunda a Sexta: 9h00 - 18h00</p>
                <p>Sábado: 9h00 - 13h00</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>

          {/* Formulário de Contacto */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Envie a sua mensagem</h2>
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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus.loading}
                  className="w-full bg-gradient-to-r from-aspirvacum-blue to-aspirvacum-teal text-white py-3 px-6 rounded-lg hover:from-aspirvacum-teal hover:to-aspirvacum-blue transition-all duration-300 disabled:opacity-50"
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
              </form>
            )}
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Serviços Adicionais</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalServices.map(service => (
              <div key={service.id} className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg transition-shadow hover:shadow-blue-500/50">
                {service.icon}
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Areas Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <h2 className="text-2xl font-bold mb-4">Áreas de Cobertura</h2>
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <ul className="list-disc list-inside text-gray-600 text-lg">
              {coverageAreas.map(area => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            <div>
              <img src={mapa} alt="Mapa de Cobertura" className="w-full rounded-lg shadow-md" />
            </div>
          </div>
          <p className="text-gray-600 mt-4 text-center">Para outras regiões, dispomos do serviço <strong>PickUp and Repair</strong>.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Contactos;