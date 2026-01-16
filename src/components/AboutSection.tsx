import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Over 15 years of agricultural experience",
  "Modern, well-maintained equipment fleet",
  "Certified silage quality specialists",
  "24/7 availability during harvest season",
  "Competitive and transparent pricing",
  "Trusted by 200+ local farms",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-green text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-3 py-1 bg-secondary-foreground/10 text-secondary-foreground text-sm font-semibold uppercase tracking-wider rounded mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6">
              THE REDANT
              <br />
              <span className="text-harvest-gold">ADVANTAGE</span>
            </h2>
            <p className="text-secondary-foreground/90 text-lg mb-8 leading-relaxed">
              Just like the hardworking red ant, we believe in strength through teamwork, 
              precision in every task, and unwavering dedication to our farmers. Our name 
              represents our commitment to delivering exceptional results, no matter the challenge.
            </p>

            <ul className="space-y-3 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-harvest-gold flex-shrink-0" />
                  <span className="text-secondary-foreground/90">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="heroOutline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              Learn More About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary-foreground/10 rounded-xl p-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-harvest-gold mb-2">15+</div>
              <div className="text-secondary-foreground/80 font-medium">Years Experience</div>
            </div>
            <div className="bg-secondary-foreground/10 rounded-xl p-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-harvest-gold mb-2">200+</div>
              <div className="text-secondary-foreground/80 font-medium">Happy Farmers</div>
            </div>
            <div className="bg-secondary-foreground/10 rounded-xl p-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-harvest-gold mb-2">50K</div>
              <div className="text-secondary-foreground/80 font-medium">Acres Harvested</div>
            </div>
            <div className="bg-secondary-foreground/10 rounded-xl p-6 text-center">
              <div className="font-display text-5xl md:text-6xl text-harvest-gold mb-2">98%</div>
              <div className="text-secondary-foreground/80 font-medium">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
