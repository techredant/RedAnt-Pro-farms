import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import heroImage1 from "@/assets/hero-silage.jpg";
import heroImage2 from "@/assets/hero-silage-2.jpg";
import heroImage3 from "@/assets/hero-silage-3.jpg";
import heroImage4 from "@/assets/hero-silage-4.jpg";

const slides = [
  { image: heroImage1, alt: "Silage harvesting in green fields" },
  { image: heroImage2, alt: "Fresh silage being stored" },
  { image: heroImage3, alt: "Forage harvester cutting corn" },
  { image: heroImage4, alt: "Wrapped silage bales on farmland" },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(
    () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    []
  );

  const prevSlide = useCallback(
    () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
    []
  );

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ===== BACKGROUND SLIDES ===== */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
          </div>
        ))}

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
      </div>

      {/* ===== SLIDE ARROWS ===== */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="hidden md:flex absolute left-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="hidden md:flex absolute right-6 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 container mx-auto px-4 pt-10 pb-20">
        <div className="max-w-3xl animate-fade-in-up">
          {/* <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-semibold uppercase tracking-wider rounded mb-6 shadow">
            Professional Agricultural Services
          </span> */}

          <h1 className="font-display text-4xl md:text-7xl lg:text-8xl text-white leading-none mb-6 drop-shadow-xl">
            RedAnt Pro
            <br />
            <span className="text-harvest-gold">Farm Services</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-10">
            Expert hay & silage harvesting, land preparation, planting, storage,
            transport, and consultancy — helping farmers maximize yield, quality,
            and livestock nutrition.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <a href="#contact" className="flex-1">
              <Button variant="hero" size="xl" className="w-full">
                Get a Free Quote
              </Button>
            </a>

            <a href="#services" className="flex-1">
              <Button variant="heroOutline" size="xl" className="w-full">
                Our Services
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* ===== SLIDE DOTS ===== */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${index === currentSlide
                ? "bg-primary w-8"
                : "bg-white/40 w-3 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <a
        href="#services"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
