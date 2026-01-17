import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  /* ------------------ Detect active section ------------------ */
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  /* ------------------ Dynamic styles ------------------ */
  const isDarkSection = activeSection === "about";

  const headerBg = isDarkSection
    ? "bg-green-700/10"
    : "bg-white/10";

  const navTextColor = isDarkSection
    ? "text-white"
    : "text-gray-900";

  const subTextColor = isDarkSection
    ? "text-green-100"
    : "text-gray-500";

  /* ------------------ Component ------------------ */
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-colors duration-300 ${headerBg}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="font-display text-2xl md:text-3xl tracking-wide">
              <span className="text-green-700">RedAnt</span>
              <span className="text-harvest-gold"> Pro Farm</span>
              <span className={`text-xs ml-1 ${subTextColor}`}>
                Services
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                activeSection === link.href.replace("#", "");

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-all duration-200 
                    ${navTextColor}
                    ${isActive
                      ? "underline underline-offset-8"
                      : "hover:text-primary"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className={`flex items-center gap-2 text-sm font-medium ${navTextColor}`}
            >
              <Phone className="w-4 h-4 hover:animate-bounce" />
              <span>Call Us Today</span>
            </a>
            <Button size="lg">Get Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${navTextColor}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium py-2 transition-colors ${navTextColor}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <Button className="mt-2 w-full">Get Quote</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
