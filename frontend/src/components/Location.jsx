import React from 'react';
import { MapPin, Phone, Clock, Facebook, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { businessInfo } from '../data/mock';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Location = () => {
  const { t } = useLanguage();
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [mapRef, mapVisible] = useScrollAnimation(0.1);
  const [addressRef, addressVisible] = useScrollAnimation(0.1);
  const [phoneRef, phoneVisible] = useScrollAnimation(0.1);
  const [hoursRef, hoursVisible] = useScrollAnimation(0.1);
  const [socialRef, socialVisible] = useScrollAnimation(0.1);

  return (
    <section id="location" className="py-24 bg-black relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
            {t('location.subtitle')}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {t('location.title')}
          </h3>
          <div className="w-20 h-px bg-amber-400 mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Embed */}
          <div 
            ref={mapRef}
            className={`relative transition-all duration-700 delay-100 ${
              mapVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="aspect-square sm:aspect-video lg:aspect-square bg-neutral-900 border border-amber-400/20 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3027.5!2d-111.8626!3d40.5660!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDMzJzU3LjYiTiAxMTHCsDUxJzQ1LjQiVw!5e0!3m2!1sen!2sus!4v1629900000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oh La La Location"
              />
            </div>
            {/* Map Overlay Link */}
            <a
              href={businessInfo.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 flex items-center space-x-2 bg-black/90 text-amber-400 px-4 py-2 text-sm hover:bg-amber-400 hover:text-black transition-all duration-300"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div 
              ref={addressRef}
              className={`flex items-start space-x-4 p-6 bg-neutral-950/50 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 ${
                addressVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-2">Address</h4>
                <p className="text-white/60">{businessInfo.address}</p>
                <a
                  href={businessInfo.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-amber-400 text-sm mt-3 hover:text-amber-300 transition-colors duration-300"
                >
                  <span>{t('location.directions')}</span>
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div 
              ref={phoneRef}
              className={`flex items-start space-x-4 p-6 bg-neutral-950/50 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 delay-100 ${
                phoneVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <Phone className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-2">Phone</h4>
                <a
                  href={businessInfo.phoneLink}
                  className="text-white/60 hover:text-amber-400 transition-colors duration-300"
                >
                  {businessInfo.phone}
                </a>
              </div>
            </div>

            {/* Hours */}
            <div 
              ref={hoursRef}
              className={`flex items-start space-x-4 p-6 bg-neutral-950/50 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 delay-200 ${
                hoursVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <Clock className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-3">{t('location.hours')}</h4>
                <div className="space-y-1 text-sm">
                  <p className="text-white/60">{businessInfo.hours.monday}</p>
                  <p className="text-white/60">{businessInfo.hours.tuesday}</p>
                  <p className="text-white/60">{businessInfo.hours.wednesday}</p>
                  <p className="text-white/60">{businessInfo.hours.thursday}</p>
                  <p className="text-white/60">{businessInfo.hours.friday}</p>
                  <p className="text-white/60">{businessInfo.hours.saturday}</p>
                  <p className="text-amber-400/80 font-medium">{businessInfo.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div 
              ref={socialRef}
              className={`flex items-start space-x-4 p-6 bg-neutral-950/50 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 delay-300 ${
                socialVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              <Facebook className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-white font-medium mb-2">{t('location.followUs')}</h4>
                <a
                  href={businessInfo.facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-white/60 hover:text-amber-400 transition-colors duration-300"
                >
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
    </section>
  );
};

export default Location;
