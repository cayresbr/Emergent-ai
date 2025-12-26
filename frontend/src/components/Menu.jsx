import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { menuItems } from '../data/mock';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Menu = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('coffee');
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [tabsRef, tabsVisible] = useScrollAnimation(0.1);
  const [itemsRef, itemsVisible] = useScrollAnimation(0.05);

  const categories = [
    { key: 'coffee', label: t('menu.categories.coffee') },
    { key: 'specialty', label: t('menu.categories.specialty') },
    { key: 'refreshers', label: t('menu.categories.refreshers') },
    { key: 'food', label: t('menu.categories.food') }
  ];

  return (
    <section id="menu" className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C9A042 1px, transparent 0)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
            {t('menu.subtitle')}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {t('menu.title')}
          </h3>
          <div className="w-20 h-px bg-amber-400 mx-auto mt-6" />
        </div>

        {/* Category Tabs */}
        <div 
          ref={tabsRef}
          className={`flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 transition-all duration-700 delay-100 ${
            tabsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 text-sm font-medium uppercase tracking-wider transition-all duration-300 rounded-full ${
                activeCategory === category.key
                  ? 'bg-amber-400 text-black'
                  : 'bg-transparent text-white/70 border border-white/20 hover:border-amber-400/50 hover:text-amber-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div 
          ref={itemsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems[activeCategory]?.map((item, index) => (
            <div
              key={item.id}
              className={`group p-6 bg-neutral-950/50 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 ${
                itemsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: itemsVisible ? `${index * 50 + 200}ms` : '0ms' }}
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-white font-medium text-lg group-hover:text-amber-400 transition-colors duration-300">
                  {item.name}
                </h4>
                <span className="text-amber-400 font-semibold text-lg">
                  {item.price}
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="w-0 group-hover:w-full h-px bg-amber-400/30 mt-4 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
    </section>
  );
};

export default Menu;
