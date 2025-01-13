import React, { useEffect } from 'react';
import { Brain } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Logo() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top when redirected to home page
  useEffect(() => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname]);

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <div 
      onClick={handleLogoClick}
      className="flex items-center cursor-pointer"
    >
      <Brain className="h-8 w-8 text-primary" />
      <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">YAKSEN</span>
    </div>
  );
}
