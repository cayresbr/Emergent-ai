import React from 'react';
import { Heart, Coffee, ArrowUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { businessInfo } from '../data/mock';

const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-neutral-950 border-t border-amber-400/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <img
              src={businessInfo.logoUrl}
              alt="Oh La La Cafeteria"
              className="h-20 w-auto mb-6"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-md">
              {t('about.description1')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-400 text-sm uppercase tracking-wider mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {['home', 'about', 'menu', 'reviews', 'location'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item === 'home' ? 'hero' : item)}
                  className="block text-white/50 hover:text-amber-400 transition-colors duration-300 text-sm"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-amber-400 text-sm uppercase tracking-wider mb-6">Contact</h4>
            <div className="space-y-3 text-sm">
              <p className="text-white/50">{businessInfo.address}</p>
              <a
                href={businessInfo.phoneLink}
                className="block text-white/50 hover:text-amber-400 transition-colors duration-300"
              >
                {businessInfo.phone}
              </a>
              <p className="text-white/50">{businessInfo.hours.weekdays}</p>
              <p className="text-white/50">{businessInfo.hours.sunday}</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-amber-400/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            {t('footer.rights')}
          </p>
          <div className="flex items-center text-white/30 text-sm">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 mx-2 text-amber-400 fill-amber-400" />
            <Coffee className="w-4 h-4 text-amber-400" />
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-amber-400 text-black hover:bg-amber-300 transition-all duration-300 shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

export default Footer;
