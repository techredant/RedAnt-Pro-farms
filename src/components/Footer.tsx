const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <span className="font-display text-2xl">
              <span className="text-primary">REDANT</span>
              <span> PRO FARM</span>
            </span>
            <p className="text-background/70 mt-4 text-sm leading-relaxed">
              Professional silage services for modern farms. 
              Quality, reliability, and expertise you can trust.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-4">QUICK LINKS</h4>
            <nav className="space-y-2">
              <a href="#home" className="block text-background/70 hover:text-harvest-gold transition-colors text-sm">Home</a>
              <a href="#services" className="block text-background/70 hover:text-harvest-gold transition-colors text-sm">Services</a>
              <a href="#about" className="block text-background/70 hover:text-harvest-gold transition-colors text-sm">About Us</a>
              <a href="#contact" className="block text-background/70 hover:text-harvest-gold transition-colors text-sm">Contact</a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-4">OUR SERVICES</h4>
            <nav className="space-y-2">
              <span className="block text-background/70 text-sm">Silage Harvesting</span>
              <span className="block text-background/70 text-sm">Transport & Delivery</span>
              <span className="block text-background/70 text-sm">Quality Consulting</span>
              <span className="block text-background/70 text-sm">Equipment Maintenance</span>
            </nav>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {new Date().getFullYear()} REDANT PRO FARM SERVICES. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
