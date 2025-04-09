import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout>();
  const submenuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device
    const detectTouch = () => {
      setIsTouchDevice(true);
      window.removeEventListener('touchstart', detectTouch);
    };
    window.addEventListener('touchstart', detectTouch);
    return () => window.removeEventListener('touchstart', detectTouch);
  }, []);

  const handleSubmenuEnter = (menu: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setActiveSubmenu(menu);
  };

  const handleSubmenuLeave = (menu: string) => {
    if (isTouchDevice) return; // Don't auto-close on touch devices
    submenuTimeoutRef.current = setTimeout(() => {
      if (activeSubmenu === menu) {
        setActiveSubmenu(null);
      }
    }, 1000); // Increased delay to 1000ms for better usability
  };

  const handleSubmenuClick = (menu: string) => {
    if (isTouchDevice) {
      setActiveSubmenu(activeSubmenu === menu ? null : menu);
    }
  };

  // Close submenu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeSubmenu && !submenuRefs.current[activeSubmenu]?.contains(event.target as Node)) {
        setActiveSubmenu(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeSubmenu]);

  const navigation = {
    main: [
      { name: 'Início', href: '/' },
      { name: 'Quem Somos', href: '/aspirvacuum' },
      { name: 'Contactos', href: '/contactos' },
    ],
    aspiracao: [
      { name: 'Assistência Técnica', href: '/assistencia-tecnica' }, // Mover para o topo
      { name: 'Sistemas Residenciais', href: '/sistemas-residenciais' },
      { name: 'Sistemas Comerciais', href: '/sistemas-comerciais' },
      { name: 'Sistemas Industriais', href: '/sistemas-industriais' },
      { name: 'Instalação', href: '/instalacao' },
      { name: 'Manutenção', href: '/manutencao' },
    ],
    loja: [
      { name: 'Todos os Produtos', href: '/loja' },
      { name: 'Acessórios', href: '/loja/acessorios' },
      { name: 'Consumíveis', href: '/loja/consumiveis' },
      { name: 'Kits', href: '/loja/kits' },
      { name: 'Tomadas', href: '/loja/tomadas' },
      { name: 'Tubagem', href: '/loja/tubagem' }, // Alterado de "Glutões" para "Tubagem"
      { name: 'Assistência Técnica', href: '/assistencia-tecnica' },
    ],
  };

  useEffect(() => {
    const logoImage = document.querySelector('img[src="/logo.jpg"]') as HTMLImageElement | null;
    if (logoImage) {
      const handleImageLoad = () => {
        setMobileMenuOpen(false);
        setActiveSubmenu(null);
      };
      if (logoImage.complete) {
        handleImageLoad();
      } else {
        logoImage.addEventListener('load', handleImageLoad);
      }
      return () => {
        logoImage.removeEventListener('load', handleImageLoad);
      };
    }
  }, []);

  // Add CSS styles for transitions
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .submenu-transition {
        opacity: 0;
        visibility: hidden;
        transform: translateY(-10px);
        transition: opacity 200ms ease-in-out, transform 200ms ease-in-out, visibility 200ms ease-in-out;
      }
      .submenu-transition.open {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
      }
      .submenu-container {
        padding: 4px 8px;
        margin: -4px -8px;
      }
      .submenu-content {
        position: absolute;
        top: 100%;
        left: 0;
        z-index: 50;
        min-width: 180px;
        background: white;
        border-radius: 0.375rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      }
      .nav-link {
        position: relative;
        white-space: nowrap;
        padding: 4px 6px;
        margin-right: 5px; /* Reduzido o espaçamento entre os botões */
      }
      .nav-link::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: #2563eb;
        transition: width 200ms ease-in-out;
      }
      .nav-link:hover::after {
        width: 100%;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <header className="bg-white shadow-sm relative z-40">
      <nav className="max-w-screen-xl mx-auto px-4" aria-label="Top">
        <div className="flex h-16 items-center">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img className="h-16 w-auto" src="/logo.jpg" alt="Aspirvacum" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center space-x-1 ml-[450px]">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="nav-link text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}

            {/* Aspiração Central Dropdown */}
            <div
              ref={(el) => (submenuRefs.current['aspiracao'] = el)}
              className="relative submenu-container"
              onMouseEnter={() => !isTouchDevice && handleSubmenuEnter('aspiracao')}
              onMouseLeave={() => handleSubmenuLeave('aspiracao')}
              onClick={() => handleSubmenuClick('aspiracao')}
            >
              <button
                className="nav-link flex items-center text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                aria-expanded={activeSubmenu === 'aspiracao'}
              >
                Aspiração Central
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                    activeSubmenu === 'aspiracao' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`submenu-transition submenu-content ${
                  activeSubmenu === 'aspiracao' ? 'open' : ''
                }`}
              >
                {navigation.aspiracao.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setActiveSubmenu(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Loja Dropdown */}
            <div
              ref={(el) => (submenuRefs.current['loja'] = el)}
              className="relative submenu-container"
              onMouseEnter={() => !isTouchDevice && handleSubmenuEnter('loja')}
              onMouseLeave={() => handleSubmenuLeave('loja')}
              onClick={() => handleSubmenuClick('loja')}
            >
              <button
                className="nav-link flex items-center text-base font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200"
                aria-expanded={activeSubmenu === 'loja'}
              >
                Loja
                <svg
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${
                    activeSubmenu === 'loja' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div
                className={`submenu-transition submenu-content ${
                  activeSubmenu === 'loja' ? 'open' : ''
                }`}
              >
                {navigation.loja.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setActiveSubmenu(null)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Aspiração Central Submenu */}
            <div className="space-y-1">
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                onClick={() => setActiveSubmenu(activeSubmenu === 'aspiracao' ? null : 'aspiracao')}
              >
                Aspiração Central
                <svg
                  className={`h-4 w-4 transform ${
                    activeSubmenu === 'aspiracao' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeSubmenu === 'aspiracao' && (
                <div className="pl-4">
                  {navigation.aspiracao.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Loja Submenu */}
            <div className="space-y-1">
              <button
                className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                onClick={() => setActiveSubmenu(activeSubmenu === 'loja' ? null : 'loja')}
              >
                Loja
                <svg
                  className={`h-4 w-4 transform ${
                    activeSubmenu === 'loja' ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeSubmenu === 'loja' && (
                <div className="pl-4">
                  {navigation.loja.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-100 hover:text-blue-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
