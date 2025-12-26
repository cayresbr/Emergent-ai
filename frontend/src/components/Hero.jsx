import React from 'react';
import { MapPin, Phone, Star, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { businessInfo } from '../data/mock';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? 'fill-amber-400 text-amber-400'
            : 'text-amber-400/30'
        }`}
      />
    ));
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A042 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Golden Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src={businessInfo.logoUrl}
              alt="Oh La La Cafeteria"
              className="h-40 sm:h-52 w-auto animate-fade-in rounded-full"
              style={{ background: 'transparent' }}
            />
          </div>

          {/* Slogan */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-wide animate-slide-up">
            {t('hero.slogan')}
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-amber-400/80 mb-8 font-light tracking-wider animate-slide-up animation-delay-200">
            {t('hero.tagline')}
          </p>

          {/* Rating */}
          <div className="flex items-center justify-center space-x-2 mb-10 animate-slide-up animation-delay-300">
            <div className="flex">{renderStars(businessInfo.rating)}</div>
            <span className="text-white/70 text-sm ml-2">
              {businessInfo.rating} · {t('hero.rating')}
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up animation-delay-400">
            <button
              onClick={scrollToMenu}
              className="group w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black transition-all duration-300 text-sm font-semibold uppercase tracking-wider rounded-full"
            >
              {t('hero.viewMenu')}
            </button>
            <a
              href={businessInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-transparent border border-white/30 text-white hover:border-amber-400 hover:text-amber-400 transition-all duration-300 text-sm font-medium uppercase tracking-wider rounded-full"
            >
              <MapPin className="w-4 h-4" />
              <span>{t('hero.getDirections')}</span>
            </a>
            <a
              href={businessInfo.phoneLink}
              className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 bg-amber-400 text-black hover:bg-amber-300 transition-all duration-300 text-sm font-semibold uppercase tracking-wider rounded-full"
            >
              <Phone className="w-4 h-4" />
              <span>{t('hero.callNow')}</span>
            </a>
            <a
              href={businessInfo.doordashLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto flex items-center justify-center px-8 py-3 bg-white hover:bg-gray-100 transition-all duration-300 rounded-full"
            >
              <img
                src={businessInfo.doordashLogo}
                alt="Order on DoorDash"
                className="h-10 w-auto"
              />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-8 h-8 text-amber-400/50 mx-auto" />
          </div>
        </div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
    </section>
  );
};

export default Hero;
