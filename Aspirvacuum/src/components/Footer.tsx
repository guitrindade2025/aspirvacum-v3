import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-aspirvaccum-dark text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Social Media */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Siga-nos</h6>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/aspirvacum"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-aspirvaccum-blue"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/channel/UC4qC71zZUoItbmkFhNerOXA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-aspirvaccum-blue"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-aspirvaccum-blue"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Contacte-nos</h6>
            <div className="space-y-2">
              <a
                href="tel:+351917601184"
                className="block text-white hover:text-aspirvaccum-blue"
              >
                +351 917 601 184
              </a>
              <a
                href="mailto:geral@aspirvacum.pt"
                className="block text-white hover:text-aspirvaccum-blue"
              >
                geral@aspirvacum.pt
              </a>
            </div>
          </div>

          {/* Terms */}
          <div>
            <h6 className="text-sm font-bold mb-4 uppercase">Termos Legais</h6>
            <nav className="space-y-2">
              <Link 
                to="/politica-cookies" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Cookies
              </Link>
              <Link 
                to="/politica-privacidade" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos-uso" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Termos de Uso
              </Link>
              <a 
                href="https://www.livroreclamacoes.pt" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                Livro de Reclamações
              </a>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black bg-opacity-70 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0">
            <span>©2025 Aspirvacum · Criado com dedicação por </span>
            <a
              href="http://www.gtit.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-aspirvaccum-blue"
            >
              gtit.pt
            </a>
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6">
            <Link to="/a-empresa" className="text-white hover:text-aspirvaccum-blue">
              Saiba mais sobre a Aspirvacum
            </Link>
            <Link to="/contatos" className="text-white hover:text-aspirvaccum-blue">Entre em contacto connosco</Link>
            <Link to="/mapa-site" className="text-white hover:text-aspirvaccum-blue">Mapa do Site</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
