import { Wheat, Truck, BarChart3, Wrench } from "lucide-react";

const services = [
  {
    icon: Wheat,
    title: "Silage Harvesting",
    description:
      "State-of-the-art harvesting equipment and experienced operators ensure optimal cutting and processing for maximum nutritional value.",
  },
  {
    icon: Truck,
    title: "Transport & Delivery",
    description:
      "Reliable fleet for efficient transport of harvested silage from field to storage. Timely delivery guaranteed.",
  },
  {
    icon: BarChart3,
    title: "Quality Consulting",
    description:
      "Expert advice on crop timing, storage methods, and fermentation processes to maximize silage quality and livestock benefits.",
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance",
    description:
      "Keep your silage equipment running at peak performance with our professional maintenance and repair services.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-sm font-semibold uppercase tracking-wider rounded mb-4">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            OUR SERVICES
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive silage solutions tailored to your farm's unique needs.
            From harvest to storage, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
