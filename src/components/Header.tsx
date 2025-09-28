import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-4 space-x-reverse">
            {/* NAHT Logo */}
            <img 
              src="/logo/logo_2.png" 
              alt="الأكاديمية الوطنية العالي للتدريب" 
              className="h-10 w-auto"
            />
            {/* Green Circle Logo */}
            <img 
              src="/logo/logo_1.png" 
              alt="الدائرة الخضراء للأمن السيبراني" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
            <a href="#programs" className="text-gray-700 hover:text-emerald-600 transition-colors">البرامج</a>
            <Link to="/non-specialists" className="text-gray-700 hover:text-emerald-600 transition-colors">دورة غير المختصين</Link>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors">الأسعار</a>
            <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition-colors">الأسئلة الشائعة</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">تواصل معنا</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <Link
              to="/register"
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors"
            >
              سجّل الآن
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#programs" className="text-gray-700 hover:text-emerald-600 transition-colors">البرامج</a>
              <Link to="/non-specialists" className="text-gray-700 hover:text-emerald-600 transition-colors">دورة غير المختصين</Link>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-600 transition-colors">الأسعار</a>
              <a href="#faq" className="text-gray-700 hover:text-emerald-600 transition-colors">الأسئلة الشائعة</a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">تواصل معنا</a>
              <Link
                to="/register"
                className="bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-700 transition-colors w-full"
              >
                سجّل الآن
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
