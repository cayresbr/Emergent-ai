import React, { useState, useEffect } from 'react';
import { businessInfo } from '../data/mock';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after animation completes
    const animationTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Complete loading after fade
    const completeTimer = setTimeout(() => {
      setIsAnimating(false);
      onLoadingComplete();
    }, 3200);

    return () => {
      clearTimeout(animationTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  if (!isAnimating) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${
        isFading ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #C9A042 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Golden Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-400/10 rounded-full blur-3xl animate-pulse-slow" />

      {/* Logo Container */}
      <div className="relative flex flex-col items-center">
        {/* Animated Ring */}
        <div className="absolute w-64 h-64 sm:w-80 sm:h-80">
          <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="0.5"
              strokeDasharray="70 200"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9A042" stopOpacity="0" />
                <stop offset="50%" stopColor="#C9A042" stopOpacity="1" />
                <stop offset="100%" stopColor="#C9A042" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Second Ring */}
        <div className="absolute w-72 h-72 sm:w-96 sm:h-96">
          <svg className="w-full h-full animate-spin-reverse" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="url(#goldGradient2)"
              strokeWidth="0.3"
              strokeDasharray="50 150"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="goldGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C9A042" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#f0d78c" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#C9A042" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Logo */}
        <div className="relative z-10 animate-logo-appear">
          <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full overflow-hidden animate-logo-pulse">
            <img
              src={businessInfo.logoUrl}
              alt="Oh La La Cafeteria"
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>

        {/* Brand Name */}
        <div className="mt-8 overflow-hidden">
          <h1 className="text-2xl sm:text-3xl font-light text-white tracking-[0.3em] animate-text-reveal">
            OH LA LA
          </h1>
        </div>

        {/* Tagline */}
        <div className="mt-3 overflow-hidden">
          <p className="text-amber-400/70 text-sm tracking-[0.2em] animate-text-reveal-delay">
            CAFETERIA
          </p>
        </div>

        {/* Loading Bar */}
        <div className="mt-10 w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-amber-400/50 via-amber-400 to-amber-400/50 animate-loading-bar" />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-amber-400/20 animate-corner-appear" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r border-t border-amber-400/20 animate-corner-appear" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l border-b border-amber-400/20 animate-corner-appear" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-amber-400/20 animate-corner-appear" />
    </div>
  );
};

export default LoadingScreen;
