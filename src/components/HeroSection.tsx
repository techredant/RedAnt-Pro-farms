import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

import heroImage1 from "@/assets/hero-silage.jpg";
import heroImage2 from "@/assets/hero-silage-2.jpg";
import heroImage3 from "@/assets/hero-silage-3.jpg";
import heroImage4 from "@/assets/hero-silage-4.jpg";

const slides = [
  {
    image: heroImage1,
    alt: "Silage harvesting in green fields",
  },
  {
    image: heroImage2,
    alt: "Fresh silage being stored",
  },
  {
    image: heroImage3,
    alt: "Forage harvester cutting corn",
  },
  {
    image: heroImage4,
    alt: "Wrapped silage bales on farmland",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-transparent" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-primary-foreground/50 hover:bg-primary-foreground/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-10 md:pt-20">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground text-sm font-semibold uppercase tracking-wider rounded mb-6">
            Professional Silage Services
          </span>
          <h1 className="font-display text-3xl md:text-7xl lg:text-8xl text-primary-foreground leading-none mb-6">
            REDANT PRO
            <br />
            <span className="text-harvest-gold">FARM SERVICES</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-8">
            Expert hay/silage harvesting, Farm preparation, planting and harvesting,  storage, and consulting services. We help farmers maximize their fodder quality and livestock nutrition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full">

            <a href="#services" className="flex-1">
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

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/80 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
