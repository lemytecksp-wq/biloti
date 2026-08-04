'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Calendar } from 'lucide-react';

interface SlideData {
  id: number;
  image: string;
  eyebrow: string;
  heading: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    image: 'https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-9-2026-02_17_33-AM-4.png',
    eyebrow: 'Trusted Cleaning',
    heading: 'Your Space, Our Care, Better Cleaning Begins Here',
  },
  {
    id: 2,
    image: 'https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-9-2026-02_17_33-AM-5.png',
    eyebrow: 'Professional Care',
    heading: 'Clean, Fresh, and Healthy Spaces Start Here',
  },
  {
    id: 3,
    image: 'https://biloti.co.nz/wp-content/uploads/2026/07/ChatGPT-Image-Jul-9-2026-02_17_34-AM-6.png',
    eyebrow: 'Fresh Spaces',
    heading: 'Bringing Shine to Your Home and Workplace',
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section 
      className="relative w-full h-[520px] sm:h-[600px] lg:h-[680px] overflow-hidden bg-[#0F172A]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Biloti Property Care Hero Showcase"
    >
      {/* Slides Backgrounds */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.heading}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center scale-105 transition-transform duration-10000 ease-out"
              referrerPolicy="no-referrer"
            />
            
            {/* Soft Dark Green / Navy Overlay for optimal legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#1F6F50]/60 to-[#0F172A]/40" />
            
            {/* Slide Content */}
            <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
              <div className="max-w-2xl text-white space-y-4 sm:space-y-6 animate-in fade-in slide-in-from-left-4 duration-700">
                
                {/* Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F6F50]/80 border border-emerald-400/30 text-emerald-200 text-xs sm:text-sm font-medium tracking-wide uppercase backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  <span>{slide.eyebrow}</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-medium leading-tight tracking-tight text-white drop-shadow-md">
                  {slide.heading}
                </h1>

                {/* Subtitle / Auckland Context */}
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
                  Expert residential & commercial property care solutions designed specifically for homes and businesses across Auckland, New Zealand.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                  <Link
                    href="/get-a-quote"
                    id={`hero-book-btn-${slide.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#0F172A] hover:bg-[#1F6F50] rounded-full shadow-lg transition-all transform hover:-translate-y-0.5"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book an Appointment</span>
                  </Link>

                  <a
                    href="#services"
                    id={`hero-explore-btn-${slide.id}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-white/10 hover:bg-[#1F6F50] border border-white/30 rounded-full backdrop-blur-xs transition-all"
                  >
                    <span>Explore Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Controls - Prev / Next */}
      <button
        onClick={prevSlide}
        id="hero-prev-slide-btn"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/40 hover:bg-[#1F6F50] text-white backdrop-blur-xs border border-white/20 transition-all focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        id="hero-next-slide-btn"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-slate-900/40 hover:bg-[#1F6F50] text-white backdrop-blur-xs border border-white/20 transition-all focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            id={`hero-indicator-${idx}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide 
                ? 'w-8 bg-[#1F6F50] border border-emerald-300' 
                : 'w-2.5 bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
