import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    // Aqui você pode ativar o Google Analytics ou outros serviços
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    // Aqui você pode garantir que nenhum cookie não essencial seja definido
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto p-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mr-8 text-sm text-gray-700 mb-4 md:mb-0">
          <p>
            Utilizamos cookies para melhorar a sua experiência no nosso site. 
            Ao continuar a navegar, está a concordar com a nossa{' '}
            <Link to="/politica-cookies" className="text-blue-600 hover:underline">
              Política de Cookies
            </Link>.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Recusar
          </button>
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
          >
            Aceitar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
