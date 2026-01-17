import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Over 10 years of agricultural experience",
  "Modern, well-maintained equipment fleet",
  "Certified silage quality specialists",
  "24/7 availability during harvest season",
  "Competitive and transparent pricing",
  "Trusted by 200+ local farms",
];

// 🔥 Reusable CountUp hook
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration]);

  return count;
};

const AboutSection = () => {
  // 🔥 Animated stats
  const years = useCountUp(10);
  const farmers = useCountUp(200);
  const acres = useCountUp(50000);
  const satisfaction = useCountUp(98);

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-gradient-green text-secondary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 bg-secondary-foreground/10 text-secondary-foreground text-sm font-semibold uppercase tracking-wider rounded mb-4">
              Why Choose Us
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              The RedAnt
              <br />
              <span className="text-harvest-gold">Advantage</span>
            </h2>

            <p className="text-secondary-foreground/90 text-lg mb-8 leading-relaxed">
              Just like the hardworking red ant, we believe in strength through teamwork,
              precision in every task, and unwavering dedication to our farmers.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-harvest-gold flex-shrink-0" />
                  <span className="text-secondary-foreground/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              variant="heroOutline"
              size="lg"
              className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary-foreground/10 rounded-xl p-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-harvest-gold mb-2">
                {years}+
              </div>
              <div className="text-secondary-foreground/80 font-medium">
                Years Experience
              </div>
            </div>

            <div className="bg-secondary-foreground/10 rounded-xl p-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-harvest-gold mb-2">
                {farmers}+
              </div>
              <div className="text-secondary-foreground/80 font-medium">
                Happy Farmers
              </div>
            </div>

            <div className="bg-secondary-foreground/10 rounded-xl p-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-harvest-gold mb-2">
                {Math.floor(acres / 1000)}K
              </div>
              <div className="text-secondary-foreground/80 font-medium">
                Acres Harvested
              </div>
            </div>

            <div className="bg-secondary-foreground/10 rounded-xl p-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-harvest-gold mb-2">
                {satisfaction}%
              </div>
              <div className="text-secondary-foreground/80 font-medium">
                Satisfaction Rate
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
