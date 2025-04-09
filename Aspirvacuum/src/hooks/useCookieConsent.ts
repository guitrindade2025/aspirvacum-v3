import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent') as 'accepted' | 'declined' | null;
    setCookieConsent(storedConsent);
  }, []);

  const updateCookieConsent = (consent: 'accepted' | 'declined') => {
    localStorage.setItem('cookieConsent', consent);
    setCookieConsent(consent);

    if (consent === 'accepted') {
      // Ativar Google Analytics
      enableGoogleAnalytics();
    } else {
      // Desativar Google Analytics
      disableGoogleAnalytics();
    }
  };

  return { cookieConsent, updateCookieConsent };
};

// Funções auxiliares
const enableGoogleAnalytics = () => {
  // Implementar a ativação do GA
  window.gtag?.('consent', 'update', {
    'analytics_storage': 'granted'
  });
};

const disableGoogleAnalytics = () => {
  // Implementar a desativação do GA
  window.gtag?.('consent', 'update', {
    'analytics_storage': 'denied'
  });
}; 