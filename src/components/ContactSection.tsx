import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneNumber = "+254724230663";
  const whatsappNumber = "254724230663";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return false;
    }
    if (!formData.phone.trim()) {
      toast.error("Please enter your phone number");
      return false;
    }
    if (!formData.message.trim()) {
      toast.error("Please tell us about your silage needs");
      return false;
    }
    return true;
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const message = encodeURIComponent(
      `*New Quote Request from Website*\n\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Phone:* ${formData.phone.trim()}\n` +
      `${formData.email ? `*Email:* ${formData.email.trim()}\n` : ""}` +
      `*Message:*\n${formData.message.trim()}`
    );

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");

    toast.success("Opening WhatsApp...", {
      description: "Complete your message in WhatsApp to reach us!",
      icon: <CheckCircle className="w-5 h-5" />,
    });

    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleDirectWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in your silage services.");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold uppercase tracking-wider rounded mb-4">
              Get In Touch
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 font-bold">
              READY TO
              <br />
              <span className="text-primary">GET STARTED?</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Contact us today for a free consultation and quote. Our team is ready
              to help you maximize your silage quality and farm productivity.
            </p>

            <div className="space-y-6">
              <a
                href={`tel:${phoneNumber}`}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    0724 230 663
                  </span>
                </div>
              </a>

              <button
                onClick={handleDirectWhatsApp}
                className="flex items-start gap-4 group cursor-pointer w-full text-left"
              >
                <div className="w-12 h-12 rounded-lg bg-whatsapp/10 flex items-center justify-center group-hover:bg-whatsapp/20 transition-colors">
                  <MessageCircle className="w-5 h-5 text-whatsapp" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">WhatsApp</div>
                  <span className="text-muted-foreground group-hover:text-whatsapp transition-colors">
                    Message us directly
                  </span>
                </div>
              </button>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=antfarmservice@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <span className="text-muted-foreground group-hover:text-primary transition-colors">
                    antfarmservice@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <span className="text-muted-foreground">Mulot, Kenya</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Hours</div>
                  <span className="text-muted-foreground">
                    24/7 during harvest season
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-8 shadow-card">
            <h3 className="font-display text-2xl mb-2 font-bold text-card-foreground">REQUEST A QUOTE</h3>
            <p className="text-muted-foreground mb-6 text-sm">
              Fill out the form and we'll reach you via WhatsApp
            </p>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-5">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address (optional)"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number * (e.g., 0724 123 456)"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your farm and silage needs... *"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="whatsapp"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                <MessageCircle className="w-5 h-5" />
                Send via WhatsApp
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">Or contact directly</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={() => window.location.href = `tel:${phoneNumber}`}
                  className="w-full"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  size="lg"
                  onClick={handleDirectWhatsApp}
                  className="w-full"
                >
                  <MessageCircle className="w-4 h-4" />
                  Quick Chat
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;