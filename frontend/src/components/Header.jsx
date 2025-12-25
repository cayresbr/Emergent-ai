import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { businessInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, t, changeLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <img
              src={businessInfo.logoUrl}
              alt="Oh La La Cafeteria"
              className="h-14 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {['home', 'about', 'menu', 'reviews', 'location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
                className="nav-link text-white hover:text-amber-400 transition-colors duration-300 text-sm font-medium tracking-wide uppercase"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors duration-300 px-3 py-2 rounded-none border border-amber-400/30 hover:border-amber-400"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm uppercase">{language}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-black/95 backdrop-blur-md border border-amber-400/30 shadow-xl">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        changeLanguage(lang.code);
                        setIsLangMenuOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm flex items-center space-x-2 transition-colors duration-200 ${
                        language === lang.code
                          ? 'text-amber-400 bg-amber-400/10'
                          : 'text-white hover:text-amber-400 hover:bg-amber-400/5'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Call Button */}
            <a
              href={businessInfo.phoneLink}
              className="flex items-center space-x-2 bg-amber-400 text-black px-5 py-2.5 hover:bg-amber-300 transition-all duration-300 text-sm font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>{t('hero.callNow')}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:text-amber-400 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-black/95 backdrop-blur-md border-t border-amber-400/20 py-6 space-y-4">
            {['home', 'about', 'menu', 'reviews', 'location'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
                className="block w-full text-left px-4 py-3 text-white hover:text-amber-400 hover:bg-amber-400/5 transition-all duration-300 text-sm uppercase tracking-wide"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
            
            {/* Mobile Language Selector */}
            <div className="px-4 pt-4 border-t border-amber-400/20">
              <p className="text-amber-400/60 text-xs uppercase mb-3">Language</p>
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`px-4 py-2 text-sm transition-all duration-300 ${
                      language === lang.code
                        ? 'bg-amber-400 text-black'
                        : 'bg-transparent text-white border border-amber-400/30 hover:border-amber-400'
                    }`}
                  >
                    {lang.flag} {lang.code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Action Buttons */}
            <div className="px-4 pt-4 space-y-3">
              <a
                href={businessInfo.phoneLink}
                className="flex items-center justify-center space-x-2 bg-amber-400 text-black px-5 py-3 hover:bg-amber-300 transition-all duration-300 text-sm font-semibold w-full"
              >
                <Phone className="w-4 h-4" />
                <span>{t('hero.callNow')}</span>
              </a>
              <a
                href={businessInfo.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 border border-amber-400 text-amber-400 px-5 py-3 hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm font-semibold w-full"
              >
                <MapPin className="w-4 h-4" />
                <span>{t('hero.getDirections')}</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
