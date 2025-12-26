import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { reviews } from '../data/mock';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Reviews = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [featuredRef, featuredVisible] = useScrollAnimation(0.1);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'fill-amber-400 text-amber-400' : 'text-amber-400/30'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-neutral-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-amber-400 text-sm uppercase tracking-[0.3em] mb-4">
            {t('reviews.subtitle')}
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-light text-white">
            {t('reviews.title')}
          </h3>
          <div className="w-20 h-px bg-amber-400 mx-auto mt-6" />
        </div>

        {/* Featured Review */}
        <div 
          ref={featuredRef}
          className={`max-w-4xl mx-auto mb-12 transition-all duration-700 delay-100 ${
            featuredVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative bg-black/50 border border-amber-400/20 p-8 sm:p-12">
            {/* Quote Icon */}
            <Quote className="absolute top-6 left-6 w-12 h-12 text-amber-400/10" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {renderStars(reviews[currentIndex].rating)}
              </div>
              
              {/* Review Text */}
              <p className="text-white/90 text-lg sm:text-xl text-center leading-relaxed mb-8 italic">
                "{reviews[currentIndex].text}"
              </p>
              
              {/* Reviewer Info */}
              <div className="text-center">
                <p className="text-amber-400 font-medium text-lg">
                  {reviews[currentIndex].name}
                </p>
                <p className="text-white/40 text-sm mt-1">
                  {reviews[currentIndex].date}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevReview}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-amber-400 transition-colors duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextReview}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-amber-400 transition-colors duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'bg-amber-400 w-6'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div 
          ref={gridRef}
          className="grid md:grid-cols-3 gap-6"
        >
          {reviews.slice(0, 3).map((review, index) => (
            <div
              key={review.id}
              className={`p-6 border border-amber-400/10 hover:border-amber-400/30 transition-all duration-500 ${
                index === 0 ? 'bg-black/50' : 'bg-neutral-900/50'
              } ${
                gridVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: gridVisible ? `${index * 100 + 300}ms` : '0ms' }}
            >
              <div className="flex mb-4">{renderStars(review.rating)}</div>
              <p className="text-white/70 text-sm leading-relaxed mb-4 line-clamp-3">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between">
                <span className="text-amber-400 text-sm font-medium">
                  {review.name}
                </span>
                <span className="text-white/30 text-xs">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Link */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-500 ${
            gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="https://maps.app.goo.gl/fd9z2VjrwNtBzSbJA?g_st=ic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-amber-400/80 hover:text-amber-400 transition-colors duration-300 text-sm"
          >
            <span className="border-b border-amber-400/30 hover:border-amber-400">View all reviews on Google Maps</span>
          </a>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />
    </section>
  );
};

export default Reviews;
