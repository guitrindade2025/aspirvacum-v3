import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout>();

  const handleSubmenuEnter = (menu: string) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    setActiveSubmenu(menu);
  };

  const handleSubmenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 300); // Delay maior para dar tempo de mover o mouse
  };

  return (
    <div className="header">
      <button 
        className="flex items-center text-gray-700 hover:text-blue-600"
        aria-label="Menu de Aspiração Central"
        aria-expanded={activeSubmenu === 'aspiracao'}
        aria-haspopup="true"
      >
        <span>Aspiração Central</span>
      </button>

      <div
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
      >
      </div>
    </div>
  );
};

export default Header;
