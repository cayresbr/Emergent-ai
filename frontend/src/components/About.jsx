import React from 'react';
import { Heart, Coffee, Car, Sun } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [textRef, textVisible] = useScrollAnimation(0.1);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.1);

  const features = [
    {
      icon: Heart,
      title: t('about.features.personalized'),
      description: t('about.features.personalizedDesc')
    },
    {
      icon: Coffee,
      title: t('about.features.ambiance'),
      description: t('about.features.ambianceDesc')
    },
    {
      icon: Car,
      title: t('about.features.driveThrough'),
      description: t('about.features.driveThroughDesc')
    },
    {
      icon: Sun,
      title: t('about.features.outdoor'),
      description: t('about.features.outdoorDesc')
    }
  ];

  return (
    <section id="about" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
            {t('about.subtitle')}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {t('about.title')}
          </h3>
          <div className="w-20 h-px bg-amber-400 mx-auto mt-6" />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div 
            ref={textRef}
            className={`space-y-6 transition-all duration-700 delay-100 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <p className="text-white/80 text-lg leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-white/60 leading-relaxed">
              {t('about.description2')}
            </p>
          </div>

          {/* Features Grid */}
          <div 
            ref={featuresRef}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-6 bg-black/50 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 ${
                  featuresVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: featuresVisible ? `${index * 100 + 200}ms` : '0ms' }}
              >
                <feature.icon className="w-8 h-8 text-amber-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="text-white font-medium mb-2">{feature.title}</h4>
                <p className="text-white/50 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
    </section>
  );
};

export default About;
