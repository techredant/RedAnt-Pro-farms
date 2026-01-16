import { Wheat, Truck, BarChart3, Wrench, Layers, Leaf } from "lucide-react";

const services = [
  {
    icon: Layers, // placeholder for Land Preparation & Planting
    title: "Land Preparation & Planting",
    description:
      "Expert soil preparation, plowing, and planting services to ensure optimal crop growth from day one.",
  },
  {
    icon: Wheat,
    title: "Hay Silage Harvesting",
    description:
      "State-of-the-art harvesting equipment and experienced operators ensure maximum nutritional value for your livestock.",
  },
  {
    icon: Leaf,
    title: "Animal Feeds",
    description:
      "High-quality, balanced feed solutions to improve livestock health and productivity.",
  },
  {
    icon: Truck,
    title: "Transport & Delivery",
    description:
      "Reliable fleet ensures timely delivery of silage, feed, and other agricultural products directly to your farm.",
  },
  {
    icon: Wrench,
    title: "Equipment Maintenance & Leasing",
    description:
      "Keep your machinery running at peak performance with professional maintenance and lease modern equipment when needed.",
  },
  {
    icon: BarChart3,
    title: "Agri-Consultancy (Soil Testing)",
    description:
      "Expert analysis and advice on soil health, crop planning, and sustainable farming practices for better yields.",
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
            Comprehensive agricultural solutions tailored to your farm's needs. From preparation to consultancy, we've got you covered.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
