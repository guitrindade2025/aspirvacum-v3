import { useState, useEffect } from 'react';

// Adiciona a definição de tipo para o dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export const useCookieConsent = () => {
  const [cookieConsent, setCookieConsent] = useState<'accepted' | 'declined' | null>(null);

  useEffect(() => {
    const storedConsent = localStorage.getItem('cookieConsent') as 'accepted' | 'declined' | null;
    setCookieConsent(storedConsent);
  }, []);

  const enableGoogleAnalytics = () => {
    // Adicione seu ID do Google Analytics aqui
    const gaId = 'G-XXXXXXXXXX';
    
    // Carrega o script do Google Analytics
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializa o Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId);
  };

  const disableGoogleAnalytics = () => {
    // Remove os cookies do Google Analytics
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name] = cookie.split('=');
      if (name.trim().startsWith('_ga')) {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      }
    }
    
    // Remove os scripts do Google Analytics
    const scripts = document.getElementsByTagName('script');
    for (let script of Array.from(scripts)) {
      if (script.src.includes('googletagmanager.com/gtag')) {
        script.remove();
      }
    }

    // Limpa as variáveis globais
    window.dataLayer = undefined;
    window.gtag = undefined;
  };

  const updateCookieConsent = (consent: 'accepted' | 'declined') => {
    localStorage.setItem('cookieConsent', consent);
    setCookieConsent(consent);

    if (consent === 'accepted') {
      enableGoogleAnalytics();
    } else {
      disableGoogleAnalytics();
    }
  };

  return { cookieConsent, updateCookieConsent };
}; 